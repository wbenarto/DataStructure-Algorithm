
// class HashTable {
//     constructor() {
//         this.size=20;
//         // need the bucket to store multiple values
//         // creating nested array inside of bucket
//         this.buckets = Array(20).fill(null).map(() => []);
//     }   

//     hash(key) {
//         let hash = 0;

//         for (const char of key) {
//             hash += char.charCodeAt(0)
//         }

//         return hash%this.size
//     }

//     // set value to a specific key
//     set(key, val) {
//         const hashKey = this.hash(key)
//         // nested array, for the given key hash
//         const bucketArray = this.buckets[hashKey] 
//         // check if nested array consisted a value in that key
//         const storedElement = bucketArray.find((el) => {return el.key === key})

//         // if we found something
//         if (storedElement) {
//             storedElement.val = val
//         } else {
//             bucketArray.push({key: key, val: val})
//         }
//         // console.log(this.buckets)
//     }

//     get(key) {
//         const hashKey = this.hash(key)
//         const bucketArray = this.buckets[hashKey]
//         const storedElement = bucketArray.find((el) => {
//             return el.key === key;
//         })
//         return storedElement;
        
//     }

//     showInfo() { 
//         for (const key in this.buckets) {
//             if(this.buckets[key] !== null) {
//                 console.log(key, this.buckets[key])
//             }
//         }
//     }


// }
// const table = new HashTable();

// for (const char of 'academind') {
//     table.set(char, char)
// }
// console.log(table.showInfo())


class HashTable {
    constructor (){
        this.size = 2;
        this.buckets = Array(2).fill(null).map(()=>[]);
    }

    hash(str) {
        let hash = 0;
        for (const char of str) {
            hash += char.charCodeAt(0);
        }
        return hash%this.size;
    }

    set(key, value) {
        const hashKey = this.hash(key);
        const bucketArray = this.buckets[hashKey];
        const storedElement = bucketArray.find((el) => {
            return el.key === key
        })

        if (storedElement) {
            storedElement.val = value
        } else {
            bucketArray.push({key, value})
        }
    }

    get(key) {
        const hashKey = this.hash(key);
        const bucketArray = this.buckets[hashKey];
        const storedElement = bucketArray.find((el)=>{
            return el.key === key
        })
        return storedElement;
    }

    showInfo() {
        for (const key in this.buckets) {
            if(this.buckets[key] !== null) {
                console.log(key, this.buckets[key])
            }
        }
    }
}

const table = new HashTable();

table.hash('name')

table.set('name', 'julio')
table.set('name', 'Leonard')
table.set('age', 21)
table.set('gender', 'male');
table.set('color', 'blue');
table.get('name')
table.get('age')

table.showInfo();