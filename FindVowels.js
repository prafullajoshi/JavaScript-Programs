/**
 * Find the number of vowels in a given string
 */


 function findVowels(string) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

let str = "Prafulla";
let count = findVowels(str);
console.log("Number of vowels :", count);