
test('The addition is successful', () =>{
  expect(2+2).toBe(4)
})

test("Object assignemnt", () => {
  const data = {one: 1};
  data['two'] =2;
  expect(data).toEqual({one: 1, two:2});
})

test("Sum of psitive number is never 0", () =>{
  for(let i =0; i<=10; i++){
    for(let j = 1; j<10; j++){
      expect(i+j).not.toBe(0);
    }
  }
})

test('Null', () => {
  const a = null;
  const b = undefined;
  const c = 34;
  const d =true;
  const e = false;
  expect(a).toBeNull();
  expect(b).toBeUndefined();
  expect(c).toBeDefined();
  expect(d).toBeTruthy();
  expect(e).toBeFalsy();
})

test('Jest', () => {
  const x ='jest';
  expect(x).not.toBeNull();
  expect(x).toBeDefined();
  expect(x).not.toBeUndefined();
  expect(x).toBeTruthy();
  expect(x).not.toBeFalsy();
})

test('Adding floating number', () =>{
  const num = 5.6 + 0.5;
  // expect(num).toBeEqual(6); This does not work with floating number becaise of the decimal values.
  expect(num).toBeCloseTo(6.1);
})

test('There is no I in yarsa', () =>{
  expect('yarsa').not.toMatch(/i/)
})

test('There is a man in Hanuman', () =>{
  expect('Hanuman').toMatch(/man/)
})

const fruits = ['apple', 'banana', 'kiwi', 'oranges', 'mango']
test('There is banana in the fruit list', () => {
  expect(fruits).toContain('banana')
})


test('Check to see if mango is there', () => {
  if(fruits.includes('mango')){
    console.log("Mango is in the list");
  }
  else{
    console.error("Mango is not in the list")
  }
})

