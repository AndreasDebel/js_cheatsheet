// Array of teachers
const teachers = ["Torill", "Thomas", "Mads", "Heine", "Susanne"];

// Accessing the first element
console.log("First teacher:", teachers[0]); // "Torill"

// Accessing the third element
console.log("Third teacher:", teachers[2]); // "Mads"



// Array of teacher objects
const teachersArrayOfObjects = [
    { name: "Torill", subject: "Dataforståelse" },
    { name: "Thomas", subject: "Webteknologi" },
    { name: "Mads", subject: "Digital Kultur" },
    { name: "Heine", subject: "Projektstyring" },
    { name: "Susanne", subject: "21st Century Skills" }
  ];
  
  // Accessing the first object's name
  console.log("First teacher's name:", teachersArrayOfObjects[0].name); // "Torill"
  
  // Accessing the second object's subject
  console.log("Second teacher's subject:", teachersArrayOfObjects[1].subject); // "Webteknologi"



  // Array of arrays [name, subject, average student attendance]
const teachersArrays = [
    ["Torill", "Dataforståelse", 27],
    ["Thomas", "Webteknologi", 29],
    ["Mads", "Digital Kultur", 23],
    ["Heine", "Projektstyring", 7],
    ["Susanne", "21st Century Skills", 10]
  ];
  
  // Accessing the first teacher's name
  console.log("First teacher's name:", teachersArrays[0][0]); // "Torill"
  
  // Accessing the third teacher's subject
  console.log("Third teacher's subject:", teachersArrays[2][1]); // "Digital Kultur"




// 1. Array.prototype.push
// The push method adds one or more elements to the end of an array and returns the new length of the array.
teachers.push("John");
console.log("Array after push:", teachers); // ["Torill", "Thomas", "Mads", "Heine", "Susanne", "John"]




// 2. Array.prototype.pop
// The pop method removes the last element from an array and returns that element.
const lastTeacher = teachers.pop();
console.log("Popped element:", lastTeacher); // "John"
console.log("Array after pop:", teachers); // ["Torill", "Thomas", "Mads", "Heine", "Susanne"]




// 3. Array.prototype.shift
// The shift method removes the first element from an array and returns that element.
const firstTeacher = teachers.shift();
console.log("Shifted element:", firstTeacher); // "Torill"
console.log("Array after shift:", teachers); // ["Thomas", "Mads", "Heine", "Susanne"]




// 4. Array.prototype.unshift
// The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
teachers.unshift("Anna");
console.log("Array after unshift:", teachers); // ["Anna", "Thomas", "Mads", "Heine", "Susanne"]




// 5. Array.prototype.map
// The map method creates a new array with the results of calling a provided function on every element in the calling array.
// Here, it is conventional to call the singular noun in the function (e.g. teacher compared to teachers).
const uppercasedTeachers = teachers.map(function(teacher) {
  return teacher.toUpperCase();
});
console.log("uppercasedTeachers after map:", uppercasedTeachers); // ["ANNA", "THOMAS", "MADS", "HEINE", "SUSANNE"]




// 6. Array.prototype.filter
// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// The filter method that is meant for arrays is combined with the string method that is meant for string.
// Other string methods include .trim(), .endsWith(), .includes()
const filteredTeachers = teachers.filter(function(teacher) {
  return teacher.startsWith("T");
});
console.log("Array after filter:", filteredTeachers); // ["Thomas"]




// 7. Array.prototype.reduce
// The reduce method applies a function against an accumulator and each element in the array to reduce it to a single value.
const concatenatedTeachers = teachers.reduce(function(accumulator, teacher) {
  return accumulator + ", " + teacher;
});
console.log("Array (turned into string) after reduce:", concatenatedTeachers); // "Anna, Thomas, Mads, Heine, Susanne"




// 8. Array.prototype.find
// The find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
const foundTeacher = teachers.find(function(teacher) {
  return teacher === "Heine";
});
console.log("Found element:", foundTeacher); // "Heine"




// 9. Array.prototype.findIndex
// The findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
const foundIndex = teachers.findIndex(function(teacher) {
  return teacher === "Heine";
});
console.log("Found index:", foundIndex); // 3




// 10. Array.prototype.includes
// The includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const includesTeacher = teachers.includes("Susanne");
console.log("Includes 'Susanne':", includesTeacher); // true

  



//11. Array.prototype.sort  

// Sort in alphabetical order
console.log("Array before sort: ", teachers);
teachers.sort();
console.log("Array after sort:", teachers); // ["Anna", "Heine", "Mads", "Susanne", "Thomas"]

// Sort in reverse alphabetical order
teachers.sort().reverse();
console.log("Array after reverse sort:", teachers); // ["Thomas", "Susanne", "Mads", "Heine", "Anna"]

// sorts funktionen er underlig på den måde, at den ændrer arrayet retrospektivt. 
// Så selvom du logger ascending først og DERNÆST laver det descending, så vil du i begge logs se den sorteret descending.
// sorts by student attendence going up
let sortedTeachersAscending = teachersArrays.sort( (a, b) => {
    return (a[2])-(b[2]);
});
console.log("teachers ascending", sortedTeachersAscending);

//sorts by student attendence going down
let sortedTeachersDescending = teachersArrays.sort( (a, b) => {
    return b[2]-a[2];
});
console.log("teachers descending", sortedTeachersDescending)


