
function checkin() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.open("GET", "getroute?route=" + selected);
    xhr.send();
}

function involvement() {

}

function editProfile() {

}

function createEvent() {

}

function editOrgProfile() {

}