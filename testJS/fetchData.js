function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('Pokhara'), 1000)
    })
}
// cities =['Pokhara', 'Kathamndu', 'Chitwan', 'Butwal']

function getData(callback){
    setTimeout(()=>{
        callback('peanut butter')
    }, 100); 
}

module.exports = {fetchData, getData};