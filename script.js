// JAVASCRIPT INTRODUCTION - FUNDAMENTALS & DATA TYPES
/* Some of the outputs are rendered in the DOM as an example of using innerHTML. Most outputs are only in the console.log */

// -- USE STRICT -- //
/* 
The "use strict" directive was introduce in ECMAScript v. 5.
 - it is a literal expression.
 - with 'use strict', we indicate that code should be done in 'strict mode'.
 - 'strict mode' - doesn't allow you, e.g., to use undeclared variables.
*/
'use strict'

// -- COMMENTS -- //
// this is a single line comment

/*
this
is
a multiline 
comment 
*/

// -- OUTPUT -- //
// CONSOLE 
// console.log() method outputs a message to the web console.
console.log('Hello There')

// ALERT
/* 
Alert is rendered to the DOM with a function
- called with onclick='alertButton()'
Check the browser
*/
function alertButton() {
  alert('Thanks for clicking me!')
}

// INNER HTML
/* 
Output rendered to the DOM 
- in this example I output a string to the < h1 > title in the browser 
*/
const title = 'JavaScript Project';
document.getElementById('title').innerHTML = title;
console.log(title)

/*
This function changes the title in the browser
- with onclick ='changeTitle()' 
*/
function changeTitle() {
  document.getElementById('title').innerHTML = 'Hello World!'
};


// VARIABLES - variable declarations

/* 
A Global Variable: 
- a variable declared outside of a function 
- it is available to any other code in a document 
*/
/* 
A Local Variable: 
- a variable declared inside a function
- is only available in that function
*/

// var - declares a variable. a value can be assigned to it.
var age = 40;
console.log('Var declaration: ' + age);

// let - declares a block-scoped variable, and should be used as a local variable. a value can be assigned to it. It can be assigned new value.
let old = 100;
console.log('Let declaration: she is ' + old);
// we can assign let variables with a new value 
old = 'very old';
console.log('Let declaration old, assigned with new value: she is ' + old);

// const - declares a block-scoped constant, which can not be changed.
const willNotChange = 'const';
// notChangable = 'let' will throw an error.
console.log((willNotChange) + ' declaration cannot be assigned new value');

// ASSIGNMENT OPERATORS - 
// equal(=) - assigns value to a variable 
/* 
Basic operators are:
- addition assignment a += b
- subtraction assignment a -= b
- multiplication assignment a *= b
- division assignment a /= b
- remainder assignment a %= b 
*/

const a = 10;
let b = 20
console.log('a + b = ' + (a + b));
/* 
console.log('a = b - a: ' + (a = b - a));
This will throw an error.
Because we cannot assign a new value to a constant.
*/

// NUMBERS - operators can be used on operators
/* 
 Operators can be used with numbers.
 Numbers also has 3 symbolic values: 
 +Infinity, -Infinity, and NaN ("Not a Number") 
*/
let c = 2;
let d = 5;
let e = 10;
let f = 100;

// lets try some operators
let addition = c + d;
console.log('c + d = ' + addition);
let subtraction = e - d;
console.log('e - d = ' + subtraction);
let division = f / d;
console.log('f / d = ' + division);
let multipication = f * e * c;
console.log('f * e * c = ' + multipication)
let remainder = d % c;
console.log('d % c = ' + remainder)

// NaN - output when result is not a number
let notNumber = c % 0;
console.log('a %= 0 outputs: ' + c % 0)

// MATH - round, random, floor
/* 
With Math.random() function:
- we return a floating-point, a psuedo-random number
- in the range 0 to less than 1
*/
console.log('Math.random() outputs:' + (Math.random()));

/* 
With Math.round() function:
- we return a number rounded up to the nearest integer.
*/
console.log('Math.round(100.5) outputs: ' + (Math.round(100.5)) + ', but Math.round(100.49) outputs: ' + (Math.round(100.49)))

/*
With Math.floor() function:
- we return the largest integer, which is equal to or less than the given number
*/
console.log('Math.floor(100.90) outputs: ' + (Math.floor(100.90) + ', Math.floor(100.10) outputs: ' + (Math.floor(100.10) + ', and Math.floor(100) also outputs: ' + (Math.floor(100)) + ', but Math.floor(-100.1) outputs: ' + (Math.floor(-100.1)))));


// DATES in JavaScript - Set, Get, Format

// Date() displays the date and time of the moment this file is opened 
console.log('You opened this file on: ' + (Date()));

// new Date(), let's output a new Date() to a UTCString.
const today = new Date();
//Output date to DOM
document.getElementById("date").innerHTML = today.toUTCString();
console.log('Today is ' + today.toUTCString())

// getDay() - outputs the weekday as a number (0,6)
const day = new Date();
console.log('Today is day ' + day.getDay() + ' of the week.');

// If we want to display the name of the weekday - we have to make an string array with the first
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//getDay() again with weekday names.
console.log('Today is a' + (' ') + days[day.getDay()] + '. It is day ' + day.getDay() + ' of the week.');
// OUTPUT TO THE DOM
document.getElementById("day").innerHTML = ('Today is a' + (' ') + days[day.getDay()] + '. It is day ' + day.getDay() + ' of the week.');


// SET DATE - we can override a date - set a new date
var myBDay = new Date();
/* 
Example of 'use strict' throwing error:
- console.log(myBDAY.setFullYear(1980, 08, 26));
- The above throws this error: "Decimals with leading zeros are not allowed in strict mode" 
- We change 08 to 8 to resolve error.
*/
myBDay.setFullYear(1980, 8, 26);
console.log(myBDay);
document.getElementById('b-day').innerHTML = myBDay;

// -- STRINGS -- //
/* 
- string type is text data
- string elements have position/index, starting at [0]
- string.length refers to the number of elements in the string
- strings are immutable - they cannot be changed
*/

const firstPart = 'This is the first part';
console.log('First part: ' + firstPart)
const secondPart = 'and this is the second part.';
console.log('Second part: ' + secondPart)

// Concatenation of string variables
// we can concat the two strings together:
const fullSentence = firstPart + (' ') + secondPart;
console.log('full sentence: ' + fullSentence)

// Interpolation and Template Literals 
/*
- in JavaScript ES6 we can inject, or interpolate,
variables into strings with TEMPLATE LITERALS. 
- e.g. ${firstName} - the value of firstName is inserted there.
- This makes the code more readable
- Template literals are backticks(``). 
*/

const firstName = 'Dale';
console.log(`His first name is ${firstName}`);
const lastName = 'Cooper'
console.log(`His last name is ${lastName}`);
const fullName = `Detective ${firstName} ${lastName}`;
console.log(`String with variable interpolation: ${fullName}`)

/*  
- Sometimes template literals are better to define a string,
rather than single-quotes ('') or double-quotes ("") 
- especially when you need to use single-quote and double-quotes inside your string.
- This doesn't work for example and we need use template literals:
const otherText = 'I'm a "nerd"' or const otherText = "I'm a "nerd""
*/
const thisText = `I'm a "nerd"`;


// -- ARRAYS -- //

// CREATE AN ARRAY - with multiple values
let friends = ['Dale', 'Laura', 'Bobby'];
// With the join() method you can add any seperator between elements in the array
console.log('My friends are:' + ' ' + friends.join(', ') + '.')

// ARRAY LENGTH
// Output the number of friends in array with friends.length
let friendAmount = friends.length;
console.log(`I have ${friendAmount} friends.`)

// ADD A FRIEND TO THE END OF THE ARRAY with PUSH()
let newFriend = 'Audrey';
friends.push(newFriend);
console.log('added a friend with push(): ' + friends.join(', '));

// ADD A FRIEND TO THE BEGINNING OF AN ARRAY with UNSHIFT()
let anotherFriend = friends.unshift('Log Lady')
console.log('added a friend with unshift(): ' + friends.join(', '))

// REMOVE A FRIEND FROM THE END OF THE ARRAY with POP()
let removeFriend = friends.pop();
console.log('removed a friend pop(): ' + friends.join(', '))

// REMOVE A FRIEND FROM THE BEGINNING OF THE ARRAY with SHIFT()
let removeAnother = friends.shift()
console.log('removed a friend with shift(): ' + friends.join(', '))

// LOOP OVER ARRAY OF FRIENDS AND OUTPUT friend and the index position
friends.forEach(function (item, index, array) {
  console.log(item, index)
})
// OUTPUT NEW FRIENDS ARRAY IN ALPHABETICAL ORDER with SORT()
let sortFriends = friends.sort().join(', ')
console.log(sortFriends);

// FIND INDEX POSITION FOR A SPECIFIC ITEM
let friendIndex = friends.indexOf('Laura');
console.log('Find index position for Laura: ' + friendIndex);

// LAURA DIED, LET'S REMOVE HER FROM OUR FRIENDS LIST BY HER INDEX POSTION
let lauraDied = friends.splice(friendIndex, 2);
console.log('Laura died, I removed her from my friends list with splice(): ' + friends.join(' '));

// -- BOOLEANS -- //
/*
Booleans can have two values:
- true
- false

Boolean() function 
-Find out if a variable or expression is true or false
*/
const isItTrue = Boolean(2 > 1);
console.log(`Is 2 larger than 1? ${isItTrue}`)

// TRUE = everything with a value
// with a string
let valueA = 'Is it true?'
console.log('ValueA is: ' + Boolean(valueA))
// with a number
let valueB = 10
console.log('ValueB is: ' + Boolean(valueB))
// with a boolean
let valueC = true;
console.log('ValueC is: ' + Boolean(valueC))

// FALSE = Everything without a value
// with an empty string
let valueX = ''
console.log(console.log('ValueX is: ' + Boolean(valueX)));
// with no number
let valueY = 0
console.log(console.log('ValueY is: ' + Boolean(valueY)));
// with null
let valueZ = null
console.log(console.log('ValueZ is: ' + Boolean(valueZ)));
// with a boolean
let valueQ = false
console.log(console.log('ValueQ is: ' + Boolean(valueQ)));

// -- IF/ELSE STATEMENTS -- //
/*
if statement executes a statement if a condition is met 
- if(condition) { statement}
- if this(condition) is met, then do that{statement}

< less than
> greater than
*/

let isThis = 'That';
// use ====  for equal to
if (isThis === 'That') {
  console.log('This is that')
}
// use !== for not true : does not equal
if (isThis !== 'not That') {
  console.log('This is not That')
}

// Use if/else statement  with < (less than) or > (greater than)


// The following will display a welcome greeting depending on the current time of day and outputed to DOM
let hour = new Date().getHours();
let welcome;
if (hour > 5) {
  welcome = "Good morning";
}
else if (hour > 10) {
  welcome = 'Good day';
}
else if (hour > 18 && hour < 23) {
  welcome = 'Good evening ';
}
else {
  welcome =
    "Shouldn't you be in bed?"
}

// Output appropriate welcome greeting to to console.log
console.log(welcome);
//Output to DOM 
document.getElementById('welcome').innerHTML = welcome;

// -- OBJECTS -- //
/* 
- Objects are containers for named values, called properties and methods.
- Object literal uses the {...} notation to initialize an object, and it's properties an methods directly 
- Creating an object with an object literal - a list of name:value pairs inside curly brackets {}
*/
// this is myFriend (object) with 3 properties
const myFriend = {
  firstName: 'Dale',
  lastName: 'Cooper',
  age: 35,
  isDead: false,
}
console.log(myFriend);
// Expressions can call certain property with DOT NOTATIONS object.property
console.log(`My friends name is ${myFriend.firstName} ${myFriend.lastName} and he is ${age} years old.`)

// ADD PROPERTIES to myFriend:
myFriend.hairColor = 'black';
// console.log new property.
console.log(`My friends hair color is ${myFriend.hairColor}.`)


// DELETE PROPERTIES of myFriend
delete myFriend.age;
console.log(myFriend.age) //outputs as undefined

// CREATE AN EMPTY OBJECT and add all properties to it
const thisFriend = {};
thisFriend.firstName = 'Laura';
thisFriend.lastName = 'Palmer';
thisFriend.age = 18;
thisFriend.isDead = true;
console.log(thisFriend)


// Object are mutable - 
const x = thisFriend;
x.age = 10;
//now Laura is age 10 - 
console.log(thisFriend)

// IN LOOP
// for...in - loop through properties of an object
const myself = {
  firstName: 'Vala',
  lastName: 'Sveinbjarnardóttir',
  age: 40
};
let txt = '';
for (let props in myself) {
  console.log(txt += myself[props] + " ")
}

// NESTED OBJECTS
// ojbects can have nested objects === an object can be inside another object
const thatFriend = {
  name: 'Dale',
  age: 35,
  friends: {
    friend1: 'Log Lady',
    friend2: 'Bobby',
    friend3: 'Audrey'
  }
}
// DOT NOTATION used to access nested objects
console.log(thatFriend.friends.friend1)
// BRACKET NOTATION can also be used
console.log(thatFriend.friends['friend2'])
// or even
console.log(thatFriend['friends']['friend3'])

// NESTED ARRAYS AND OBJECTS
// Values in objects can be arrays, and values in arrays can be ojbects

const whatFriend = {
  name: 'Dale',
  friends: [
    {
      name: 'Bobby',
      nickNames: [
        'Bob',
        'Boobie',
        'Bobster'
      ]
    },
    {
      name: 'Audrey',
      nickNames: [
        'Audi',
        'ReyRey',
        'Ay'
      ]
    }
  ]
}
// OUTPUT All Friends of Dale with loop
for (let i = 0; i < whatFriend.friends.length; i++) {
  //outputs all friends names
  console.log(whatFriend.friends[i].name)
  for (let j = 0; j < whatFriend.friends[i].nickNames.length; j++) {
    // outputs all the nicknames for all the friends.
    console.log(whatFriend.friends[i].nickNames[j])
  }
}