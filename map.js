  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */


// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];

for (let num of nums) {
    results.push(num * 2);
}

console.log(results);


// Using map()
const times2 = function (num) {
    return num * 2;
}

const resultTimes2 = nums.map(times2);
// console.log(typeof(resultTimes2));
console.log(resultTimes2);


// Simplified w/ map()
const resultTimes22 = nums.map(function (num) {
    return num * 2;
});
console.log(resultTimes22);


// Simplfied w/ map() + arrow function
const resultTimes23 = nums.map(num => num * 2);
console.log(resultTimes23);


// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];
  
  const studentsWithIds = students.map(student => [student.name, student.id]);
  console.log(studentsWithIds);
  
  const studentsWithIds2 = students.map(student => student);
//   const studentsWithIds2 = students.map(student => Object.entries(student));

  console.log(studentsWithIds2);