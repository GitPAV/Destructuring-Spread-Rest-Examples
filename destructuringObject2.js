const note = {
    title: 'My first note',
    author: {
        firstName: 'Sherlock',
        lastName: 'Holmes',
    },
    tags: ['personal', 'writing', 'investigations'],
}

const {
    title,
    date = new Date(),
    author: { firstName },
    tags: [personalTag, writingTag, investigationsTag],
} = note

// You can add new variable while destructuring
console.log(date)
console.log(investigationsTag)