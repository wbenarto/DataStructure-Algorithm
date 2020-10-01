function findElement(arr, el, offset) {
    let startIndex = 0;
    let endIndex = arr.length -1 ;
    let middleIndex = Math.floor((endIndex - startIndex)/2);

    if (arr[middleIndex] === el) {
        return middleIndex;
    }

    if (arr[middleIndex] < el) {
        startIndex = middleIndex + 1;
        offset = offset + middleIndex;
    } else {
        endIndex = middleIndex;
    }
    return findElement(arr.slice(startIndex, endIndex), el, offset)
}

let arr = [0, 3, 5, 12, 31, 50, 72, 91 ,99, 200]


console.log(findElementIndex(arr, 99))