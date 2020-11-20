const cloneArray = require('./cloneArray')

test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})

test('tests for a value in array', () => {
    const array = ['John', 'Mary', 'Leah']
    expect(cloneArray(array)).toContain('Leah')
    expect(cloneArray(array)).not.toContain('Jonathan')
})

test('test for properly checking that an array is of a certain size', () => {
    const array = [1, 2, 3, 4, 5]
    expect(cloneArray(array)).toHaveLength(5)
})

test('test for properly checking that an array is not of a certain size', () => {
    const array = ['candy', 'chips', 'soda']
    expect(cloneArray(array)).not.toHaveLength(4)
})