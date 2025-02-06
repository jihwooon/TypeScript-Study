const moment = require('moment')
const { verifyPassword } = require('./password-verifier-time00')

const SUNDAY = 0;
const SATURDAY = 6;
const MONDAY = 2;

describe('verifier', () => {
    const TODAY = moment().day();
  
    test('on weekends, throws exceptions', () => {
        if ([SATURDAY, SUNDAY].includes(TODAY)) { 
            expect(() => verifyPassword('anything', []))
                .toThrowError("It's the weekend!")
        }
    });
});
