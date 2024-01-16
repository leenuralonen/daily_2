// Create a person/user object 
const person = {
  firstName: "Leenur",
  lastName: "Alonen",
};

// Create an array of numbers
const numbersArray = [1, 2, 3, 5, 6, 7];

// Function to compare two numbers and return the larger number
function compareNumbers(num1, num2) {
  // Check if num1 or num2 are not numbers, return an error if true
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "Both entity must be numbers.";
  }

  // Compare the two numbers and return the larger one
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Both numbers are equal.";
  }
}

// Function to return the user's full name 
function getFullName(user) {
  // Check if the user object has firstName and lastName properties
  if (user.firstName && user.lastName) {
    return `${user.firstName} ${user.lastName}`;
  } else {
    return "Invalid user object, missing firstName or lastName.";
  }
}

// Example usage of the functions
const num1 = 17;
const num2 = 17;

const largerNumber = compareNumbers(num1, num2);
console.log("Larger Number:", largerNumber);

const fullName = getFullName(person);
console.log("Full Name:", fullName);
console.log(numbersArray);