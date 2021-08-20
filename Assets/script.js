// Declare Vars
var generateBtn = document.querySelector("#generate");
var pwArray = []
var pwArrayShuffled = []
var setLower = ''
var setUpper = ''
var setNumber = ''
var setSpecial =''
var pwLength =''

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
  
  //Password character arrays
  var lowerCases = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var upperCases = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z']
  var nums = ['1','2','3','4','5','6','7','8','9']
  var chars = ["!",'@','#',"$",'%','^','&','*','(',')','-','_','=','+','{','}','|','<','>','.','?','/','~']

  //Invalid response response
  function invalidEntry() {
   window.alert("Invalid response. Try again")
  }


  // Get and validate password length
  pwLength = window.prompt("Enter number of characters from 8 to 128")
  console.log(pwLength)
  if (pwLength<8 || pwLength>128 || isNaN(pwLength)) {
    console.log("Length is out of bounds")
    invalidEntry()
    return
  } else {
      console.log("Length is good")
  }
  
  //confirm to allow lower, upper, numbers, special character
  var validYesResponses = ["y", "Y", "yes", "Yes", "YEs", "YES", "yES", "yeS", "yEs"]
  var validNoResponses = ["n", "N","no", "No", "NO", "nO"]
  var askLower = window.prompt("Include lowercase letters?")
  var askUpper = window.prompt("Include UPPERCASE letters?")
  var askNumber = window.prompt("Include numbers?")
  var askSpecial = window.prompt("Include special characters")


  //Check for valid user responses
  function checkForValid(userResponse) {
      if (validYesResponses.indexOf(userResponse) != -1) {
        return true
    } else if (validNoResponses.indexOf(userResponse) != -1) {
        return false
    } else {
        invalidEntry()
        return
    }
  }

  // Set variables for each password criteria to be used. 
  setLower = checkForValid(askLower)
  console.log("lower case: " + setLower)
  setUpper = checkForValid(askUpper)
  console.log("upper case: " + setUpper)
  setNumber = checkForValid(askNumber)
  console.log("numbers: " + setNumber)
  setSpecial = checkForValid(askSpecial)
  console.log("special characters: " + setSpecial)



  //Generate password characters
  function genPw(charArray, max, min ) {
      var numby = Math.floor(Math.random() * (max - min + 1) + min)
        pwArray.push(charArray[numby])
  }
  
  //Add requested characters
  for (var i = 0; i < pwLength; ) {
    if (setLower) {
      genPw(lowerCases, 25, 0)
      i++
    }
    if (setUpper) {
      genPw(upperCases, 24, 0)
      i++
    } 
    if (setNumber) {
      genPw(nums, 8, 0)
      i++
    }  
    if (setSpecial) { 
      genPw(chars, 22, 0)
      i++
    } else {
      i++
    }
  }

  //Shuffle randomized characters
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
  pwArrayShuffled = shuffle(pwArray)

  //set password to DOM
  passwordText.innerText = pwArrayShuffled.join("")

  //Reset variables after password creation
  setLower = ''
  setUpper = ''
  setNumber = ''
  setSpecial =''
  pwLength = ''
  pwArray = []
  pwArrayShuffled = []
//Use the line below to verify variables are cleared out after generating a password
//console.log(setLower, setUpper, setNumber, setSpecial, pwLength, JSON.stringify(pwArray,null," "))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
