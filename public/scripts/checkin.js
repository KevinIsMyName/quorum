const checkBtn = document.getElementById("checkBtn");
var errormsg = document.getElementById("errorMsg");
let eventCode;

// Code from https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
function getCookieValue(a) {
    var b = decodeURIComponent(document.cookie).match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
window.onload = (event) => {
    userID = getCookieValue("userID");
    if (userID === "") {
        window.location.assign("/");
    }
    console.log("User: " + userID);
    // do user authentication, load the proper content on this webpage
};

checkBtn.addEventListener("click", () => {
    eventCode = document.getElementById("eventCode").value;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        let resp = JSON.parse(this.response);
        let eventName = resp.eventName;
        if (resp.error) {
            console.log("Error processing event code.");
            errormsg.innerHTML = "Not a valid event code.";
            errormsg.style.color = "red";
            return -1;
        } else {
            errormsg.innerHTML = "Successfully checked into " + eventName +"!";
            errormsg.style.color = "red";
        }
    });
    let queryStr = "checkedin?eventCode=" + eventCode;
    if (userID !== "notLoggedIn") {
        queryStr += "&userID=" + userID;
    }
    xhr.open("GET", queryStr);
    xhr.send();
});