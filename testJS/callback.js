const fetchDataFromServer = (callback) =>{
    setTimeout(() =>{
        callback('Fetch Successful');
    }, 1000);
}
module.exports = fetchDataFromServer;

