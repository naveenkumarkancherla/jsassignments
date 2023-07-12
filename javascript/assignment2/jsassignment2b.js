let sum=0
function sumOfArray(a){
    for(i=0;i<a.length;i++){
     sum += a[i]
    }
    return sum
}
var a = [1,2,3,4,5,6,7,8,9,10]
result = sumOfArray(a)
console.log("Sum of array is: " + result)