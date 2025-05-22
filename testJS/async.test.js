

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


// async function fetchData(){
//   const response = await fetch('http://localhost:3000/employees');
//   const data = await response.json();
//   console.log('The data to be fetched has been completed');
// }
// fetchData();

// test('The data has been fetched', () => {
//   return fetch('http://localhost:3000/employees')
//     .then(res => res.json())
//     .then(data => {
//       console.log('Fetched data:', data);
//       expect(data).toBeDefined();
//     });
// });


// test('The fetched data is something', async () =>{
//   const data = await fetchData();
//   await expect(fetchData()).resolves.toBe('something');
//   expect(data).toBedefined();
//   console.log(data);
// })

// test('Data Fetch Successful', async ()=> {
//   await fetch('http://localhost:3000/employees')
//   .then(res => res.json())
//   .then(data => console.log(data));
// })


// Simulated async function using a callback
function fetchData(callback) {
  // Simulate an async delay
  setTimeout(() => {
    const data = 'peanut butter';
    callback(null, data); // First arg is error, second is data
  }, 100); // 100ms delay
}

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

const searchdata = () =>  Promise.resolve('Data Searched');
test('Data has been searched', () => {
  expect(searchdata()).resolves.toBe('Data Searched');
})
const searchError = () => Promise.reject('Search Failed')
test('Data search failed', ()=>{
  expect(searchError()).rejects.toBe('Search Failed');
})

const fdata = () =>('data found'); //the data that should be fetched from the server
test('data has been found', async ()=>{
  const data = await fdata(); 
  // tries to match the data fetched with the data that is supposed to be fetched 
  try{
    expect(data).toBe('data found'); //matched to see if both the data are same or not
  }
  // in case of differnce in data to bw fetched and and data fetched, throws error in the console.
  catch(error){
    throw('data could not be  found')

  }
})
// original list of the languages
const languages = ['English', 'Japanese','Korean', 'Chinese', 'Hindi']
test('Language available', ()=>{
// provied list to make sure the items are in the original list
  // const lang = ['English', 'Korean', 'Japanese', 'Hindi', 'Chinese', 'Nepali']
  const lang = ['English', 'Korean', 'Japanese', 'Hindi', 'Chinese']
  const data = languages; // assigned data variable to the language arrays
  try{
    lang.forEach(item =>{
      // condition to check if the items are included in the lang array
      if(!data.includes(item)){
        // the item that does not match in the lang and the language array is printed in the console
        console.log(`${item} is not included in the list`)
        expect(data).toContain(item)
      }
    })
  }
  // runs if the provided list contains any language that is not in the language array list
  catch(error){
    throw new Error('Given language is not in the list')
  }
})