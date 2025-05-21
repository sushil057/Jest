jest.mock('./modulemock.js');
const math = require('./modulemock')
test('Mock module example', () =>{
    // math.add.mockReturnValue(10);
    expect(math.add(2,3)).toBe(5);
})
    
// Mocking Timers
test('Timer Mock', () =>{
    // Enable fake timers
    jest.useFakeTimers();
    const mockCallback = jest.fn();
    // set timeout with the mockCallback
    setTimeout(mockCallback, 1000);
    //Move timer forward and trigger all timeouts
    jest.runAllTimers();
    // verify that the mock function has been called
    expect(mockCallback).toHaveBeenCalled();
})

// Define the Car class
class Car {
    start() {
        return 'Car started';
    }
}

// const {car} = require('./car')
test('Mocking the class', () =>{
    const mockStart = jest.fn().mockReturnValue('Fake Car');

    const car = new Car();
    car.start = mockStart;
    expect(car.start()).toBe('Fake Car')
})
