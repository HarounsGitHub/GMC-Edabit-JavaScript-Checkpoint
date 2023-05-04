function squareDigits(n) {
  // convert the number to an array of digits using the split() method and the map() method
  let digits = n
    .toString()
    .split("")
    .map(function (digitStr) {
      // console.log(parseInt(digitStr));

      return parseInt(digitStr);
    });
  // console.log(digits);

  // square each digit using the map() method

  let squares = digits.map(function (digit) {
    return digit ** 2;
  });
  // console.log(squares);

  // join the squared digits into a string using the join() method and an empty separator
  let resultStr = squares.join("");
  // convert the result string back to a number using the parseInt() function
  return parseInt(resultStr);
}

// squareDigits(123);
// console.log(squareDigits(123));
