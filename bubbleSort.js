function sort(arr) {
    // copy of the array
    const resultArr = [...arr]

    for (let outer = 0; outer < resultArr.length; outer++) {
        let outerEl = resultArray[outer]

        for (let inner = outer + 1; inner < resultArr.length; inner ++) {
            let innerEl = resultArray[inner];

            if (outerEl > innerEl) {
                resultArr[outer] = innerEl;
                resultArr[inner] = outerEl;

                outerEl = resultArr[outer];
                innerEl = resultArr[inner];
            }
        }
    }
    return resultArr; 
}

let arr = [0, -4, 19, 23, 9, 13, 90, 87, 38, 82, 70]

console.log(sort(arr))

// best case = 
    // items are already sorted
    // O(n)

// Average case = 
    // same as worst case

// Worst Case = 
    // wrong order sort
    // O(n2) -> we have nested for loop 
    // quadratic time 