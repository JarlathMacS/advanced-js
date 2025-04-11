/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */


// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);


// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
}
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
let [,,maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);
let languages2 = {
    first: 'english',
    second: 'french',
    third: 'german',
    fourth: 'japanese'
}
let {first, third} = languages2;
console.log(first, third);
// console.log(typeof(first));


// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [fav, fav2, ...rest] = fruits;
console.log(fav);
console.log(fav2);
console.log(rest);

let favFood = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
}

let {brian, anna, ...rest2} = favFood;
console.log(brian);
console.log(anna);
console.log(rest2);