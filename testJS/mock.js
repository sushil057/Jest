function Mock(){
    const mockCallabck = jest.fn(x=> 42+x);
    return mockCallabck;
}
module.exports = Mock;