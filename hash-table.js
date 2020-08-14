const word = 'Basketball';

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



function findFirst(str) {
    const table = {};

    for (const char of str) {
        if (table[char]) {
            return char;
        }
        table[char] = 1;
    }
}

// time complexity O(n) - linear time

console.log(findFirst(word))