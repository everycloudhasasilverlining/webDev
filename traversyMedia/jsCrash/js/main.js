// let
// const


// String, number, boolean, null, undefined, symbol

// const name = 'John';
// const age = 30;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof rating)
// console.log("My Name is " + name + " and I am " + age)
// console.log(`My name is ${name} and I am ${age} years old`)

// const s = 'Hello World'
// console.log(s.split(' '))



// Arrays

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers)

// const fruits = ['apples', 'oranges', 'pears', null, 10]
// fruits[3] = 'X'
// fruits.push('mango')
// fruits.unshift('melon')

// fruits.pop('mango')
// fruits.shift('melon')

// console.log(fruits.indexOf('oranges'))



const person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 30,
    hobbies : ['music', 'movies', 'sports'],
    address : {
        street : 'sss',
        city : 'Boston', 
        state : 'MA'
    }
}

console.log(person.hobbies[1])
const {firstName, lastName, address : { city }} = person;
console.log(firstName)
console.log(city)

person.email = 'john@google.com'
console.log(person)

const todos = [
    {
        id : 1,
        text : 'Take out trash',
        isCompleted : true
    },
    {
        id : 2,
        text : 'Meeting with boss',
        isCompleted : false
    },
    {
        id : 3,
        text : 'Meet dentist',
        isCompleted : false
    }
]

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)


// for (let i=0; i<10; i++) {
//     console.log(`for loop number ${i}`)
// }

// let i = 0;
// while (i<10) {
//     console.log(i);
//     i ++;
// }


// for (let i=0; i<todos.length; i++) {
//     console.log(todos[i].text)
// }


// for (let todo of todos) {
//     console.log(todo)
// }

// foreach, map, filter 

const todoText = todos.map(function(todo){
    return todo.text
}
)

const x = 12;

const color = x>10 ? 'red' : 'blue'
console.log(color)

switch(color) {
    case 'red' :
        console.log('color is red')
        break;
    case 'blue' : 
        console.log('color is blue')
        break;
    default:
        console.log('color os not red or blue')
        break;
}


const addNums = (num1=1, num2=2) => {
    console.log(num1 + num2)
}

addNums(5,6)
todos.forEach((todo) => console.log(todo.text));


// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName
//     this.dob = dob;
// }







class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getBirthYear() {
        return this.age + 1
    }    

}

const person1 = new Person('John', 'Doe', 31);
const person2 = new Person('Mary', 'Smith', 36);

console.log(person1)
console.log(person2.getBirthYear())








