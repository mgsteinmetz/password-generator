// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// generatePassword function
function generatePassword() {
  let password = "";
  const randomizedFuncs = [];
  let passLength = prompt("How long do you want your password?");
  let useLower = prompt("Do you want to use lowercase?");
  let useUpper = prompt("Do you want to use uppercase?");
  let useNumber = prompt("Do you want to use numbers?");
  let useCharacter = prompt("Do you want to use special characters?");
  
  if(useLower === "yes") {
    randomizedFuncs.push(getRandomLower);
  } 
  if(useUpper === "yes") {
    randomizedFuncs.push(getRandomUpper);
  } 
  if(useNumber === "yes") {
    randomizedFuncs.push(getRandomNumber);
  } 
  if(useCharacter === "yes") {
    randomizedFuncs.push(getRandomCharacter);
  } 
  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * randomizedFuncs.length)
    password += randomizedFuncs[randomIndex]();
  }
 return password;
}

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
  const symbols = "!@#$%^&(*/)?[.~]";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);