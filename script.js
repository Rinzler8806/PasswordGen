var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ":", ";", "'", ",", "<", ".", ">", "/", "?", "`", "~"]
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var number = Math.floor(Math.random() * 10);

var randomLetter = letters[Math.floor(Math.random() * letters.length)]

var randomCharacter = specialChar[Math.floor(Math.random() * specialChar.length)]

console.log(randomLetter)
console.log(randomCharacter)
console.log(number)

function generatePassword() {
  var passwordLength = parseInt(prompt("Please create your password length between 8-128 characters long"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("That is not an option. Please choose a password length between 8-128 characters.");
    return;
  }
  var addNum = confirm("Do you want to add numbers?");
  var addSpecialChar = confirm("Do you want special characters?")
  var addLower = confirm("Do you want to add lowercase letters?")
  var addUpper = confirm("Do you want to add uppercase letters?")
  if (addNum === false && addSpecialChar === false && addLower === false && addUpper === false) {
    alert("You have not chosen any of the given options. Please try again.")
    return;
  }

  var charArray = [];
  var charResult = []
  if (addNum === true) {
    charArray = charArray.concat(numberArray)
  }
  if (addSpecialChar === true) {
    charArray = charArray.concat(specialChar)
  }
  if (addLower === true) {
    charArray = charArray.concat(lowercaseletters)
  }
  if (addUpper === true) {
    charArray = charArray.concat(uppercaseletters)
  }

  for (var i = 0; i < passwordLength; i++) {
    charResult.push(charArray[Math.floor(Math.random() * charArray.length)])
  }


  return charResult.join("");
}