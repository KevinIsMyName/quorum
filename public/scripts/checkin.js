const checkBtn = document.getElementById("checkBtn");
var errormsg = document.getElementById("errorMsg");
let eventCode;

// Code from https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
let userID = getCookieValue("userID") ? getCookieValue("userID") : "notLoggedIn";

checkBtn.addEventListener("click", () => {
    eventCode = document.getElementById("eventCode").value;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        let data = this.response;
        if (data.error) {
            console.log("Error processing event code.");
            errormsg.innerHTML = "Not a valid event code. Code must be numeric";
            errormsg.style.color = "red";
            return -1;
        } else {
            console.log("Event code successfully processed.")
        }
    });
    xhr.responseType = "json";
    let queryStr = "checkedin?eventCode=" + eventCode;
    if (userID !== "notLoggedIn") {
        queryStr += "&userID=" + userID;
    }
    xhr.open("GET", queryStr);
    xhr.send();
});