const submitButton = document.getElementById("submitButton");
let username = "";
let emailAddr = "";
let password = "";
let confirmPassword = "";
let firstName = "";
let lastName = "";
let age = "";
// Get gender
const genderButtons = document.getElementsByName("gender");
let gender = "";
// Get grad month
let graduation = "";
let major = "";
let emerName = "";
let emerPhoneNum = "";
// Get emergency contact relationship relationship
const emerContRelatButtons = document.getElementsByName("relationship");
let emerContRelat = "";


let submitData = {
    user: {},
    emerCont: {},
};

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
        console.log("Gender: " + gender);
    } else {
        console.log("Error: No gender was selected");
    }
    return genderFound;
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
        console.log("Emergency Contact Relationship: " + emerContRelat);
    } else {
        console.log("Error: No relationship was selected");
    }
    return relatFound;
}

function isValidAge(age) {
    if (age > 100 || age < 0) {
        console.log(age + " is not a valid age.");
        return false;
    }
    return true;
}

function isValidEmail(addr) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(addr)) {
        return re.test(addr);
    } else {
        console.log(addr + "is not a valid email.");
    }
}

function isValidPhoneNum(phoneNum) {
    let re = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    return re.test(phoneNum);
}

function isConsistantPass(password, confirmPassword) {
    if (password !== confirmPassword) {
        console.log("Passwords do not match.");
        return false;
    }
    return true;
}

function buildJSON() {
    // Get data
    username = document.getElementById("userName").value;
    emailAddr = document.getElementById("email").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    age = parseInt(document.getElementById("age").value);
    graduation = document.getElementsByName("gradMonth");
    major = document.getElementById("major").value;
    emerName = document.getElementById("emerName").value;
    emerPhoneNum = document.getElementById("emerPhone").value;

    let errors = false;
    console.log("JSON build in progress!");
    if (!isValidEmail(emailAddr) || !isValidAge(age) || !getGender() || !getEmerContRelat() || !isValidPhoneNum(emerPhoneNum) || !isConsistantPass(password, confirmPassword)) {
        errors = true;
        return;
    }
    submitData.user.username = username;
    submitData.user.email = emailAddr;
    submitData.user.firstName = firstName;
    submitData.user.lastName = lastName;
    submitData.user.age = age;
    submitData.user.gender = gender;
    submitData.user.graduation = graduation;
    submitData.user.major = major;
    submitData.emerCont.name = emerName;
    submitData.emerCont.phoneNum = emerPhoneNum;
    submitData.emerCont.relat = emerContRelat;

    submitData.error = errors;
    console.log(submitData);
}


submitButton.addEventListener("click", () => {
    buildJSON();

    // Send POST request
    // let xhr = new XMLHttpRequest;
    // xhr.addEventListener("load", function () {
    //
    // });
    // xhr.responseType = "json";
    // xhr.open("POST", JSON.parse(submitData));
    // xhr.send()
});