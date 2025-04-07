/**
 * To run this file in Gitpod, use the
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNums(a, b) {
//     // code block
//     return a + b;
// }

// let sum = addTwoNums(3, 5);
// console.log(sum);

// Arrow Function With Parameters

const addTwoNums = (a, b) => {
    // code block
    return a + b;
}

let sum = addTwoNums(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

// const addTwoNums2 = (a, b) => (a + b); also valid
const addTwoNums2 = (a, b) => a + b;

let sum2 = addTwoNums2(4, 6);
console.log(sum2);
// Implicit Returns

const saySummit = (msg) => console.log(msg);

saySummit('Sup');

const sayHowdy = () => console.log('Howdy');

sayHowdy();
// Returning Multiple Lines

const multiLine = () => (
    `<p>
    This is a paragraph.
    </p>`
)

console.log(multiLine());
