const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
    author: {
        firstName: 'Sherlock',
        lastName: 'Holmes',
    },
}

const {
    id: newNameId, 
    title, 
    date, 
    author: 
        {
            firstName: newFirstName, 
            lastName
        }
} = note

// Not nested properties 
console.log(newNameId)
console.log(title)
console.log(date)

// Nested properties, though first&lastName are accessible, auhtor as an object is not
// you have to assign it in the new const declaration in order to access it
console.log(newFirstName)
console.log(lastName)

// ****************************************************

// Destructuring can be used to access the object properties of primitive values. 
// For example, String is a global object for strings, and has a length property
const {length} = 'A string'
console.log(length)
// "A string" was implicitly converted into an object here to retrieve the length property.
