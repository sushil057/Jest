// let cities = [];
// function initializeCityDatabase() {
//     cities = ['Pokhara', 'Kathmandu', 'Butwal', 'Chitwan'];
//     return Promise.resolve(); //Simulate async setup
// }

// function clearCityDatabase(){
//     cities = [];
//     return Promise.resolve();
// }

// function isCity(name){
//     return cities.includes(name);
// }

// module.exports ={initializeCityDatabase, clearCityDatabase, isCity};

let language = ['hindi'];

function initializeLangauge(){
    language = ['English', 'French', 'Spanish', 'German', 'Hindi']
    return Promise.resolve();
}
function newLanguage(){
    language =['Nepali', 'Urdu','Malay', 'Chinese']
}
function clearLanguage(){
    language =[];
    return Promise.resolve();
}
function isLanguage(name){
    return language.includes(name);
}
module.exports = {initializeLangauge, clearLanguage, isLanguage, newLanguage}