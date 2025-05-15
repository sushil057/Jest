// let item =['apple', 'bike', 'driver', 'Mac', 'Monitor']

//   function forEach(items, callback) {
//   for (const item of items) {
//     callback(item);
//   }
// }
// module.exports = forEach;

function greetUser(callback){
  callback('Hello user')
}
module.exports = greetUser;