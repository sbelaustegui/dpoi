import {HttpService} from "./HttpService.js";

const api = '/api/1.0/';
const credential = 'dpoi';

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
            this.httpService.getRequest(api + 'list_delay?credential='+credential)
                .then(body => {
                    let jsonBody = JSON.parse(body);
                    this.usersList = jsonBody.payload.items;
                    resolve(this.usersList);
                })
                .catch(err => reject(err))
        })
    };
}

export { UserService };

