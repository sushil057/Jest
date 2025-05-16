// mockCallback=jest.fn();
// function Mcallback(callback){
//     callback('test');
// }
// module.exports ={Mcallback, mockCallback};

mockCallback = jest.fn(x => 42 + x);
function myCallback(callback){
    callback(8);
}
module.exports = {myCallback, mockCallback};