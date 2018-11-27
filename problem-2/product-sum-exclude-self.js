function product(a, b) {

    return a * b;
}

const divideBy = (a) => (b) => {

    return a / b;
}

function productSumExcludeSelf(list) {

    const total = list.reduce(product);

    return list.map(divideBy(total))
}

function productSumExcludeSelfNonDivision(list) {

    return list.map((item, index, theList) => {

        const before = theList.slice(0, index);
        const after = theList.slice(index + 1);

        return [
            ...before,
            ...after
        ].reduce(product);
    });
}



module.exports = {
    productSumExcludeSelf,
    productSumExcludeSelfNonDivision
};
