const {
    productSumExcludeSelf,
    productSumExcludeSelfNonDivision
} = require('./product-sum-exclude-self');



describe('Product sum exclude self', () => {

    describe('Division solution', () => {

        it('should be able to work with [1, 2, 3, 4, 5]', () => {

            const theList = [1, 2, 3, 4, 5];

            const expected = [120, 60, 40, 30, 24];
            const actual = productSumExcludeSelf(theList);

            expect(actual).toEqual(expected);
        });

        it('should be able to work with [3, 2, 1]', () => {

            const theList = [3, 2, 1];

            const expected = [2, 3, 6];
            const actual = productSumExcludeSelf(theList);

            expect(actual).toEqual(expected); 
        });
    });

    describe('Non division solution', () => {

        it('should be able to work with [1, 2, 3, 4, 5]', () => {

            const theList = [1, 2, 3, 4, 5];

            const expected = [120, 60, 40, 30, 24];
            const actual = productSumExcludeSelfNonDivision(theList);

            expect(actual).toEqual(expected);
        });

        it('should be able to work with [3, 2, 1]', () => {

            const theList = [3, 2, 1];

            const expected = [2, 3, 6];
            const actual = productSumExcludeSelfNonDivision(theList);

            expect(actual).toEqual(expected); 
        });
    });
});
