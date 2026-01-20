const axios = require('axios');

describe('Get request fetched the data successfully from the API', ()=>{
    test('Get request provides the list of users', async ()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        expect(response.status).toBe(200);
        // expect(response.data.length).toBeGreaterThan(0);
        expect(response.data[1]).toHaveProperty('userId','id','title','completed');
        console.log(response.data[5]);

    })
})