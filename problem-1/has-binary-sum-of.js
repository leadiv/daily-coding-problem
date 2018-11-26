function createBinarySumTracker(hasBinarySum, differences) {

    return {
        hasBinarySum,
        differences
    };
}

const isBinarySumOf = (k) => (result, item) => {

    return result.hasBinarySum ? (
        result
    ) : (
        createBinarySumTracker(result.differences.has(item), new Set([...result.differences, k - item]))
    );
}



module.exports = function hasBinarySumOf(k, list) {

    const [
        first,
        ...rest
    ] = list;

    return rest.reduce(isBinarySumOf(k), createBinarySumTracker(false, new Set([k - first]))).hasBinarySum;
};
