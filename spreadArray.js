const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

// 1) Concatenate tools and otherTools together, obsolete now with the spread operator
// const allTools = tools.concat(otherTools)

const allTools = [...tools, ...otherTools]

console.log('1) better than concat',allTools)

// **************************
// 2) With spread operator you can make a shallow copy of an array 
const users = [
    {id: 1, name: 'Ben'},
    {id: 2, name: 'Leslie'},
]

const newUser = {id: 3, name: 'Ron'}

const updatedUsers = [...users, newUser]

console.log("2) Original array", users)
console.log("2) Shallow copy with a newUser", updatedUsers)

// **************************
// 3) Creating copies of data instead of changing existing data can help prevent unexpected changes. 
// In JavaScript, when you create an object or array and assign it to another variable, 
// you are not actually creating a new object—you are passing a reference.
// Take this example, in which an array is created and assigned to another variable:

const originalArray = ['one', 'two', 'three']
const secondArray = originalArray

// Removing the last item of the second Array will modify the first one:
secondArray.pop()
console.log("3) modify the originalArray", originalArray)

// Spread allows you to make a shallow copy of an array or object, 
// meaning that any top level properties will be cloned, 
// but nested objects will still be passed by reference. 
// For simple arrays or objects, a shallow copy may be all you need.

// If you write the same example code, but copy the array with spread, 
// and the original Array will no longer be modified:

// Create an Array
const originalArraySpread = ['one', 'two', 'three']
// Use spread to make a shallow copy
const secondArraySpread = [...originalArraySpread]

// Remove the last item of the second Array
secondArraySpread.pop()
console.log("3) does not modify the originalArray", originalArraySpread)

// **************************
// 4) Spread can also be used to convert a set, or any other iterable to an Array

const set = new Set()

set.add('octopus')
set.add('starfish')
set.add('whale')

const seaCreatures = [...set]
console.log('4) Spread on Set', seaCreatures)

// 5) This can also be useful for creating an array from a string
const string = 'hello'
const stringArray = [...string]

console.log('5) Spread on String', stringArray)

