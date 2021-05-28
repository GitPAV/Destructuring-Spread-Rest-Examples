const numbers = [1, 2, 3]

function multiply(a, b, c) {
    return a * b * c
}
// if all the values you want to pass to the function already exist in an array, 
// the spread syntax allows you to use each item in an array as an argument:

console.log('1) spread for parameters',multiply(...numbers))

// Note: Without spread, this can be accomplished by using apply()
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply