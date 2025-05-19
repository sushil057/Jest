const axios = require('axios')
const Users = require('./users.js')

jest.mock('axios');
test('Fetch Users', () =>{
    const users = [{name: 'Sushil'}];
    const resp = {data: users};
    console.log(Users)
    axios.get.mockResolvedValue(resp);
    return Users.all().then(data => expect(data).toEqual(users));
});