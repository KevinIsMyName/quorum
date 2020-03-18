let usernameF = document.getElementById("username");
let passwordF = document.getElementById("password");
let login = document.getElementById("submit");
let output = document.getElementById("output");

function getCredentials() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    return {
        user: username,
        pass: password,
    };
}

login.addEventListener("click", () => {
    let submitData = getCredentials();

    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        console.log("Call back received: " + this.response);
        if (this.response.error) {
            usernameF.value = "";
            passwordF.value = "";
            output.innerText = "Invalid email or password.";
        } else {
            output.innerText = "Logging in...";
        }
    });
    xhr.open("POST", "/loggedin");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(submitData));
});


