//
// const service = 'http://dpoi2012api.appspot.com/api/1.0/';
// export let users = [];


export class UserService {

    constructor(serviceURL) {
        this.service = serviceURL;
    }

    get users(){
        return this.users ? Promise.resolve(this.users) : this.getUsers();
    }

    getUsers() {
        return fetch(this.service + 'list?credential=sbelaustegui')
            .then(function (response) {
                return response.json();
            })
            .then(body => {
                this.users = body.payload.items;
            })
            .catch(err => console.log(err))
    };
}

