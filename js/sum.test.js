const sum = require('./sum')

test('properly adds two numbers', () => { 
    expect(
        sum(1, 2)
    ).toBe(3)
})

test('checks that 4 + 5 is not equal to 7', () => {
    expect(
        sum(4, 5)
    ).not.toBe(7)
})

test('properly adds two floating point numbers', () => {
    expect(
        sum(1.34, 2.2)
    ).toBeCloseTo(3.54)
})

describe("The sum function", function() {
    it("should return a number", function() {
        expect(typeof sum(1, 2)).toBe("number")
    })
})
