// Exercise: Level 1 

let challenge = "30 Days Of JavaScript";

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,7));
console.log(challenge.slice(3));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let Application = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(Application.split(','));

console.log(challenge.replace('JavaScript','Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let myMsg = "You cannot end a sentence with because because because is a conjunction";
console.log(myMsg.indexOf('because'));
console.log(myMsg.lastIndexOf('because'));
console.log(myMsg.search('because'));

let newChallenge = " 30 Days Of JavaScript ";
console.log(newChallenge.trim());

console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('pt'));
console.log(challenge.match('a'));

let str1 = "30 Days of";
console.log(str1.concat(" JavaScript"));


console.log(challenge.repeat(2));

// Exercise: Level 2 

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");


// Check if typeof '10' is exactly equal to 10. If not make it exactly equal. 
let num = '10';
console.log(typeof(num) == 10);
let numInt = parseInt(num);
console.log(numInt == 10);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10. 
let floatVal = parseFloat('9.8');
console.log(floatVal == 10);
let floatCeilValue = Math.ceil(floatVal);
console.log(floatCeilValue == 10);

let myStr1 = "python";
let myStr2 = "jargon";
console.log(myStr1.includes('on'));
console.log(myStr2.includes('on'));

let mySentence = "I hope this course is not full of jargon";
console.log(mySentence.includes('jargon'));

// Generate a random number between 0 and 100 inclusively. 
let randomNum1 = Math.floor(Math.random()*101);
console.log(randomNum1);
// Generate a random number between 50 and 100 inclusively. 
let randomNum2 = Math.floor(Math.random()*(100 - 50 + 1))+50;
console.log(randomNum2);
// Generate a random number between 0 and 255 inclusively. 
let randomNum3 = Math.floor(Math.random()*256);
console.log(randomNum3);
// Access the 'JavaScript' string characters using a random number. 
let text = "JavaScript";
let randomIndex = Math.floor(Math.random()*text.length);
console.log(text[randomIndex]);

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");


let sentence = "You cannot end a sentence with because because because is a conjunction";
let start = sentence.indexOf('because because because');
let end  = 'because because because'.length;
console.log(sentence.substr(start,end));



// Exercises: Level 3 
let secMsg = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let count = secMsg.match(/love/gi);
console.log(count);

let thdMsg = "You cannot end a sentence with because because because is a conjunction";

let bcsCount = thdMsg.match(/because/gi);
console.log(bcsCount);


let messySentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let cleanText = messySentence.replace(/[%@&#;$;!?.,]/g, "");
console.log(cleanText);



let empInfo = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let monthlySalary = parseInt(empInfo.match(/(\d+) euro from salary per month/)[1]);
let monthlyCoursesIncome = parseInt(empInfo.match(/(\d+) euro online courses per month/)[1]);
let annualBonus = parseInt(empInfo.match(/(\d+) euro annual bonus/)[1]);

let totalIncome = (monthlySalary + monthlyCoursesIncome)*12+annualBonus;
console.log(totalIncome);















