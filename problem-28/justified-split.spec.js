const justifiedSplit = require('./justified-split');



describe('Justified Split of String Array', () => {

    it('should return an array of lines with each line being length of k', () => {

        const input = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
        const k = 16;
        const lines = justifiedSplit(k, input);

        lines.forEach((lines) => {

            const expected = k;
            const actual = lines.length;

            expect(actual).toEqual(expected);
        });
    });

    it('should have as many words on each line', () => {

        const input = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
        const k = 16;
        const lines = justifiedSplit(k, input);

        const expected = [3, 3, 3];
        const actual = justifiedSplit(k, input).map((line) => line.match(/\b\w+/g).length);

        expect(actual).toEqual(expected);
    });

    it('should have justified spacing on each line', () => {

        const input = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
        const k = 16;
        const lines = justifiedSplit(k, input);

        const expected = [
            'the  quick brown',
            'fox  jumps  over',
            'the   lazy   dog'
        ];
        const actual = justifiedSplit(k, input);

        expect(actual).toEqual(expected);
    });
});
