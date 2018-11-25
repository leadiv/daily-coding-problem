const hasBinarySumOf = require('./has-binary-sum-of');



describe('Given a list of numbers and a number k', () => {

    it('should return true if any two numbers from the list add up to k', () => {

        const theList = [10, 15, 3, 7];

        const expected = true;
        const actual = hasBinarySumOf(17, theList);

        expect(actual).toEqual(expected);
    });

    it('should return false if no two numbers from the list add up to k', () => {

        const theList = [10, 4, 3, 7];

        const expected = false;
        const actual = hasBinarySumOf(8, theList);

        expect(actual).toEqual(expected);
    });

    it('should work with negative numbers as well', () => {

        const theList = [34, -2, 4, 9, 18, 26];

        const expected = true;
        const actual = hasBinarySumOf(2, theList);

        expect(actual).toEqual(expected);
    });
});
