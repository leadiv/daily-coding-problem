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

function excludeIndex(index, list) {

    return list.filter((item, i) => i !== index);
};

function productSumExcludeSelfNonDivision(list) {

    return list.map((item, index, theList) => {

        return excludeIndex(index, theList).reduce(product);
    });
}



module.exports = {
    productSumExcludeSelf,
    productSumExcludeSelfNonDivision
};
