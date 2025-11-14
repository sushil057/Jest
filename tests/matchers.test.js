test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

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

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);               This won't work because of rounding error
  expect(value).toBeCloseTo(0.3);       // This works.
});

// String Matchers

test("There is jest word in the sentence", () =>{
    const sen = "Iamlearningjest";
    expect(sen).toMatch('jest')
})

test("I is not found in the word kangaroo", ()=>{
    expect('kangaroo').not.toMatch(/i/);
})

// Arrays and Iterables

const names =[
    'Anish', 'Bibash', 'Anil', 'Dipesh', 'Rakesh', 'Ragav', 'Janakushal', 'Bishal', 'Sushil'
];

test('The name list includes Ragav', () =>{
    expect(names).toContain('Ragav');
});
test('The name list includes Anish', () =>{
    expect(names).toContain('Anish');
});
test('The name list includes Rakesh', () =>{
    expect(names).toContain('Rakesh');
});
test('The name list includes Janakushal', () =>{
    expect(names).toContain('Janakushal');
});
test('The name list includes Sushil', () =>{
    expect(names).toContain('Sushil');
});
test('The name list includes Dipesh', () =>{
    expect(names).toContain('Dipesh');
});
