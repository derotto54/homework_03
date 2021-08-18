// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwArray = []
var setLower = ''
var setUpper = ''
var setNumber = ''
var setSpecial =''
var pwLength =''

// Write password to the #password input
function writePassword() {
  console.log(setLower)
  console.log(setUpper)
  console.log(setNumber)
  console.log(setSpecial)
  console.log(pwLength)
  console.log(JSON.stringify(pwArray,null," "))


  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  //Invalid response response
  function invalidEntry() {
   window.alert("Invalid response. Try again")
  }


// ask for pw length
pwLength = window.prompt("Enter number of characters from 8 to 128")
console.log(pwLength)
if (pwLength<8 || pwLength>128 || isNaN(pwLength)) {
  console.log("Length is out of bounds")
  invalidEntry()
  return
} else {
    console.log("Length is good")
}
  
//confirm to allow lower, upper, numbers, spChar
var validYesResponses = ["y", "Y", "yes", "Yes", "YEs", "YES", "yES", "yeS", "yEs"]
var validNoResponses = ["n", "N","no", "No", "NO", "nO"]
var askLower = window.prompt("Include lowercase letters?")
var askUpper = window.prompt("Include UPPERCASE letters?")
var askNumber = window.prompt("Include numbers?")
var askSpecial = window.prompt("Include special characters")


//check for valid user responses

function checkForValid(userResponse) {
    if (validYesResponses.indexOf(userResponse) != -1) {
      console.log("Yes: valid response")
      return true
  } else if (validNoResponses.indexOf(userResponse) != -1) {
      console.log("No: valid response")
      return false
  } else {
      invalidEntry()
      return
  }
}

// set variables for each password criteria to be used. 

setLower = checkForValid(askLower)
console.log("lower case: " + setLower)
setUpper = checkForValid(askUpper)
console.log("upper case: " + setUpper)
setNumber = checkForValid(askNumber)
console.log("numbers: " + setNumber)
setSpecial = checkForValid(askSpecial)
console.log("special characters: " + setSpecial)

//gen password with at least one character type selected in password
var lowerCases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z']
var nums = ['1','2','3','4','5','6','7','8','9']
var chars = ["!",'@','#',"$",'%','^','&','*','(',')','-','_','=','+','{','}','|','<','>','.','?','/','~']


function genPw(criteria, charArray, max, min ) {
 // if (criteria) {
    var numby = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(numby)
      pwArray.push(charArray[numby])
//console.log(JSON.stringify(pwArray,null," "))
 // }
}
  
//genPw(true, lowerCases, 26, 1)

for (var i = 0; i < pwLength; ) {
  if (setLower) {
    genPw(setLower, lowerCases, 25, 0)
    i++
  }
  if (setUpper) {
    genPw(setUpper, upperCases, 24, 0)
    i++
  } 
  if (setNumber) {
    genPw(setNumber, nums, 8, 0)
    i++
  }  
  if (setSpecial) { 
    genPw(setSpecial, chars, 22, 0)
    i++
  }
}
console.log(JSON.stringify(pwArray,null," "))

//set password to DOM
passwordText.innerText = (JSON.stringify(pwArray,null," "))

//passwordText.value = password;
setLower = ''
setUpper = ''
setNumber = ''
setSpecial =''
pwLength = ''
pwArray = ''
console.log(setLower, setUpper, setNumber, setSpecial, pwLength, JSON.stringify(pwArray,null," "))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
