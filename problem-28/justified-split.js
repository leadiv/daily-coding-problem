module.exports = function justifiedSplit(k, lines) {

    return lines.reduce((all, line) => {

        const next = `${all.slice(-1)} ${line}`;

        if (next.length <= k) {

            return [
                ...all.slice(0, -1),
                next
            ];
        } else {

            return [
                ...all,
                line
            ];
        }
    }, []).map((line) => {

        const diff = k - line.trim().length;
        const words = line.trim().split(' ');
        const wordsLen = words.length - 1;
        const perWord = Math.floor(diff / wordsLen);
        const extra = diff % wordsLen;
        const [
            firstWord,
            ...rest
        ] = words;

        return [`${firstWord}${''.padStart(extra, ' ')}`, ...rest].join(''.padStart(perWord + 1, ' '));
    });
};
