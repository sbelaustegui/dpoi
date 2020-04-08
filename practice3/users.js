import {UsersHandler} from "./UsersHandler.js";


const userServiceUrl = 'http://dpoi2012api.appspot.com';
const usersValues = ['name', 'lastname', 'mail', 'phone'];
const usersActions = [
    {
        type: 'view',
        icon: 'far fa-calendar-alt'
    },{
        type: 'edit',
        icon: 'fas fa-edit'
    },{
        type: 'delete',
        icon: 'fas fa-trash-alt'
    }
];

window.onload = () => {
    new UsersHandler(userServiceUrl, usersValues, usersActions);
};

