function fetchData(){
    return new Promise((resolve,reject) => {
        resolve(cities);
    })
}
cities =['Pokhara', 'Kathamndu', 'Chitwan', 'Butwal']

module.exports = fetchData;