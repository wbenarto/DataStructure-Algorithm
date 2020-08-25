class HashTable {
    constructor () {
        this.size = 20;
        this.buckets = Array(20).fill(null);
    }

    hash(str) {
        let hash = 0 ;
        for(const char of str) {
            hash += char.charCodeAt(0)
        }
        return hash % this.size;
    }

    set(key, val) {
        const hashKey = this.hash(key);
        if (this.buckets[hashKey] === null || this.buckets[hashKey].key === key) {
            this.buckets[hashKey] = {key: key, val: val}
        } else {
            while(this.buckets[hashKey]!== null) {
                keyHash++;
            }
            this.buckets[hashKey] = value;
        }
    }

    get(key) {
        const hashKey = this.hash(key);
        for(let i = hashKey; i<this.buckets.length; i++) {
            if(!this.buckets[i]) {
                continue;
            }
            if(this.buckets[i].key === key) {
                return this.buckets[i].val
            }
        }
    }

    showInfo() {
        for(const key in this.buckets) {
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