let username = "";
let password = "";
let login = document.getElementById("submit");

function getCredentials() {
    username = document.getElementById("username").value;
    password = document.getElementById("username").value;
    credentials = {
        user: username,
        pass: password,
    };
    return credentials;
}

login.addEventListener("click", () => {
    let submitData = getCredentials();

    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
        console.log("Call back received: " + this.response);
        // TODO: do stuff to carry credentials around
    });
    xhr.open("POST", "/loggedin");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(submitData));
});


