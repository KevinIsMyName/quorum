// Show the involvements that the student logged in is involved with

// Code from https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
let userID = getCookieValue("userID") ? getCookieValue("userID") : "notLoggedIn";

window.onload = (event) => {
    userID = getCookieValue("userID");
    if (userID === "") {
        window.location.assign("/");
    }
    console.log("User: " + userID);
};