const axios = require('axios');
// const { expect } = require('chai');

describe('Post request', () =>{
    test('The post request has been executed successfully', async()=>{
        const payload={
            userId: 21,
            title: 'this is a test post request',
            completed: false
        }
        const startTime = Date.now();
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts');
        const endTime = Date.now();
        const responseTime = endTime-startTime;
        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        expect(responseTime).toBeLessThan(600);
        console.log(response.data);
        console.log(responseTime);

    })
})