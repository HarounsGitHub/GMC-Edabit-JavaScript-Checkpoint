// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; :/Ooutput: boom!

const arr = [1, 2, 3, 4, 5, 6]; //Ooutput: there is no 7 in the array

function sevenBoom(arr) {
  const regex = /7/;
  const str = arr.join(",");
  if (str.match(regex)) {
    return "Boom!";
  } else {
    return "there is no 7 in the array";
  }
}
console.log(sevenBoom(arr));
