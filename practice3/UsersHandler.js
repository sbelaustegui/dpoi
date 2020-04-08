import {UserService} from "./UserService.js";
import {ObjectTable} from "./ObjectTable.js";
import {getClosestParentElementByQuery, hideLoader, showLoader} from "./utils.js";

class UsersHandler {

    usersTable;

    constructor(url, values, actions) {
        this.userService = new UserService(url);
        this.values = values;
        this.actions = actions.map(action => {
            action.function = this[action.type + 'User'].bind(this);
            return action;
        });
        this.getUsers();
        document.getElementById("userFormData").addEventListener('click', this.postUser.bind(this));
    }

    // Request Users and renders the Table
    getUsers () {
        this.userService.users
            .then(res => {
                this.usersTable = new ObjectTable('users-list', this.values, res, this.actions);
                hideLoader();
                console.log(res)
            }).catch(err => {
                console.log(err)
            }
        );
    };


    // Post User
    postUser(event) {
        showLoader();
        const formData = new FormData(event.target.form);
        this.userService.postUser(formData)
            .then(user => {
                this.usersTable.addRow(user);
                hideLoader();
            }).catch(err => {
                console.log(err)
            }
        );
    };


    viewUser(event) {
        console.log(event.target.dataset.id);
    };

    editUser(event) {
        console.log(event.target.dataset.id);
    };

    deleteUser(event) {
        showLoader();
        const id = getClosestParentElementByQuery(event.target, 'tr').id;
        this.userService.deleteUser(id)
            .then(() => {
                this.usersTable.deleteRow(id);
                hideLoader();
            }).catch(err => {
                console.log(err);
            }
        );
    };
}

export {UsersHandler};
