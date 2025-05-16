// const {Mcallback, mockCallback} = require('./mock');

// test('Mock function has been called', () =>{
//     Mcallback(mockCallback);
// expect(mockCallback).toHaveBeenCalledWith('test');
// })

const {mockCallback} =require('./mock');

it('Displays the test has been cpompleted', ()=>{
    const result = mockCallback(8); 
    const res = mockCallback(3); 
    expect(result).toBe(50);
    expect(res).toBe(45);
    console.log(result);
    console.log(res);
})