import {UserService} from './UserService.js';

const userService = new UserService('http://dpoi2012api.appspot.com');
const userTableValues = ['firstname', 'lastname', 'mail', 'phone'];
const userTableActions = ['far fa-calendar-alt', 'fas fa-edit', 'fas fa-trash-alt'];

// Request Users
const getUsers = () => {
    userService.users
        .then(res => {
            userTableGenerator(res);
            hideLoader();
            console.log(res)
        }).catch(err => {
        console.log(err)
    });
};
window.onload = getUsers;

// Post User
const postUser = (event) => {
    document.getElementsByClassName('fa-spinner')[0].className -= ' hide';
    const formData = new FormData(event.target.form);
    userService.postUser(formData)
        .then(res => {
            userTableGenerator(res);
            document.getElementsByClassName('fa-spinner')[0].className += ' hide';
            console.log(res)
        }).catch(err => {
        console.log(err)
    });
};
document.getElementById("userFormData").addEventListener('click', postUser);

const hideLoader = () => {
    document.getElementsByClassName('fa-spinner')[0].className += ' hide';
};

const userTableGenerator = (users) => {
    const tableBody = document.getElementById("users-list");
    users.forEach(user => {
        const values = Object.values(destruct(user, userTableValues));
        const row = elementRowGenerator(values);
        addElementActionToRow(row);
        tableBody.append(row)
    });
};

const elementRowGenerator = (cells) => {
    const row = document.createElement('tr');
    cells.forEach(cell => {
        const td = document.createElement('td');
        td.append(cell);
        row.append(td)
    });
    return row;
};

const addElementActionToRow = (row) => {
    userTableActions.forEach(icon => {
        const td = document.createElement('td');
        td.className += 'icon';
        const iconCell = document.createElement('i');
        iconCell.className += icon;
        td.append(iconCell);
        row.append(td);
    })
};

const destruct = (obj, keys) => keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
