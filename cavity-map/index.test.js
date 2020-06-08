const cavityMap = require('./index')

describe('cavity-map', () => {
    test(`sample one`, () => {
        const grid = ['12','12']
        const expected = ['12','12']

        const result = cavityMap(grid)

        expect(result).toEqual(expected)
    });

    test(`sample tow`, () => {
        const grid = ['1112', '1912', '1892', '1234']
        const expected = ['1112', '1X12', '18X2', '1234']

        const result = cavityMap(grid)

        expect(result).toEqual(expected)
    });

    test(`sample three`, () => {
        const grid = ['63456754', '68335522', '25482912', '54429472',
            '35416147', '75848666', '41633675', '82511989']
        const expected = ['63456754', '6X335522', '254X2X12', '5442X4X2',
            '35416147', '75X4X666', '41633675', '82511989']

        const result = cavityMap(grid)

        expect(result).toEqual(expected)
    });
});