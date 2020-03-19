// Show the involvements that the student logged in is involved with

// Code from https://stackoverflow.com/questions/5639346/what-is-the-shortest-function-for-reading-a-cookie-by-name-in-javascript
function getCookieValue(a) {
    var b = decodeURIComponent(document.cookie).match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
window.onload = (event) => {
    let userID = getCookieValue("userID");
    if (userID === "") {
        window.location.assign("/");
    }
    console.log("User: " + userID);

    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        // load the proper content on this webpage
    });
    let queryStr = "/involve?userID=" + userID;
    xhr.open("GET", queryStr);
    xhr.send();
};