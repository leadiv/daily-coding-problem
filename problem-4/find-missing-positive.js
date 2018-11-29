function isMissing(nextValue, previousValue, theList) {

    return nextValue + 1 > 0 && theList.indexOf(nextValue + 1) === -1 && nextValue + 1 < previousValue;
}

function findMissing(currentMissing, nextValue, i, list) {

    return isMissing(nextValue, currentMissing, list) ? nextValue + 1 : currentMissing;
}



module.exports = function findMissingPositive(theList) {

    return theList.reduce(findMissing, Infinity);
};
