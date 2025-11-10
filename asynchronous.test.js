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

function list(){
    return Promise.resolve(['sushil', 'anish', 'kushal', 'anil', 'rakesh']);
}
test("The data has my name inclued", async ()=>{
    const data = await list();
    expect(data).toContain('sushil');
})

function shoppinglist(){
    return Promise.resolve(['apple', 'mop', 'washing poweder', 'laptop'])
}
test("It passes even if the list is missing mousepad", async() =>{
    const list = await shoppinglist();
    expect(list).not.toContain('mousepad')
});

function travel() {
    return Promise.resolve(['bags', 'camera', 'clothes', 'map'])
}

test('This test fails even if all the essentials are covered', async ()=>{
    const essentials = await travel();
    expect(essentials).toContain('map');
});

function fetchError(){
    return Promise.resolve('user not found')
}
test("this must throw an error message", async() =>{
    const message = await fetchError()
    expect(message).toMatch('user not found')
});

function numbers(){
    return Promise.resolve(['one', 'two', 'three', 'four', 'five']);
    
}
test(`There are 5 items in the list`, async()=>{
    const number = await numbers();
    expect(number.length).toBe(5)
})

function ErrorFunction(){
    return Promise.reject(new Error("Error Message"))
}

test("This must fail", async()=>{
    await expect(ErrorFunction()).rejects.toThrow('Error Message')
});

function peanutbutter(){
    return Promise.resolve('it is peanut butter')
}
test('the data is peanut butter', async () => {
  const data = await peanutbutter();
  expect(data).toMatch('peanut butter');
});
