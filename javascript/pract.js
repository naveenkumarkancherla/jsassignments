let arr = [1, 2, 3, 4, 5];
let newvar = arr.map((element) => {
  return element + element;
});

console.log("Array of doubles:");
console.log(newvar);


let arr2 = [1, 23, 33, 4, 50,45,44,24,32];
let newvar2 = arr2.filter((element) => {
  return element % 2 === 0;
});

console.log("Array of elements divisible by 2:");
console.log(newvar2);
