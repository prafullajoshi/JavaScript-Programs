let str = "racecar";

function isPallindrome(str) {
    // turn the string to lower case
    str = str.toLowerCase();
    // reverse the input string and return the result of the comparision
    return str = str.split('').reverse().join('');
}


if (isPallindrome(str)) {
    console.log("String is pallindrome !");
} else {
    console.log("String is not pallindrome !");
}