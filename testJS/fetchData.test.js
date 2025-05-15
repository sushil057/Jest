const  fetchData = require('./fetchData')

test('The data has been fetched', async () =>{
    const cities = await fetchData()
    try {
        expect(cities).toContain('Pokhara')
        console.log(cities)
    }
    catch(error){
        throw('City not found')
    }
})