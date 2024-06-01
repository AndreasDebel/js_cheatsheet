// Define an object named pet
let pet = {
    animal: "Dog",
    breed: "Golden Retriever",
    name: "Mads",
    age: 35
  };
  
  // Accessing object properties using dot notation
  console.log("Animal:", pet.animal); // Output: Animal: Dog
  console.log("Breed:", pet.breed);   // Output: Breed: Golden Retriever
  console.log("Name:", pet.name);     // Output: Name: Mads
  console.log("Age:", pet.age);       // Output: Age: 35
  


  
  // Adding a method to the pet object
  pet.speak = function() {
    return "Woof!";
  };
  


  // Calling the method
  console.log("Speak:", pet.speak()); // Output: Speak: Woof!
  


  // Difference between methods and properties
  // Properties are values associated with an object. Methods are functions associated with an object.
  console.log("Property - age:", pet.age); // Property example
  console.log("Method - speak:", pet.speak()); // Method example
  


  // Method chaining
  // Method chaining is the practice of calling multiple methods on an object in a single statement.
  pet.setAge = function(newAge) {
    this.age = newAge;
    return this; // Return the object to enable chaining
  };
  


  pet.describe = function() {
    return `${this.name} is a ${this.age}-year-old ${this.breed}`;
  };
  


  // Using method chaining to set the age and then describe the pet
  console.log(pet.setAge(5).describe()); // Output: Mads is a 5-year-old Golden Retriever
  

