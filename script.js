// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password based on user-selected criteria
function generatePassword() {
  // Prompt for password length
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid input! Password length must be a number between 8 and 128.");
    passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  }

  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Invalid input! At least one character type must be selected.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  // Define character pools for each type
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Initialize the password
  var password = "";

  // Build the character pool based on selected criteria
  var characterPool = "";
  if (includeLowercase) {
    characterPool += lowercaseChars;
    password += getRandomCharacter(lowercaseChars);
  }
  if (includeUppercase) {
    characterPool += uppercaseChars;
    password += getRandomCharacter(uppercaseChars);
  }
  if (includeNumeric) {
    characterPool += numericChars;
    password += getRandomCharacter(numericChars);
  }
  if (includeSpecial) {
    characterPool += specialChars;
    password += getRandomCharacter(specialChars);
  }

  // Generate the remaining characters of the password
  for (var i = password.length; i < passwordLength; i++) {
    password += getRandomCharacter(characterPool);
  }

  return password;
}

// Function to get a random character from a given string
function getRandomCharacter(str) {
  var randomIndex = Math.floor(Math.random() * str.length);
  return str.charAt(randomIndex);
}

