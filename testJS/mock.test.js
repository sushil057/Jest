const {Mcallback, mockCallback} = require('./mock');

test('Mock function has been called', () =>{
    Mcallback(mockCallback);
expect(mockCallback).toHaveBeenCalledWith('test');
})

