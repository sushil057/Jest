const axios = require('axios')
class Users{
    static all() {
        return axios.get('http://localhost:3000/employees').then(resp => resp.data);
    }
}
module.exports = Users;