// Mock Functions

const checkLogin = jest.fn().mockReturnValue(true);
test("Login was usccessful", ()=> {
    const result = checkLogin('user', 'pass');
    expect(result).toBe(true)
    expect(checkLogin).toHaveBeenCalledWith('user', 'pass');
});

const greet = jest.fn();
greet("Hello there!")
greet('Hi there!')

test('The greet function has been called twice', ()=>{
    expect(greet).toHaveBeenCalled();
    expect(greet).toHaveBeenCalledTimes(2);
})

const fruit = jest.fn().mockReturnValue(['apple', 'banana']);
test('The fruit function contains banana', ()=>{
    expect(fruit()).toContain('banana')
})


function forEach(items, callback) {
    for(const item of items){
        callback(item);
    }
}
const mockCallback = jest.fn(x=> 42 + x);
test("forEach mock function", () => {
    forEach([0, 1], mockCallback);
    expect(mockCallback).toHaveBeenCalled();
    console.log(mockCallback(0, 1))
})