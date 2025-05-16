let a,b;
function sum(a, b){
    return a + b;
}
test(`The sum is 5`, () =>{
    expect(sum(2,3)).toBe(5)
})

let name = 'apple';
function reverseString(name){
    let reversedString='';
    for(let i=name.length-1; i>=0; i--){
        reversedString += name[i]
    }
    return reversedString;
}
test('The function returns reversed string', ()=>{
    expect(reverseString('apple')).toBe('elppa')
})

function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = {
                id: id,
                name: `User ${id}`,
                email: `user${id}@example.com`
            };
            resolve(user);
        }, 1000); // Simulate a 1-second delay
    });
}

// Example usage:
fetchUser(1).then(user => console.log(user));

test('fetchUser returns a user object', async () => {
    const user = await fetchUser(1);
    expect(user).toHaveProperty('name');
    expect(user.name).toBe('User 1');
    expect(user.id).toBe(1);

})

