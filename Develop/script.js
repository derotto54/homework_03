// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
//Invalid response response
function invalidEntry() {
  window.alert("Please select Yes or No. Try again")
}


  // ask for pw length
 
  var pwLength = window.prompt("Enter number of charchaters from 8 to 128")
  
  console.log(pwLength)

  if (pwLength<8 || pwLength>128 || isNaN(pwLength)) {
    console.log("Length is out of bounds")
    window.alert("Please select a valid number from 8 to 128")
    return
  } else {
      console.log("Length is good")
  }
  
//confirm to allow lower, upper, numbers, spChar
var validYesResponses = ["y", "Y", "yes", "Yes", "YEs", "YES", "yES", "yeS", "yEs"]
var validNoResponses = ["n", "N","no", "No", "NO", "nO"]
var yesLower = window.prompt("Include lowercased letters?")


    if (validYesResponses.indexOf(yesLower) != -1) {
      console.log("Yes: valid response")
  } else if (validNoResponses.indexOf(yesLower) != -1) {
      console.log("No: valid response")
  } else {
      invalidEntry()
      return
  }



  //gen passwordAt least one characher type selected in password


  





  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
