function myFunction(a, b) {
  // Use toFixed to round to a specific number of decimal places if needed
  return parseFloat((a - b).toFixed(10)); //Rounds to 10 decimal places
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2.123456789, 5.987654321)); // Output will be rounded