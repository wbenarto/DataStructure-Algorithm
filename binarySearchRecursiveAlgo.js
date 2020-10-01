function findElement (arr, el, offset) {
    let startIndex = 0;
    let lastIndex = arr.length - 1;
    let middleIndex = Math.floor((lastIndex - startIndex)/2)

    if (arr[middleIndex] === el ) {
        return middleIndex;
    }

    // element is right side 
    if (arr[middleIndex] < el) {
        startIndex = middleIndex + 1;
        offset = offset + middleIndex + 1;
    } else {
        endIndex = middleIndex
    }

    return findElement(arr.slice(startIndex, endIndex + 1), el, offset)


}


let arr = [0, 3, 5, 12, 31, 50, 72, 91 ,99, 200]


console.log(findElementIndex(arr, 99))