const isBinarySumOf = (k) => (result, item) => {

    return result.hasBinarySum ? (
        result
    ) : ({
        hasBinarySum: result.differences.has(item),
        differences: new Set([...result.differences, k - item])
    });
}



module.exports = function hasBinarySumOf(k, list) {

    const [
        first,
        ...rest
    ] = list;

    const init = {
        hasBinarySum: false,
        differences: new Set([k - first])
    };

    return rest.reduce(isBinarySumOf(k), init).hasBinarySum;
};
