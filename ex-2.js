//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  reversString = s.toLowerCase().replace(/[^a-zA-Z]/g, '').reverse();
  console.log(newS)
  let reversString = "";
  for(i=newS.length-1; i>=0; i--){
    reversString = reversString+newS[i]
  }
  return reversString === newS ? true : false
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true 
console.log(result2); // false
console.log(result3); // true
