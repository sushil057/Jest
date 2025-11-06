// promise
function fetchdata() {
    return Promise.resolve("peanut butter");
}

test("The data is peanut butter", () => {
    return fetchdata().then(data => {
        expect(data).toBe('peanut butter');
    });
})

test("The data is peanut butter", async() => {
    const the_data = await fetchdata();
    expect(the_data).toBe('peanut butter');

});

test("The data is peanut butter", async ()=>{
    expect.assertions(0)
    try{
        await fetchdata();
    } catch(error){
        expect(error).toMatch(error);
    }
});