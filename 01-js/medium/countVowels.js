/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str.toLowerCase();
    // let count = 0;
    // [...str].forEach((ch)=>{
    //   if("aeiouAEIOU".indexOf(ch)!==-1){
    //       count++;
    //   }
    // });
    return [...str].reduce(
      (count, ch)=>{return count + ("aeiouAEIOU".indexOf(ch)!==-1)},0);
    // return count;
}

module.exports = countVowels;