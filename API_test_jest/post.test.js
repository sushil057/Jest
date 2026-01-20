const axios = require('axios')

describe('Post request', () =>{
    test('The post request has been executed successfully', async()=>{
        const payload={
            userId: 21,
            title: 'this is a test post request',
            completed: false
        }
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts')
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id')
        console.log(response.data)

    })
})