
class HashTable {
    constructor() {
        this.size=1000;
        // need the bucket to store multiple values
        // creating nested array inside of bucket
        this.buckets = Array(1000).fill(null).map(() => []);
    }   

    hash(key) {
        let hash = 0;

        for (const char of key) {
            hash += char.charCodeAt(0)
        }

        return hash%this.size
    }

    // set value to a specific key
    set(key, val) {
        const hashKey = this.hash(key)
        // nested array, for the given key hash
        const bucketArray = this.buckets[hashKey] 
        // check if nested array consisted a value in that key
        const storedElement = bucketArray.find((el) => {return el.key === key})

        // if we found something
        if (storedElement) {
            storedElement.val = val
        } else {
            bucketArray.push({key: key, val: val})
        }
        console.log(this.buckets)
    }

    get(key) {
        const hashKey = this.hash(key)
        const bucketArray = this.buckets[hashKey]
        const storedElement = bucketArray.find((el) => {
            return el.key === key;
        })
        return storedElement;
    }

    showInfo(key) {
        for (const key in this.buckets) {
            if(this.buckets[key] !== null) {
                console.log(key, this.buckets[key])
            }
        }
    }


}

function findFirst(str) {
    
    const table = new HashTable();
    
        for (const char of str) {
            console.log('char :' + char)
            console.log('table[char]' + table[char])
            if (table[char]) {
                console.log('table[char] :' + table[char] )
                console.log('result: ' + char)
                return char;
            }
            table[char] = 1;
        }
    }

findFirst("ball")
findFirst("dummy")