// The last feature you will learn in this article is the rest parameter syntax. 
// The syntax appears the same as spread (...) but has the opposite effect. 
// Instead of unpacking an array or object into individual values, 
// the rest syntax will create an array of an indefinite number of arguments.

// 1) In the function restTest for example, 
// if we wanted args to be an array composed of an indefinite number of arguments, 
// we could have the following:

function restTest(...args) {
    console.log('1) Rest test' ,args)
}

restTest(1, 2, 3, 4, 5, 6)

// 2) Rest syntax can be used as the only parameter or as the last parameter in the list.
// If used as the only parameter, it will gather all arguments, 
// but if it's at the end of a list, it will gather every argument that is remaining (into an array)

function restTestTwo(one, two, ...args) {
    console.log('2) First argument ',one)
    console.log('2) Second argument ',two)
    console.log('2) Gather every argument remaining', args)
}

restTestTwo(1, 2, 3, 4, 5, 6)

// 3) Rest can be used when destructuring arrays as well:
const [firstTool, ...rest] = ['hammer', 'screwdriver', 'wrench']

console.log('3) Destructuring array & rest', firstTool)
console.log('3) Destructuring array & rest', rest)

// 4) Rest can also be used when destructuring objects:
const {isLoggedIn, ...rest2} = {id: 1, name: 'Ben', isLoggedIn: true}

console.log('4) Destructuring object & rest', isLoggedIn)
console.log('4) Destructuring object & rest', rest2)

// *************** Sums ***************
// Destructuring is used to create varibles from array items or object properties.
// Spread syntax is used to unpack iterables such as arrays, objects, and function calls.
// Rest parameter syntax will create an array from an indefinite number of values.

// Destructuring, rest parameters, and spread syntax are useful features in JavaScript 
// that help keep your code succinct and clean.