function addName(obj, name, value) {
  if (typeof value !== "number") {
    throw new TypeError("Value must be a number");
  }
  return {
    ...obj,
    [name]: value,
  };
}
console.log(addName({}, "Bro", 400));
console.log(addName({ Bro: 400 }, "Bro2", 400));
