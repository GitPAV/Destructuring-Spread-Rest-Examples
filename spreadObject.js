// 1) Create an object and a shallow copy with 
// Just like with arrays, nested objects will still be passed by reference.
const originalObject = { enabled: true, darkMode: false }
const secondObject = { ...originalObject }

console.log('1) Shallow copy', secondObject)

// 2) Adding or modifying properties on an existing object in an immutable fashion is simplified 
// with spread. In this example, the isLoggedIn property is added to the user object:
const user = {
    id: 3,
    name: 'Ron',
}

const updatedUser = { ...user, isLoggedIn: true }
console.log("2) Adding properties", updatedUser)

// 3) One important thing to note with updating objects via spread is that any nested object 
// will have to be spread as well. 
// If you tried to add a new item to organization, it would overwrite the existing fields:
const userNested = {
    id: 3,
    name: 'Ron',
    organization: {
        name: 'Parks & Recreation',
        city: 'Pawnee',
    },
}
const updatedUserNested = { ...userNested, organization: { position: 'Director' } }
console.log("3) Adding properties to nested", updatedUserNested)

// 4) If mutability is not an issue, the field could be updated directly:
// userNested.organization.position = 'Director'
// But since we are seeking an immutable solution, 
// we can spread the inner object to retain the existing properties:
const updatedUserNestedSpread = {
    ...userNested,
    organization: {
        ...userNested.organization,
        position: 'Director',
    },
}

console.log("3) Adding properties to nested with spread", updatedUserNestedSpread)

