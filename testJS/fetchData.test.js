const {fetchData, getData} = require('./fetchData')

test('The list contains Pokahra city.', ()=>{
    return expect(fetchData()).resolves.toBe('Pokhara');
})

test('The test data is peanut butter', (done) =>{
   getData((data) => {
    try {
        expect(data).toBe('peanut butter');
        console.log(data);
        done();

    }
    catch(error){
        done(error);
    }
   })
});

test('The data is found to be peanut butter', async()=>{
    const data = await fetchData();
    expect(data).toBe('Pokhara');
})

