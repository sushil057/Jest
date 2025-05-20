const Mock = require('./mock.js');

test('Mock Function test', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(3)).toBe(45);
});

test("Mock called with certain value", () => {
    const mock = jest.fn(x => 42 + x);
    mock(3);
    expect(mock).toHaveBeenCalledWith(3);
    // console.log(mock(3));
});

test('The mock function is being called', () => {
    const mockFn = Mock();      
    mockFn(8);                  
    expect(mockFn).toHaveBeenCalledWith(8); 
});

//creating a mock function usinf jest.fn()
const mockFunction = jest.fn().mockReturnValue(6);
test('Mock returns value 6', () =>{
    expect(mockFunction()).toBe(6)
})

//Mock Tracking calls 
const MockFunction = jest.fn();
MockFunction(1,2);

// confirms that the mock functin has been called with given arguments
test('Mock function is returing the required value', ()=>{
    expect(MockFunction).toHaveBeenCalledWith(1,2);
})

const myFunction = jest.fn();
myFunction
.mockReturnValueOnce(1)
.mockReturnValueOnce(2);
test('The function returns value as per the call', () =>{
    expect(myFunction()).toBe(1);  
    expect(myFunction()).toBe(2);  
})

// Mock Implementation
// Make sure to pass the variables as a single function as ((a,b)=> a+b) rather than (a,b => a+b)
let a, b;
const Add = jest.fn().mockImplementation((a, b) => a+b);
console.log(Add(2,3));
Add.mockReset();
console.log(Add(2,3));

