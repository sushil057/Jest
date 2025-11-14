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
    // console.log(mockCallback(0, 1))
})



// .mock property
const mymock = jest.fn();
mymock('apple');
mymock('banana');
mymock(12);

test("Mock function call passed", () =>{
    expect(mymock).toHaveBeenCalledTimes(3)
    expect(mymock).toHaveBeenCalledWith('apple')
    expect(mymock).toHaveBeenCalledWith('banana')
    expect(mymock).toHaveBeenCalledWith(12)
})
console.log(mymock.mock.calls);


// testing th mock funciton

function userName(){
    return 'Sushil is my name'
}

const Name = jest.fn().mockReturnValue('Sushil');
test("The first Username is Sushil", ()=> {
    expect(Name()).toMatch('Sushil')
});
console.log(Name())

const advice = jest.fn();
advice('Do not do drugs.');
advice('Do not drink and drive.')
advice('Working on yourself is a good habit')

console.log(advice.mock.calls)
console.log(advice.mock.calls.length)

test("Advice function has a list of 3 advices", ()=> {
    expect(advice).toHaveBeenCalledTimes(3);
});
test("Advice function talks about drugs.", ()=> {
    expect(advice).toHaveBeenCalledWith('Do not do drugs.');
});


//Mock return values
const themock = jest.fn();
console.log(themock());

themock.mockReturnValueOnce(10).mockReturnValueOnce('apple').mockReturnValueOnce(false);
console.log(themock(), themock(), themock());

const Filtertest = jest.fn();
Filtertest.mockReturnValueOnce(true).mockReturnValueOnce(true);
const result = [11, 12].filter(num=>Filtertest(num));

console.log(result);
console.log(Filtertest.mock.calls[0][1]+ ' MOCK RETURN VALUES');
console.log(Filtertest.mock.calls[1][0]);

test('The mock function has been called twice', ()=> {
    expect(Filtertest).toHaveBeenCalled();
})