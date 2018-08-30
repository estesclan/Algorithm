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

const palindrome = word =>
  word === word.split("").reduce((acc, char) => char + acc, "")

palindrome("racecar")
