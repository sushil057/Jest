const user = require('./user')

test("This must fail", async()=>{
    const use = await user()
    // using expect user pulls the whole functions rather than just the string.
    expect(use).toMatch('This is a error message')
})