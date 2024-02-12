/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (!str || str.trim() === '') {
    return true;
  }

  // Normalize the string:
  const normalizedStr = str.toLowerCase().replace(/[^\w\s]/g, '');

  // Efficient two-pointer approach for character comparison:
  let left = 0;
  let right = normalizedStr.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from both sides:
    while (left < right && !normalizedStr[left].match(/\w/)) {
      left++;
    }
    while (left < right && !normalizedStr[right].match(/\w/)) {
      right--;
    }

    if (normalizedStr[left].toLowerCase() !== normalizedStr[right].toLowerCase()) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }

  return true; // It's a palindrome
}

module.exports = isPalindrome;
