// inspired by the first method from this yt video https://www.youtube.com/watch?v=rsxT4FfRBaM

function binary(decimal) {
  // Part 1: find powers of 2 that add up to decimal
  let powers = []; // an array to store the powers of 2 that add up to decimal
  let power = 0; // start with 2^0

  while (2 ** power <= decimal) {
    // while the next power of 2 is less than or equal to decimal
    power++; // increase the power by 1
  }
  power--; // we overshot the power by 1, so decrease it by 1 (cuz even though we reached the condition we still incremented by 1)
  while (decimal > 0) {
    console.log(
      `the input decimal then the rest after substraction: ${decimal}`
    );
    // while there is still decimal left to convert
    if (decimal - 2 ** power >= 0) {
      console.log(
        `while  we still have decimal left it's 2^${power}=${2 ** power}`
      );

      // if the current power of 2 fits into the decimal
      decimal -= 2 ** power; // subtract the power of 2 from the decimal
      powers.push(power); // add the power of 2 to the array of powers
      console.log(
        "so we push the power used in the substraction into the array of powers:",
        powers
      );
    }
    power--; // move on to the next smaller power of 2
    console.log(
      "power when we move on before we check/recheck equals:",
      power + ` so 2^${power}=${2 ** power}`
    );
  }
  console.log(
    "so here all the powers we pushed into the array of powers:",
    powers
  );

  // Part 2: construct binary string from powers
  let binaryStr = ""; // start with an empty string to represent the binary number

  for (let i = 10; i >= 0; i--) {
    // we know the binary number will be at most 10 digits long (because function only handles decimal numbers less than 1024)
    if (powers.includes(i)) {
      // if the current power of 2 is in the array of powers
      binaryStr += "1"; // add a "1" to the binary string
      console.log('check the string when "1" added', binaryStr);
    } else {
      binaryStr += "0"; // otherwise, add a "0"
    }
  }
  console.log(binaryStr);

  return binaryStr.substr(binaryStr.indexOf("1")); // trim off any leading zeros and return the binary string
}
console.log("binary without extrat zeros", binary(10));
