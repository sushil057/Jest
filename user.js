// function user(){
//     return Promise.resolve('This is a error message');
// }
// module.exports = user;

function getErrorPromise(){
    // This returns a Promise that is immediately rejected
    return Promise.reject(new Error("Error Message")) 
}

// Call the function, then use .catch() to handle the rejection.
getErrorPromise()
    .catch(error => {
        // The 'error' variable here holds the Error object (new Error("Error Message"))
        console.log(error.message); 
        
        // If you want to see the full error object (including the stack trace):
        // console.error(error); 
    });