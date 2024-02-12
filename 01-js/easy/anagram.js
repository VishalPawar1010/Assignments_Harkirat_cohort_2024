/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


// 1. 2 inputs are anagram -> true
// 2. length is same
// convert to lowercase
// handle spaces? 
function isAnagram(str1, str2) {

const String1 = str1.toLowerCase().replace(/\s/g,'')
const String2 = str2.toLowerCase().replace(/\s/g,'')

const sort1 = String1.split('').sort().join('');
const sort2 = String2.split('').sort().join('');
  
return sort1 === sort2 ;

}

module.exports = isAnagram;
