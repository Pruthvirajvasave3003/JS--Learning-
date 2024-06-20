let name = "Harsh"
let age = 8
let male = true

let score = 60
let score1 = "70"

//console.log(typeof(score))
//console.log(typeof(score1))

//converting a String datatype value into the Number/int datatype
let valueInNumber = Number(score1)
//console.log(typeof(valueInNumber))
//console.log(valueInNumber)

//converting a Number datatype value into the String datatype
let valueInString = String(score)
//console.log(typeof(valueInString))
//console.log(valueInString)

// try another

let height = "6fit"
let heightInNumber = Number(height)
//console.log(typeof heightInNumber)
//console.log(heightInNumber) // in output it shows NaN(Not-a-Number), In JavaScript, NaN is a number that is not a legal number. The Global NaN property is the same as the Number. Nan property.

/* 
NaN is a property of the global object. In other words, it is a variable in global scope.

In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.

There are five different types of operations that return NaN:

1) Failed number conversion (e.g. explicit ones like parseInt("blabla"), Number(undefined), or implicit ones like Math.abs(undefined))

2) Math operation where the result is not a real number (e.g. Math.sqrt(-1))
Indeterminate form (e.g. 0 * Infinity, 1 ** Infinity, Infinity / Infinity, Infinity - Infinity)

3) A method or expression whose operand is or gets coerced to NaN (e.g. 7 ** NaN, 7 * "blabla") — this means NaN is contagious

4) Other cases where an invalid value is to be represented as a number (e.g. an invalid Date new Date("blabla").getTime(), "".charCodeAt(1))

5) NaN and its behaviors are not invented by JavaScript. Its semantics in floating point arithmetic (including that NaN !== NaN) are specified by IEEE 754. NaN's behaviors include:

If NaN is involved in a mathematical operation (but not bitwise operations), the result is usually also NaN. (See counter-example below.)

1) When NaN is one of the operands of any relational comparison (>, <, >=, <=), the result is always false.
2) NaN compares unequal (via ==, !=, ===, and !==) to any other value — including to another NaN value.

NaN is also one of the falsy values in JavaScript. 
*/

let temp_1 = null
let temp_2 = Number(temp_1)
//console.log(typeof temp_2)
//console.log(temp_2) //output = 0 

let temp_3 = undefined
let temp_4 = Number(temp_3)
//console.log(typeof temp_4)
//console.log(temp_4) //output = NaN 

let temp_5 = true
let temp_6 = Number(temp_5)
//console.log(typeof temp_6)
//console.log(temp_6) //output = 1

let temp_7 = "Pruthvi"
let temp_8 = Number(temp_7)
//console.log(typeof temp_8)
//console.log(temp_8) //output = NaN 


//converting into the Boolean
let isLogedIn = 1
let booleanIsLogedIn = Boolean(isLogedIn)
//console.log(typeof booleanIsLogedIn)
//console.log(booleanIsLogedIn)

let isLogedIn_1 = 0
let booleanIsLogedIn_1 = Boolean(isLogedIn_1)
//console.log(typeof booleanIsLogedIn_1)
//console.log(booleanIsLogedIn_1)

let isLogedIn_2 = ""
let booleanIsLogedIn_2 = Boolean(isLogedIn_2)
console.log(typeof booleanIsLogedIn_2)
console.log(booleanIsLogedIn_2)

let isLogedIn_3 = "Raj"
let booleanIsLogedIn_3 = Boolean(isLogedIn_3)
console.log(typeof booleanIsLogedIn_3)
console.log(booleanIsLogedIn_3)
