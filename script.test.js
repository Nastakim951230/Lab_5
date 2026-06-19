const { multiply } = require('./script');

test('5 * 2 = 10', () => {
    expect(multiply(5, 2)).toBe(10);
});

test('0 *5 = 0', () => {
    expect(multiply(0, 5)).toBe(0);
});


