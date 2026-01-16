console.log('--Task 1--')

function sum(a, b, c) {
    return a + b + c
}

const numbers = [1, 50, 99]
const result = sum(...numbers);
console.log(result);

console.log('\n-- Task 2 --');

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const megedArray = [...array1, ...array2];
console.log('Merged array:', mergedArray);

console.log('\n-- Task 3 --')

const colors = ['red', 'green', 'blue'];
const extendedColors = ['yellow', ...colors, 'purple'];
console.log('Extended colors:', extendedColors);

console.log('\n-- Task 4 --');

const person = {
    name: 'John',
    age: 30
};

const newPerson = {...person};
newPerson.name = 'Jane';
newPerson.gender = 'female';

console.log('Original person:', person);
console.log('New person:', newPerson);

console.log('\n-- Task 5 --');

const object1 = { a: 1, b: 2};
const object2 = {b: 3, c: 4};
const combinedObject = {...object1, ...object2};
console.log('Combined object', combinedObject);