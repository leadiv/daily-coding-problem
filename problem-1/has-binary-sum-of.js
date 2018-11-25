function nextState(hasBinarySum = false, differences = new Set()) {

    return {
        hasBinarySum,
        differences
    };
}

const isBinarySumOf = (k) => (result, item) => {

    return result.hasBinarySum ? (
        result
    ) : (
        nextState(result.differences.has(item), new Set([...result.differences, k - item]))
    );
}



module.exports = function hasBinarySumOf(k, list) {

        return list.reduce(isBinarySumOf(k), nextState()).hasBinarySum;
};
