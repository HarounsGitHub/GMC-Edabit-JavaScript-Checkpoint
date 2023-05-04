function calcAge(age) {
  if (Number.isInteger(age) || age > 0) {
    return age * 365;
  } else {
    throw new TypeError("Age must be a positive integer");
  }
}
console.log(calcAge(2023));
