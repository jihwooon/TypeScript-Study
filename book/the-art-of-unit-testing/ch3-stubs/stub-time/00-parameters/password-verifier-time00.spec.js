const moment = require('moment')
const { verifyPassword, verifyPassword2, verifyPassword3 } = require('./password-verifier-time00')

const SUNDAY = 0;
const SATURDAY = 6;
const MONDAY = 2;

describe('verifier', () => {
    const TODAY = moment().day();
  
    test('on weekends, throws exceptions', () => {
        if ([SATURDAY, SUNDAY].includes(TODAY)) { 
            expect(() => verifyPassword('anything', []))
            .toThrow("It's the weekend!");
        }
    });
});

describe('verifier2', () => {

    test('on weekends, throws exceptions', () => {
        expect(() => verifyPassword2('anything', [], SUNDAY))
        .toThrow("It's the weekend!");
    })
})

describe('verifier3', () => {

    test('on weekends, throws exceptions', () => {
        const alwaySunday = () => SUNDAY;
        expect(() => verifyPassword3('anything', [], alwaySunday))
        .toThrow("It's the weekend!");
    })
})
