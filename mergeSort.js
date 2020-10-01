function sort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    if (arr.length <= 2) {
        return arr[0] > arr [1] ? [arr[1], arr[0]] : arr;
    }

    const middlePoint = Math.floor(arr.length/2)
    let startIndex = 0;

    let leftArr = arr.slice(startIndex, middlePoint)
    let rightArr = arr.slice(middlePoint)

    let mergedArr = []
    let leftSorted = sort(leftArr);
    let rightSorted = sort(rightArr);

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftSorted.length || rightIndex < rightSorted.length) {
        if(leftIndex >= leftSorted.length || leftSorted[leftIndex] > rightSorted[rightIndex]) {
            mergedArr.push(rightSorted[rightIndex])
            rightIndex++;
        } else {
            mergedArr.push(leftSorted[leftIndex]);
            leftIndex++;
        }

    }

    return mergedArr
}


const arr = [-10, -2, 0, 9, 8 ,3, 23, 41, 9, 23 , 3, 6 ,4, 3 ] 
console.log(sort(arr))