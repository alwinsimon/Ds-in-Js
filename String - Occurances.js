// Define a function that takes a string as input and returns a modified string
function newString(str) {
  // Initialize variables to keep track of letter count and current letter
  let letterCount = 0;
  let letterString = str.charAt(0);
  
  // Initialize an empty string to store the result
  let result = '';

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // If the current character is the same as the current letter, increase the letter count
    if (str.charAt(i) === letterString) {
      letterCount++;
    } else {
      // If the current character is different from the current letter, add the letter count and current letter to the result
      result = result + letterCount + letterString;
      // Update the current letter and reset the letter count to 1
      letterString = str.charAt(i);
      letterCount = 1;
    }
  }
  // Add the final letter count and letter to the result
  result = result + letterCount + letterString;

  // Return the modified string
  return result;
}

// Call the newString function with an example input and print the result to the console
const value = "aaaaaaaaaaaaasssssssssssssssddddddddwwwwwwwwww";
console.log(newString(value));
