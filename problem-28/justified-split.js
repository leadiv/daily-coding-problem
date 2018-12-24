const justifyLine = (lineLimit) => (lineWords) => {

    const diff = lineLimit - lineWords.join(' ').length;
    const wordsLen = lineWords.length - 1;
    const perWord = Math.floor(diff / wordsLen);
    const extra = diff % wordsLen;
    const [
        firstWord,
        ...rest
    ] = lineWords;

    return [`${firstWord}${''.padStart(extra, ' ')}`, ...rest].join(''.padStart(perWord + 1, ' '));
};

const gatherWords = (lineLimit) => (lines, word) => {

    const [ lastLine = [] ] = lines.slice(-1);
    const nextLine = [...lastLine, word];

    return nextLine.join(' ').length <= lineLimit ? ([
        ...lines.slice(0, -1),
        nextLine
    ]) : ([
        ...lines,
        [ word ]
    ]);
};



module.exports = function justifiedSplit(lineLimit, words) {

    return words.reduce(gatherWords(lineLimit), []).map(justifyLine(lineLimit));
};
