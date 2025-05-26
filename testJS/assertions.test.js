const fetchError = require("./assertions.js");

test('fetchError throws error', async() =>{
    await expect(fetchError()).rejects.toThrow('Something went wrong')
})

test('Check if the fetchError throws error', async() =>{
    expect.assertions(1);
    try{
        await fetchError(console);
    }
    catch(error){
        expect(error.message).toMatch('Something went wrong')
    }
})