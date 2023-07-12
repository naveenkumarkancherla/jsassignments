                             //String Functions
//for finding string length
var name="kancherla naveenkumar naidu"
var result1=name.length
console.log("array length is: "+result1) 

//for converting to Uppercase & Lowecase
var result2=name.toUpperCase()
var result3=name.toLowerCase()
console.log("Upper case of name is: "+result2)
console.log("Upper case of name is: "+result3)

//substring(start_index,end_index),slice,substr(start_index,length of the string should be)
var str="a quick brown fox jumps over the lazy dog"
var substring = str.substring(18,37);
var substr = str.substr(2, 15);
var slice = str.slice(38, 41);
console.log(substring);  
console.log(substr);     
console.log(slice);
//replace function
var newStr = str.replace("dog", "cat");
console.log(newStr); 
