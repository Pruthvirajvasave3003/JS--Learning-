"use strict"; //treat all javascript code as newer version of javascript

//there are two types of datatype in js 1) primitive and 2) non-primitive
//1)primitive datatype

//number
//bigint
//string => ""
//boolean => true or false

//null => standolone / empty value 
        /*The null value represents the intentional absence of any object value.It is one of JavaScript's 
          primitive values and is treated as falsy for boolean operations.
          The reasoning behind this is that null, in contrast with undefined, was (and still is) often used where objects appear. In other words, null is often used to signify an empty reference to an object. When Brendan Eich created JavaScript, he followed the same paradigm, and it made sense (arguably) to return "object". In fact, the ECMAScript specification defines null as the primitive value that represents the intentional absence of any object value (ECMA-262, 11.4.11).
        */

//undefined => 
//symbol => unique value

//2)non primitive datatypes
//object 
//array

let name = "Tiger"
let aga = 9
let nickName;
let meal = null
let nonVeg = true
const sym1 = Symbol("Tiger");

console.log(typeof null) // object
console.log(typeof undefined) //undefined
console.log(typeof nickName)
console.log(sym1)
console.log(typeof sym1)