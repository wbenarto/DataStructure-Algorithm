function sort(arr) {
    let copiedArr = [...arr]

    // best case, check if arr only less than 1 element
    if (arr.length <= 1) {
        return copiedArr;
    }

    const smallerElementsArray = [];
    const biggerElementsArray = [];
    const pivotElement = copiedArr.shift();
    const centerElementsArr = [pivotElement];

    while (copiedArr.length) {
        const currentEl = copiedArr.shift();
        if (currentEl === pivotElement) {
            centerElementsArr.push(currentEl);
        } else if (currentEl < pivotElement) {
            smallerElementsArray.push(currentEl)
        } else {
            biggerElementsArray.push(currentEl)
        }
    }

    const smallerElementsSorted = sort(smallerElementsArray);
    const biggerElementsSorted = sort(biggerElementsArray);
    return smallerElementsSorted.concat(centerElementsArr, biggerElementsSorted)
}

let arr = [-5,2,9,12,94,23,43,33,1,7,75,3,3,234,6]

console.log(sort(arr))

// best case: 
    // split array to sort, 
    // O(log n * n )

// worst case 
    // 
    // O(n^2)
    // quadratic time

// Average Time 
    // Master Theorem
    // 