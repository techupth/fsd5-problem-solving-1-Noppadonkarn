//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  return s.replace(/[^a-zA-Z]/g, '').toLowerCase().split("").reverse().join("") === s.replace(/[^a-zA-Z]/g, '').toLowerCase() ? true : false; 
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
