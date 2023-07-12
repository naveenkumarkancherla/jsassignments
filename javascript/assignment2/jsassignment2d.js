var str = "Payable amount Rs. 1000"
amountString = str.slice(19,23)
console.log(amountString)
console.log(typeof amountString)
const number=Number(amountString)
console.log(number)
console.log(typeof number)


//another method using split and trim is
console.log("using split & trim methods...!")
var words = str.split(" ");
// console.log(words)
var amount = words[words.length - 1].trim();
console.log(amount);

