const PI = Math.PI;
console.log(PI); // 3.141592653589793
console.log(Math.round(PI)); //3 ; round the value to nearest number
console.log(Math.round(9.81)); // 10 
console.log(Math.floor(PI)); // round the value down
console.log(Math.ceil(PI)); // round the value up
console.log(Math.min(11,6,14,36,-6,77,0)); //-6; return the min value
console.log(Math.max(11,6,14,36,-6,77,0));//77;return the max value


const randNum = Math.random(); //return random number between 0 to 0.999999
console.log(randNum);

const num = Math.floor(Math.random()*10);//return random number between 0 to 9
console.log(num);

//Absolute value
console.log(Math.abs(-10)); //10
//Square root
console.log(Math.sqrt(100)); // 10
console.log(Math.sqrt(2)); //1.4142135623730951
// Power
console.log(Math.pow(3, 2)); // 9
console.log(Math.E); // 2.718

// Logarithm
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Trigonometry
console.log(Math.sin(0));
console.log(Math.sin(60));
console.log(Math.cos(0));
console.log(Math.cos(60));