const Person = require('./person');
// const test = require('./test');

const person1 = new Person('sohil', 25);

console.log(person1.name); 
person1.name = 'tanuj';
console.log(person1.name);

console.log(person1.age);
person1.age = 30;
console.log(person1.age);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const person2= test('khan',21);

// console.log(person2.name);  //RangeError: Maximum call stack size exceeded
// person2.name = 'tanuj';
// console.log(person2.name);

// console.log(person2.age);
// person2.age = 30;
// console.log(person2.age);

//////////////////////////////////////////////////////////////////////////

// test.name = 'tanuj';
// console.log(test.name);

// person2.age = 30;
// console.log(test.age);