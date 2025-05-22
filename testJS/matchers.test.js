test('checks if values are strictly equal', () => {
    
    // Passes, because 5 === 5
    expect(5).toBe(5);    
    
    // Passes, because both strings are exactly the same
    expect('Hello').toBe('Hello'); 
});

test('checks if objects and arrays are deeply equal', () => {
    
    // Passes, because both objects are identical
    expect({ name: 'Alice' }).toEqual({ name: 'Alice' });  
    
    // Passes, because arrays have the same elements
    expect([1, 2, 3]).toEqual([1, 2, 3]);  
});

test('checks if value is truthy', () => {
    
    // Passes, because non-empty strings are truthy
    expect('Hello').toBeTruthy();  
    
    // Passes, because 1 is truthy
    expect(1).toBeTruthy();         
});

test('checks if value is undefined', () => {
    let value;
    
    // Passes, because value is undefined
    expect(value).toBeUndefined();  
});

test('checks if value is defined', () => {
    const value = 10;
    
    // Passes, because value is defined (it is 10)
    expect(value).toBeDefined();    
});

test('checks if a number is greater than another', () => {
    
    // Passes, because 10 is greater than 5
    expect(10).toBeGreaterThan(5);  
});

test('checks if a number is less than another', () => {
    
    // Passes, because 3 is less than 5
    expect(3).toBeLessThan(5);      
});

test('checks if a number is greater than or equal to another', () => {
    
    // Passes, because 10 is equal to 10
    expect(10).toBeGreaterThanOrEqual(10);  
    
    // Passes, because 15 is greater than 10
    expect(15).toBeGreaterThanOrEqual(10);  
});

test('checks if a number is less than or equal to another', () => {
    
    // Passes, because 3 is less than 5
    expect(3).toBeLessThanOrEqual(5);   
    
    // Passes, because 5 is equal to 5
    expect(5).toBeLessThanOrEqual(5);   
});

test('checks if value is null', () => {
    const value = null;
    
    // Passes, because value is exactly null
    expect(value).toBeNull();       
});

test('checks if an array contains a specific element', () => {

    // Passes, because 2 is in the array
    expect([1, 2, 3]).toContain(2);  
    
    // Passes, because 'banana' is in the array
    expect(['apple', 'banana']).toContain('banana');  
});

test('checks if an array contains an object with equal values', () => {
    const users = [{ name: 'John' }, { name: 'Jane' }];
    
    // Passes, because an object with name 'John' exists in the array
    expect(users).toContainEqual({ name: 'John' }); 
});

test('checks if function throws an error', () => {
    const throwError = () => { throw new Error('Oops!'); };
    
    // Passes, because the function throws an error
    expect(throwError).toThrow();    
});

test('checks if function throws a specific error', () => {
    const throwError = () => { throw new Error('Specific error'); };
    
    // Passes, because the error message matches
    expect(throwError).toThrowError('Specific error');  
});
