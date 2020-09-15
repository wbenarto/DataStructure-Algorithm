class Trienode {
    constructor() {
        this.value = null;
        this.children = Array(26);
    }


}

class Trie {
    constructor() {
        this.root = new Trienode();
    }
    insert(key, value) {
        let node = this.root;
        
        for (let i = 0; i < key.length; i++) {
            const alphabetIndex = key[i].charCodeAt(0) - 97;
            if (!node.children[alphabetIndex]) {
                const newNode = new Trienode();
                node.children[alphabetIndex] = newNode;
            }
                node = node.children[alphabetIndex]
        }
        node.value = value;
    }

    find(key) {
        let node = this.root;
        for (let i = 0; i<key.length; i++) {
            const alphabetIndex = key[i].charCodeAt(0)-97;
            
            if (!node.children[alphabetIndex]) {
                return false;
            }

            node = node.children[alphabetIndex];
        }
        return node;
    }

    remove(key) {
        const node = this.find(key);

        node.value = null; 
    }
}

const trie = new Trie();

trie.insert('age', 31);
trie.insert('name', 'Max');
trie.insert('names', ['names', 'johns']);

console.log(trie)



console.log(trie.find('age'))
console.log(trie.find('names'))