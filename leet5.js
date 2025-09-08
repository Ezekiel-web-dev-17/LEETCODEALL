/*
344. Reverse String
Solved
Easy
Topics
premium lock icon
Companies
Hint
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

/**
 * solution to Question 344 of LeetCode
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap characters at left and right indices
    [s[left], s[right]] = [s[right], s[left]];

    // Move towards the middle
    left++;
    right--;
  }
};

// Example usage:
let s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // Output: ["o","l","l","e","h"]

let s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // Output: ["h","a","n","n","a","H"]

// Time Complexity: O(n), where n is the length of the string. We traverse half of the string to swap characters.
// Space Complexity: O(1), as we are modifying the string in place and not using any extra space that grows with input size.
