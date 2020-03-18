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
        let resp = JSON.parse(this.response);
        if (resp.error) {
            usernameF.value = "";
            passwordF.value = "";
            output.innerText = "Invalid email or password.";
        } else {
            let userID = resp.userID;
            output.innerText = "Logging in...";
            console.log("Received unique user ID from server.");
            // TODO: redirect the user to another html page, and store the userID somewhere?
            var d = new Date();
            d.setTime(d.getTime() + (24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "userID=" + encodeURIComponent(userID) + + ";" + expires + ": path=/";
            window.location.assign("dashboard.html");
        }
    });
    xhr.open("POST", "/loggedin");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(submitData));
});


