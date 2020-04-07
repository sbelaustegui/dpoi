import {UserService} from './UserService.js';
// import {tableGenerator} from './TableElement/CustomTable.js';
import {destruct, hideLoader, showLoader} from './utils.js';

const userService = new UserService('http://dpoi2012api.appspot.com');
const userTableValues = ['firstname', 'lastname', 'mail', 'phone'];
const usersTableId = 'users-list';





// ----------------------- ACTIONS -------------------------- //

const viewUser = (event) => {
    console.log(event.target.dataset.id);
};

const editUser = (event) => {
    console.log(event.target.dataset.id);
};
const deleteUser = (event) => {
    const id = event.target.dataset.id;
    userService.deleteUser(id);
};


const userTableActions = [
    {
        type: 'view',
        icon: 'far fa-calendar-alt',
        actionFunction: viewUser
    },{
        type: 'edit',
        icon: 'fas fa-edit',
        actionFunction: editUser
    },{
        type: 'delete',
        icon: 'fas fa-trash-alt',
        actionFunction: deleteUser
    }
];

// ----------------------- USER API METHODS -------------------------- //

// Request Users
const getUsers = () => {
    userService.users
        .then(res => {
            // const users = res.map(user => {
            //     Object.values(destruct(user, userTableValues));
            // });
            const users = [[{hola: 'a'}, {hola: 'b'}, {hola: 'c'}]];
            document.querySelector('#custom-table').customRows(users);
            // tableGenerator(res, usersTableId, userTableValues, userTableActions);
            hideLoader();
            console.log(res)
        }).catch(err => {
        console.log(err)
    });
};

// Make window calls 'getUsers' on load.
window.onload = getUsers;

// Post User
const postUser = (event) => {
    showLoader();
    const formData = new FormData(event.target.form);
    userService.postUser(formData)
        .then(res => {
            // TODO modify this to push only new object
            // tableGenerator(res, usersTableId, userTableValues, userTableActions);
            hideLoader();
            console.log(res)
        }).catch(err => {
        console.log(err)
    });
};

// Make form data calls 'postUser' on submit.
document.getElementById("userFormData").addEventListener('click', postUser);


