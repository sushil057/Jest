const Mock = require('./mock.js')
test('The mock function is being called', () => {
  const mockFn = Mock();      // Get the mock function
  mockFn(8);                  // Call it with 8
  expect(mockFn).toHaveBeenCalledWith(8); // ✅ Assert the call
});