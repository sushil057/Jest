jest.mock('./modulemock.js');
const math = require('./modulemock')
test('Mock module example', () =>{
    // math.add.mockReturnValue(10);
    expect(math.add(2,3)).toBe(5);
})
