console.log("This my first js code in vs code.");
//Arithemetic Operations
let x=10;
let y=15;
let z=x+y;
let a=x-y;
let b=x*y;
let c=x/y;
let d=x**2;
console.log("Addition is: "+z);
console.log("Subraction is: "+a);
console.log("Multiplication is: "+b);
console.log("Division is: "+c);
console.log("square of x is: "+d);
var name="Naveenkumar";
var age=21;
var college="RGUKT RK VALLEY IIIT";
console.log("My name is "+name+" and I am "+age+" years old.I am from "+college+" college");
console.log(typeof(name));
console.log(typeof(age));
if(age>=18){
    console.log("You are eligible for voting...");
}
else{
    console.log("Sorry! you are not eligible for voting..");
}
let sum=0;
 for(i=0;i<=10;i++){
    console.log(i);
    sum+=i;
 }
 console.log("The sum of upto 10 numbers is: "+sum);
 console.log(typeof(sum));
 let s = 'JavaScript';
s[0] = 'j';
console.log(s) //but string  will not change its character;
let inprogress=true;
console.log(typeof(inprogress));

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

let contact = {
    firstName: 'Naveenkumar',
    lastName: 'Naidu',
    email: 'naveenkancherla123@gmail.com',
    phone: '9704364602',
    address: {
        building: '9-115-F',
        street: 'YAHALLI LAYOUT',
        city: 'MPL',
        state: 'AP',
        country: 'IND'
    }
}
console.log(contact.firstName);
console.log(contact.lastName);
console.log(contact.email);  //or
console.log(contact['phone']); 
console.log(contact['email']); 
let string="naveenkumar";
let str1=string.replaceAll("e","a",string);
console.log(str1);
let str2=string.trim();
console.log(str2);
str3="a 1000 quick brown fox jumps over  the lazy dog";
let found=str3.slice(2);
console.log(typeof(found));
let amt=Number.parseInt(found);
console.log(amt);
console.log(typeof(amt));