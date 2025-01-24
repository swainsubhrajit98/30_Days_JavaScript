let myString = "Subhrajit Swain";
//it access the character from the the string
console.log(myString[3]);
console.log(myString.length-1);//return lenth of the string

//it takes the index and return the value
console.log(myString.charAt(0));
let lastIndex = myString.length - 1;
console.log(myString.charAt(lastIndex));

//it takes the index and return char code(ASCII number) of the value
console.log(myString.charCodeAt(3));//h; h ASCII number is 104
console.log(myString.charCodeAt(myString.length-1));//n; n ASCII number is 110

// concat(): it takes many substrings and creates concatenation.
// string.concat(substring, substring, substring)
let num = '30';
console.log(num.concat(" Days"," of"," JavaScript"));
//It will return 30 Days of JavaScript

// indexOf(): Takes takes a substring and if the substring exists in a 
// string it returns the first position of the substring if does not exist it returns -1
let newString = '30 Days Of JavaScript';
console.log(newString.indexOf('D'));        // 3
console.log(newString.indexOf('Days'));       // 3
console.log(newString.indexOf('days'));       // -1
console.log(newString.indexOf('a'));          // 4
console.log(newString.indexOf('JavaScript')); // 11
console.log(newString.indexOf('Script'));     //15
console.log(newString.indexOf('script'));     // -1

// lastIndexOf(): Takes takes a substring and if the substring exists 
// in a string it returns the last position of the substring if it does not exist it returns -1

let myMessage = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(myMessage.lastIndexOf('love'));       // 67
console.log(myMessage.lastIndexOf('you'));        // 63
console.log(myMessage.lastIndexOf('JavaScript'));  // 38

// length: The string length method returns the number of characters in a 
// string included empty space. Example:
console.log(myMessage.length);

// toLowerCase(): this method changes the string to lowercase letters.
console.log(newString.toLowerCase());
// toUpperCase(): this method changes the string to uppercase letters.
console.log(newString.toUpperCase());

// startsWith: it takes a substring as an argument and it checks if the 
// string starts with that specified substring. It returns a boolean(true or false).
// string.startsWith(substring)
let string = 'Love is the best to in this world';
let country = 'Finland';
console.log(string.startsWith('Love')); // true
console.log(string.startsWith('love')); // false
console.log(string.startsWith('world')); // false
console.log(country.startsWith('Fin')); // true
console.log(country.startsWith('fin')); // false
console.log(country.startsWith('land')); //  false


// endsWith: it takes a substring as an argument and it checks if the string 
// starts with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
console.log(string.endsWith('world')); // true
console.log(string.endsWith('love')); // false
console.log(string.endsWith('in this world')); // true
console.log(country.endsWith('land')); // true
console.log(country.endsWith('fin')); // false
console.log(country.endsWith('Fin')); //  false

//substr(): It takes two arguments,the starting index and number of 
// characters to slice.
let str1 = 'JavaScript'
console.log(str1.substr(4,6));    // Script
let str2 = 'Finland';
console.log(str2.substr(3, 4));   // land
// substring(): It takes two arguments,the starting index and the stopping 
// index but it doesn't include the stopping index.
console.log(str1.substring(0,4));   // Java
console.log(str1.substring(4,10));     // Script
console.log(str1.substring(4));    // Script
console.log(str2.substring(0, 3));   // Fin
console.log(str2.substring(3, 7));   // land
console.log(str2.substring(3));   // land

// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. 
// It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let newMsg = '30 Days Of JavaScript'
console.log(newMsg.includes('Days'));     // true
console.log(newMsg.includes('days'));     // false
console.log(newMsg.includes('Script'));     // true
console.log(newMsg.includes('script'));     // false
console.log(newMsg.includes('java'));     // false
console.log(newMsg.includes('Java'));     // true

let newCtr = 'Finland'
console.log(newCtr.includes('fin')); // false
console.log(newCtr.includes('Fin')); // true
console.log(newCtr.includes('land')); // true
console.log(newCtr.includes('Land')); // false

// repeat(): it takes a number argument and it returned the repeated version of the string.
// string.repeat(n)
let str3 = 'love'
console.log(str3.repeat(10)); // lovelovelovelovelovelovelovelovelovelove

// replace(): takes two parameter the old substring and new substring.
// string.replace(oldsubstring, newsubstring)

let str4 = '30 Days Of JavaScript';
console.log(str4.replace('JavaScript', 'Python')); // 30 Days Of Python
let str5 = 'Finland';
console.log(str5.replace('Fin', 'Noman')); // Nomanland

// search: it takes a substring as an argument and it returns the index of the first match.
// string.search(substring)
let str6 = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(str6.search('love')); // 2

// split(): The split method splits a string at a specified place.
let str7 = '30 Days Of JavaScript'
console.log(str7.split());     // ["30 Days Of JavaScript"]
console.log(str7.split(' '));  // ["30", "Days", "Of", "JavaScript"]
let firstName = 'Asabeneh';
console.log(firstName.split());  // ["Asabeneh"]
console.log(firstName.split(''));  // ["A", "s", "a", "b", "e", "n", "e", "h"]
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland';
console.log(countries.split(',')); // ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(','));   //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]


//trim(): Removes whitspaces from starting and ending of the string.
let str8 = '   30 Days Of JavaScript   ';
console.log(str8);
console.log(str8.trim('')); 
let fName = ' Asabeneh ';
console.log(fName.trim()); 


// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. 
// Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let str9 = 'love';
let patternOne = /love/ ;// with out any flag
let patternTwo = /love/gi ;// g-means to search in the whole text, i - case insensitive
str9.match(string);
let str10 = 'I love JavaScript. If you do not love JavaScript what else can you love.';
console.log(str10.match('love')); //
/*
output

["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
*/
let pattern = /love/gi;
console.log(string.match(pattern)); // ["love", "love", "love"]
// Let us extract numbers from text using regular expression. This is not regular expression section, no panic.

let txt = 'In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge';
let regEx = /\d/g; // d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx)); // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)); // ["2019", "30", "2020"]
