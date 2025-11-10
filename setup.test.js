let cities;

beforeEach(() =>{
    cities =['Pokhara', 'Kathmandu', 'Hetauda', 'Birjung', 'Butwal']
});

afterEach(()=>{
    cities = [];
})

test('The list contains Pokhara', ()=>{
    cities.push('Syangja')
    expect(cities).toContain('Pokhara')
});

test('The list contains nothing', ()=>{
    cities = [];
    expect(cities.length).toBe(0)
});

test('City database has the city Butwal',()=>{
    expect(cities.includes('Butwal', 'Kathmandu')).toBe(true);
})


// Order of Operations
describe("This will run first", ()=> {
    describe("This will run in 1(b) line", ()=> {
        test('Addition', ()=> {
            expect(2+2).toBe(4)
        });
    });
});

describe("This will run in second line", ()=> {
        test('This will run at last', ()=> {
            expect(2+3).toBe(5)
        });
    });

    // describe() runs first and then test() runs afterwards irrespective of position in lines in code.

describe('Math Operations', ()=> {
    
    describe('Multiplication', ()=> {
        test('2 * 2 = 4', ()=>{
            expect(2*2).toBe(4)
        })
    });
    describe('Substraction', ()=>{
        test('2 - 1 = 1', () => {
            expect(2-1).toBe(1)
        })
    });
    describe('Division', ()=> {
        test('4 / 2 = 2', ()=> {
            expect(4/2).toBe(2)
        })
    });
    describe('Addition', ()=> {
        test('1 + 1 = 2', () =>{
            expect(1+1).toBe(2);
        });
    });
});


// Order of operations with repeatign setup beforeEach()

describe("Arithmatic Operations", ()=>{
    let a, b, result;

    beforeEach(() => {
        a = 2;
        b = 2;
        result = 0;
        console.log('Before each test; Vaiables Initialized')
    });

    describe('Addition', ()=> {
        test('2 + 2 = 4', ()=> {
            result = a + b;
            expect(result).toBe(4)
        });
    });
    describe('Subtraction', ()=> {
        test('2 - 2 = 0', ()=> {
            result = a - b;
            expect(result).toBe(0)
        });
    });
    describe('Multiplication', ()=> {
        test('5 * 3 = 15', ()=> {
            a = 5, b = 3;
            result = a * b;
            expect(result).toBe(15)
        });
    });
    describe('Division', ()=> {
        test('18 / 3 = 6', ()=> {
            a = 18, b = 3;
            result = a / b;
            expect(result).toBe(6)
        });
    });

});

// use test.only() to test only one tet case if that one needs to be tested repeatedly 
test.only(' Why is this failing again and again', ()=> {
    expect(true).toBe(true);
})