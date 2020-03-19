function checkin() {
    window.location.assign("checkin.html");
}
function involvement() {
    window.location.assign("involvement.html");
}
function editProfile() {
    window.location.assign("userProfile.html");
}
function newEvent() {
    window.location.assign("newEvent.html");
}
function editOrgProfile() {
    window.location.assign("orgProfile.html");
}

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