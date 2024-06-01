(function(){

// Array of teachers
const teachers = ["Torill", "Thomas", "Mads", "Heine", "Susanne"];

// 1. for Loop
// The for loop repeats a block of code as long as a specified condition is true.
// It consists of three parts: initialization, condition, and increment/decrement.
for (let i = 0; i < teachers.length; i++) {
  console.log("for loop iteration:", teachers[i]);
}

// 2. while Loop
// The while loop repeats a block of code as long as a specified condition is true.
// The condition is evaluated before the block of code is executed.
let j = 0;
while (j < teachers.length) {
  console.log("while loop iteration:", teachers[j]);
  j++;
}

// 3. do...while Loop
// The do...while loop is similar to the while loop, but the block of code is executed at least once before the condition is evaluated.
let k = 0;
do {
  console.log("do...while loop iteration:", teachers[k]);
  k++;
} while (k < teachers.length);

// 4. for...in Loop
// The for...in loop iterates over the properties of an object (or the indexes of an array).
for (let index in teachers) {
  console.log("for...in loop - index:", index, "value:", teachers[index]);
}

// 5. for...of Loop
// The for...of loop iterates over the values of an iterable object (like an array, string, or set).
for (let teacher of teachers) {
  console.log("for...of loop value:", teacher);
}

// 6. Array.prototype.forEach
// The forEach method executes a provided function once for each array element.
// It takes three parameters: the current element, the current index, and the array itself.
teachers.forEach(function(teacher, index, array) {
  console.log("Array.prototype.forEach - index:", index, "value:", teacher, "array:", array);
});


})();