// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  // Adding random lowercase, uppecase, number, and special character functions
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function getRandomCharacter() {
    const symbols = '!@#$%^&(*/)?[.~]';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}

// setting DOM elements
const randomFunct = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomCharacter
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
