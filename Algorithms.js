// FIZZBUZZ

// function fizzbuzz(n) {
//   const arr = []
//   for (let i = 1; i < n; i++) {
//     const val =
//       i % 15 === 0
//         ? "fizzbuzz"
//         : i % 5 === 0
//           ? "fizz"
//           : i % 3 === 0
//             ? "buzz"
//             : i

//     arr.push(val)
//   }
//   return arr
// }
// fizzbuzz(100)

// REVERSE

// function reverse(str) {
//     return str.split("").reduce((acc, char) => char + acc, "")
// }
// reverse ("thingy")

// PALINDROME

// const palindrome = word =>
//   word === word.split("").reduce((acc, char) => char + acc, "")

// palindrome("racecar")

// REVERSE AN INTEGER

// function reverseInt(n) {
//   const str = String(Math.abs(n))
//   return (
//     Math.sign(n) *
//     Number(
//       str
//         .split("")
//         .reverse()
//         .join("")
//     )
//   )
// }
// reverseInt(501)

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ****Anagram, comparing numbers between 2 strings, anything where you need to count characters in a string or values in an array****
function maxChar(str) {
    let charMap = {}
    let max = 0
    let maxChar = ''
  
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1
    }
  
    for (let key in charMap) {
      if (charMap[key] > max) {
        max = charMap[key]
        maxChar = key
      }
    }
    return maxChar
  }
  
  function isAnagram(str1, str2) {
    let charMap1 = {}
    let charMap2 = {}
    let isAnagram = true
  
    for (let char of str1) {
      charMap1[char] = charMap1[char] + 1 || 1
    }
    for (let char of str2) {
      charMap2[char] = charMap2[char] + 1 || 1
    }
  
    for (let key in charMap1) {
      if (charMap1[key] !== charMap2[key]) {
        isAnagram = false
      }
    }
    for (let key in charMap2) {
      if (charMap2[key] !== charMap1[key]) {
        isAnagram = false
      }
    }
    return isAnagram
  }