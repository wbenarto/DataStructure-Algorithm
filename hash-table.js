// const word = 'Basketball';

// find first repeating character
// function findFirst(str) {

//     for(let i =0;i<str.length; i++) {
//         for(let j=i+1; j<str.length;j++){
//             if(str[i] === str[j]) {
//                 return str[i]
//             }
//         }
//     }
// }
// time complexity of O(n^2);


// function findFirst(str) {
//     const table = {};

//     for (const char of str) {
//         if (table[char]) {
//             return char;
//         }
//         table[char] = 1;
//     }
// }

// // time complexity O(n) - linear time

// console.log(findFirst(word))


class HashTable {
    constructor () {
        this.size = 1000;
        //creating buckets consisting array for 100 empty slots
        this.buckets = Array(1000).fill(null).map(()=>[]);
    }

    // Hash Method
    hash(key) {
        let hash = 0;
        for (const char of key) {
            // built in method to call in string
            hash += char.charCodeAt(0)
        }
        return hash%this.size;
    }

    // set key to a value
    set(key, value) {
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((el) => {
            return el.key === key;
        });

        if(storedElement) {
            storedElement.val = value;
        } else {
            bucketArray.push({ key: key, val: value})
        }

    }

    get(key) {
        const keyHash = this.hash(key);
        return this.buckets[keyHash];
    }

    showInfo() {

        // use for in loop to get keys
        for( const key in this.buckets) {
            if( this.buckets[key] !== null) {
                console.log(key, this.buckets[key]);
            }
        }
    }
  
}


const table1 = new HashTable();



const word = 'hello';

function findFirstRep(str) {
    const table = new HashTable();

    for (const el of str) {
        if (table.get(char)) {
            return char;
        }
        table.set(char, 1);
    }
}

console.log(findFirstRep(word))