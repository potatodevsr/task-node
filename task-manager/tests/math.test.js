const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')
test('Should calculate totle with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)

})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert 32 F to 0 c', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})
test('Should convert 32 F to 0 c', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})