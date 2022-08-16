// program to create JavaScript object using instance of an object
const person = new Object ( { 
    name: 'Mohan',
    age: 20,
    hobbies: ['sports', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        biology: 90,
        science: 80
    }
});

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.biology);