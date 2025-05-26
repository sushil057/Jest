const fetchDataFromServer = require('./callback.js')

test('Data has been fetched from the server', done =>{
    const callback = (data) => {
        expect(data).toBe('Fetch Successful');
        done();
    }
    fetchDataFromServer(callback);
})

