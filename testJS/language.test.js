//Repeating setup as the beforeEack function runs before running each tests
// beforeAll and afterAll funtion runs with all the tests in this file.
const { isLanguage, initializeLangauge, clearLanguage, newLanguage } = require("./language");

beforeEach(()=>{
    initializeLangauge();
})
afterEach(()=> {
    clearLanguage();
})

test('Spanish language has been added in the list', () =>{
    expect(isLanguage('Spanish').toBeTruthy)
})

test('German language has been included in the list', () =>{
    expect(isLanguage('German').toBeTruthy)
})
test('List contains Hindi Language', () =>{
    expect(isLanguage('Hindi').toBeTruthy)
})

//Scooping

beforeEach(()=>{
    initializeLangauge();
})

test('Nepali language is also included', ()=>{
    expect(isLanguage('Nepali'.toBeTruthy))
})

describe('This is a new language list', () =>{
    beforeEach(()=>{
    console.log('Before Each inside describe')
        return newLanguage();
    });

    test('Nepali language is added as new language', ()=>{
        expect(isLanguage('Nepali').toBeTruthy)
    });
    test('Malay language is also added as new language', ()=>{
        expect(isLanguage('Urdu')).toBe(true);
    });
    
})

// Order of Execution
describe('outer a', ()=>{
    console.log('This is outer a')

    describe('Inner a', () =>{
        console.log('Innter a')
        test('Inner a, test 1', ()=>{
        console.log('Inner a, test 1')
        })
        test('Inner b, test 2', ()=>{
        console.log('Inner b, test 2')
    })
    });
    test('Outer a, test 1', ()=>{
        console.log('Outer a, test 1')
    })
    test('Outer b, test 2', ()=>{
        console.log('Outer b, test 2')
    })
})
test('Outer b, test 1', ()=>{
    console.log('Outer b, test 1')
})
test('Outer b, test 2', ()=>{
    console.log('Outer b, test 2')
})    

test.only('Only this will riun', () =>{
    expect('A').toBe('A')
})