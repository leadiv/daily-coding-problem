const findMissingPositive = require('./find-missing-positive');



describe('Find lower positive integer that is missing from the array', () => {

    it('should work with negative numbers', () => {

        const expected = 2;
        const actual = findMissingPositive([3, 4, -1, 1]);

        expect(actual).toEqual(expected);
    });

    it('should work with zero', () => {

        const expected = 3;
        const actual = findMissingPositive([2, 1, 0]);

        expect(actual).toEqual(expected);
    });

    it('should work with duplicates', () => {

        const expected = 3;
        const actual = findMissingPositive([14, 12, 2, 1, 14, 0]);

        expect(actual).toEqual(expected);
    });
});
