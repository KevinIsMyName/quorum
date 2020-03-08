const submitButton = document.getElementById("submitButton");
let userName = document.getElementById("userName").value;
let emailAddr = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;
let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let age = parseInt(document.getElementById("age").value);

// Get gender
let genderButtons = document.getElementsByName("gender");
let gender = "";

// Get grad month
let graduation = document.getElementsByName("gradMonth");
let emerName = document.getElementById("emerName").value;
let emerPhone = document.getElementById("emerPhone").value;

// Get emergency contact relationship relationship
let emerContRelatButtons = document.getElementsByName("relationship");
let emerContRelat = "";

function getGender() {
  let genderFound = false;
  for (let i = 0; i < genderButtons.length; i++) {
    if (genderButtons[i].checked) {
      gender = genderButtons[i].value;
      genderFound = true;
      break;
    }
  }
  if (genderFound) {
    alert("Gender: " + gender);
  } else {
    alert("Error: No gender was selected");
  }
}

function getEmerContRelat() {
  let relatFound = false;
  for (let i = 0; i < emerContRelatButtons.length; i++) {
    if (emerContRelatButtons[i].checked) {
      emerContRelat = emerContRelatButtons[i].value;
      relatFound = true;
      break;
    }
  }
  if (relatFound) {
    alert("Emergency Contact Relationship: " + emerContRelat);
  } else {
    alert("Error: No relationship was selected");
  }
}

function isValidEmail() {

}

function isValidPhoneNum() {

}

function buildJSON() {
  let submissionData = {};
  alert("JSON build in progress!");
}


submitButton.addEventListener("click", buildJSON);



