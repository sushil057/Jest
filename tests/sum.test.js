const {sum, multiply} = require('./sum');

test('The sum function is working fine', ()=> {
    expect(sum(1,2)).toBe(3);
});

test('The n is null', () =>{
    const n =null;
    expect(n).toBeNull();
})

test('The a is undefined', () =>{
    const a = undefined;
    expect(a).toBe(undefined);
})

test("The value is positive", ()=>{
    var male = true;
    expect(male).toBeTruthy();
})

test("0 is not null", () =>{
    const z = 0;
    expect(z).not.toBeNull();

})

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('The multiply function works well', () =>{
    expect(multiply(2,3)).toBe(6)
})