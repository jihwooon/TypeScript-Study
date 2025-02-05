const context = describe;

const { PasswordVerifier1 } = require('../password-verifier1')

describe('PasswordVerifier', () => {
    let verifier;

    beforeEach(() => {
        verifier = new PasswordVerifier1();
    })

    context('with a failing rule', () => {
        let fakeRule;
        let errors;

        // AAA (Arrange-Act-Assert) 패턴을 적용하기 위해 verify 실행 결과를 errors 변수에 저장
        // Arrange: fakeRule 설정 및 추가
        // Act: verify 메서드 실행
        beforeEach(() => {
            fakeRule = () => ({ passed: false, reason: 'fake reason'})
            verifier.addRule(fakeRule);
            errors = verifier.verify('any value');
        })

        it('has an error message based on the rule.reason', () => { 
            expect(errors[0]).toContain('fake reason')
        })

        it('has exactly one error', () => { 
            expect(errors.length).toBe(1); 
        })
    })

    context('with a passing rule', () => {
        let fakeRule;
        let errors;

        beforeEach(() => {
            fakeRule = () => ({ passed: true, reason: ''})
            verifier.addRule(fakeRule);
            errors = verifier.verify('any value');
        })

        it('has exactly one error', () => { 
            expect(errors.length).toBe(0); 
        })
    })

    context('with a failing and a passing rule', () => {
        let fakeRulePass;
        let fakeRuleFail;
        let errors;

        beforeEach(() => {
            fakeRulePass = () => ({ passed: true, reason: 'fake success'})
            fakeRuleFail = () => ({ passed: false, reason: 'fake reason'})
            verifier.addRule(fakeRulePass);
            verifier.addRule(fakeRuleFail);
            errors = verifier.verify('any value');
        })

        it('has one error', () => { 
            expect(errors.length).toBe(1); 
        })

        it('error text belongs to failed rule', () => {
            expect(errors[0]).toContain('fake reason');
        })
    })
})
