async function getData(){
  const response = await fetch('http://localhost:3000/employees');
  const mydata = await response.json();
  console.log('The data to be fetched has been completed');
}
module.exports = getData;



// Simulated async function using a callback
function fetchData(callback) {
  // Simulate an async delay
  setTimeout(() => {
    const data = 'peanut butter';
    callback(null, data); // First arg is error, second is data
  }, 100); // 100ms delay
}
module.exports = fetchData;
