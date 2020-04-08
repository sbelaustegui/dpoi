import {HttpService} from "./HttpService.js";

const api = '/api/1.0/';
const credential = 'sbelaustegui';

class UserService {

    constructor(serviceURL) {
        this.usersList = undefined;
        this.httpService = new HttpService(serviceURL);
    }

    get users(){
        return this.usersList ? new Promise.resolve(this.usersList) : this.getUsers();
    }

    getUsers() {
        return new Promise( (resolve, reject) => {
            this.httpService.getRequest(api + 'list?credential='+credential)
                .then(body => {
                    let jsonBody = JSON.parse(body);
                    this.usersList = jsonBody.payload.items;
                    resolve(this.usersList);
                })
                .catch(err => reject(err))
        })
    };

    postUser(user) {
        return new Promise( (resolve, reject) => {
            this.httpService.postRequest(api + 'create?credential='+credential, user)
                .then(body => {
                    let user = JSON.parse(body).payload;
                    this.usersList.push(user);
                    resolve(user);
                })
                .catch(err => reject(err))
        })
    };

    deleteUser(userId) {
        const formData = new FormData();
        formData.append('id', userId);
        return new Promise( (resolve, reject) => {
            this.httpService.postRequest(api + 'delete?credential='+credential, formData)
                .then(body => {
                    this.usersList.splice(this.usersList.findIndex(user => user.id === userId), 1);
                    resolve(this.usersList);
                })
                .catch(err => reject(err))
        })
    };
}

export { UserService };

