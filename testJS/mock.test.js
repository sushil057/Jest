const Mock = require('./mock.js');

test('Mock Function test', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(3)).toBe(45);
});

test("Mock called with certain value", () => {
    const mock = jest.fn(x => 42 + x);
    mock(3);
    expect(mock).toHaveBeenCalledWith(3);
    console.log(mock(3));
});

test('The mock function is being called', () => {
    const mockFn = Mock();      
    mockFn(8);                  
    expect(mockFn).toHaveBeenCalledWith(8); 
});
