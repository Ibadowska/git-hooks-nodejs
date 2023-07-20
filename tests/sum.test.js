const sum = require('../src/sum')

it('should calculate proper sum', () => {
    const result = sum(5, 2)
    expect(result).toBe(7)
})