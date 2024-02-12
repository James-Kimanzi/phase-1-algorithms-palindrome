function isPalindrome(word) {

word = word.toLowerCase();

  // Initialize pointers for the start and end of the string
  let start = 0;
  let end = word.length - 1;

  // Iterate over the string until the pointers meet
  while (start < end) {
    // If the characters at the current positions don't match, return false
    if (word[start] !== word[end]) {
        return false;
    }
    // Move the pointers towards the center of the string
    start++;
    end--;
}

// If the loop completes without returning false, the string is a palindrome
return true;

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

This function works by iterating over the string with two pointers, 
starting from the beginning and end of the string, and moving towards the center. 
It compares characters at corresponding positions, and if any pair of characters doesn't match, 
it immediately returns false. If the loop completes without encountering any mismatch, 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

console.log(isPalindrome("mom")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
