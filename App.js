function sort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    if (arr.length <= 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }

    const middlePoint = Math.floor(arr.length/2);
    let leftArr = arr.slice(0, middlePoint);
    let rightArr = arr.slice(middlePoint);

    let leftSorted = sort(leftArr);
    let rightSorted = sort(rightArr);
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftSorted.length || rightIndex < rightSorted.length) {
        if (leftIndex >= leftSorted.length || leftSorted[leftIndex] > rightSorted[rightIndex]) {
            mergedArr.push(rightSorted[rightIndex])
            rightIndex++;
        } else {
            mergedArr.push(leftSorted[leftIndex]);
            leftIndex++;
        }
    }

    return mergedArr;
}


let arr = [-5,2,9,12,94,23,43,33,1,7,75,3,3,234,6]


console.log(sort(arr))