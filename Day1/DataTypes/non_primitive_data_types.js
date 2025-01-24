// Non-primitive data types in JavaScript includes:

// 1. Objects
// 2. Arrays

let myNumArray = [1, 2, 3, 4 ,5]; //Array
myNumArray[0] = 10; //update first index value to 10
console.log(myNumArray); // [10, 2, 3]

let numsArray = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(numsArray == numbers); // false
// it will return false as they have same value but have different array instance 
// let numsArray = numbers ; //here we asign numsArray to numbers
console.log(numsArray == numbers); //true


let userOne = {
    name : 'John',
    role : 'Employee',
    id : 141
};

let userTwo = {
    name : 'John',
    role : 'Employee',
    id : 141
};

console.log(userOne == userTwo); //false
// similar to array,it will return false as they have same value but have different array instance 
//In object also we can assign the refernce