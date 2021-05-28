const date = ['1970', '12', '01']

// Same as object destructuring but based on Array Index not Object property
const [year, month, day] = date

// To skip an index just leave it blank,
// if you don't leave it blank the const day will have the month value (because index[1] == month)
// const [year, , day] = date

console.log(`${year} : ${month} : ${day}`)

// *******************************************************

// Same syntax with nested Array
const nestedArray = [1, 2, [3, 4], 5]

const [one, two, [three, four], five] = nestedArray
console.log(one, two, three, four, five)