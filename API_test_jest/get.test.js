const axios = require('axios');


describe('Get request fetched the data successfully from the API', ()=>{
    test('Get request provides the list of users', async ()=>{
        const startTime = Date.now();
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        expect(response.status).toBe(200);
        expect(responseTime).toBeLessThan(500);
        expect(response.data.length).toBeGreaterThan(0);
        expect(response.data[1]).toHaveProperty('userId');
        expect(response.data[1]).toHaveProperty('id');
        expect(response.data[1]).toHaveProperty('title');
        expect(response.data[1]).toHaveProperty('completed');
        expect(typeof response.data).toBe('Object');
        console.log(response.data[5]);
        console.log(responseTime)

    });

    
})