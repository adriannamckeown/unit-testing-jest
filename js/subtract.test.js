const subtract = require('./subtract')

test('properly subtracting two integers', () => { 
    expect(
        subtract(1, 2)
    ).toBe(-1)
})

test('properly subtracting two floating point numbers', () => {
    expect(
        subtract(3.9, 2.2)
    ).toBeCloseTo(1.7)
})

test('checks that 3 - 1 is not equal to 4', () => {
    expect(
        subtract(3, 1)
    ).not.toBe(4)
})

describe("The subtract function", function() {
    it("should return a number", function() {
        expect(typeof subtract(1, 2)).toBe("number")
    })
})

