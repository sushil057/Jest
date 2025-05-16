

// async function fetchData() {
//   const response = await fetch('http://localhost:3000/employees');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   const data = await response.json(); // Return the parsed data
//   console.log(data);
//   return data;
// }

// test('The data has been fetched', async () => {
 
//   try {
//     const data = await fetchData();
//     expect(data).toBeDefined(); // Check if data is defined
//     // You can add more specific checks depending on the response format
//     expect(Array.isArray(data)).toBe(true); // Check if data is an array
//   } catch (error) {
//     console.error('Test failed with error:', error);
//     throw error; // Re-throw the error to ensure the test fails
//   }
// });


const getData = require('./async')

test('The data has been fetched', () => {
  return fetch('http://localhost:3000/employees')
    .then(res => res.json())
    .then(mydata => {
      console.log('Fetched data:', mydata);
      expect(mydata).toBeDefined();
    });
});


const fetchData = require('./async')

// Jest test using callback + `done`
test('the data is peanut butter', done => {
  function callback(error, data) {
    if (error) {
      done(error); // Fail the test if there's an error
      return;
    }

    try {
      expect(data).toBe('peanut butter');
      done(); //  Success
    } catch (error) {
      done(error); //  Fail the test with the error
    }
  }

  fetchData(callback);
});
