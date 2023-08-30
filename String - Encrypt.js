// Define the encrypt function that takes a string and a key as parameters
function encrypt(str, key) {

  // Calculate the new key based on the original key
  var newkey = key % 26;

  // Create an empty array to hold the encrypted characters
  var charArray = [];

  // Loop through each character in the string
  for (var i = 0; i < str.length; i++){

    // Get the ASCII code of the current character and add the new key
    var letterPosition = str.charCodeAt(i) + newkey; 

    // If the resulting ASCII code is less than or equal to 122 (the ASCII code for 'z')
    if (letterPosition <= 122){

      // Convert the ASCII code to a character and add it to the array
      charArray.push(String.fromCharCode(letterPosition));

    } else {

      // If the resulting ASCII code is greater than 122, wrap around to 'a' (the ASCII code for 'a')
      // Note that we use 96 instead of 97 because we want to start from the ASCII code for 'a' rather than 'b'
      charArray.push(String.fromCharCode(96 + letterPosition % 122));

    }

  }

  // Join the array of characters into a string and return it
  return charArray.join('');

}

// Call the encrypt function with the string "hai" and key 2, and print the result to the console
console.log(encrypt("hai", 2));