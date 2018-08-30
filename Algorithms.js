// FIZZBUZZ

function fizzbuzz(n) {
  const arr = []
  for (let i = 1; i < n; i++) {
    const val =
      i % 15 === 0
        ? "fizzbuzz"
        : i % 5 === 0
          ? "fizz"
          : i % 3 === 0
            ? "buzz"
            : i

    arr.push(val)
  }
  return arr
}
fizzbuzz(100)
