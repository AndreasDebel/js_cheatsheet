// Function Declaration
// Function declarations are hoisted, meaning they can be called before they are defined.
function startCar() {
    return "Car started!";
  }
  
  // Calling the function
  console.log(startCar()); // Output: Car started!
  


  // Function Expression
  // Function expressions are not hoisted, meaning they cannot be called before they are defined.
  const stopCar = function() {
    return "Car stopped!";
  };
  
  // Calling the function
  console.log(stopCar()); // Output: Car stopped!
  


  // Arrow Function
  // Arrow functions provide a shorter syntax for writing functions. They do not have their own 'this' value.
  const accelerateCar = () => {
    return "Car is accelerating!";
  };
  
  // Calling the function
  console.log(accelerateCar()); // Output: Car is accelerating!
  


  // Arrow Function with Implicit Return
  // If the function body contains only a single expression, you can omit the braces and the return statement.
  const brakeCar = () => "Car is braking!";
  
  // Calling the function
  console.log(brakeCar()); // Output: Car is braking!
  


  // Functions with Parameters
  // Functions can take parameters and return a value based on those parameters.
  function setCarColor(car, color) {
    car.color = color;
    return car;
  }
  
  // Example object
  let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Red"
  };
  
  // Calling the function with parameters
  console.log(setCarColor(myCar, "Blue")); // Output: { make: 'Toyota', model: 'Camry', year: 2020, color: 'Blue' }
  
  // Functions with Default Parameters
  // Default parameters allow you to initialize parameters with default values if no value is provided.
  function describeCar(car = { make: "Unknown", model: "Unknown", year: 0, color: "Unknown" }) {
    return `${car.year} ${car.color} ${car.make} ${car.model}`;
  }
  
  // Calling the function with and without parameters
  console.log(describeCar(myCar)); // Output: 2020 Blue Toyota Camry
  console.log(describeCar()); // Output: 0 Unknown Unknown Unknown
  


  // Immediately Invoked Function Expression (IIFE)
  // IIFE is a function that runs as soon as it is defined. It's often used to create a local scope.
  (function() {
    console.log("This car function runs immediately!");
  })(); // Output: This car function runs immediately!
  


  // Higher-Order Functions
  // Higher-order functions are functions that take other functions as arguments or return functions as their result.
  function withCar(car, action) {
    return action(car);
  }
  
  // Example of using a higher-order function
  console.log(withCar(myCar, car => `The car is a ${car.color} ${car.make} ${car.model}`)); 
  // Output: The car is a Blue Toyota Camry
  

  
  // Method Chaining in Functions
  // Method chaining is a technique where multiple methods are called on an object in a single statement.
  // This is done by returning the object itself (`this`) from each method.
  
  
  function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  
    this.paint = function(newColor) {
      this.color = newColor;
      return this; // Enable chaining
    };
  
    this.describe = function() {
      return `${this.year} ${this.color} ${this.make} ${this.model}`;
    };
  }
  
  // Creating a new Car object
  let chainedCar = new Car("Honda", "Civic", 2021, "Black");
  
  // Using method chaining
  console.log(chainedCar.paint("White").describe()); // Output: 2021 White Honda Civic
  