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

    let output = document.getElementById("organizations");

    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        let data = JSON.parse(this.response);
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let eventName = data[i].eventName;
                let hostOrg = data[i].eventHostOrg;
                let loc = data[i].location;

                // extract date info
                let d = new Date(data[i].date);
                let monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                let month = monthNames[d.getMonth()];
                let date = d.getDate() + 1; // date values 1-12
                let year = d.getFullYear();

                let event = document.createElement("div");
                event.innerHTML = eventName + " hosted by " + hostOrg + " on " + month + ", " + date + ", " + year;
                console.log(event.innerHTML);
                output.append(document.createElement("br"));
                output.append(event);
            }
        } else {
            output.innerText = "Oops! Doesn't look like you've attended any events&#128546;";
        }
    });
    let queryStr = "/involve?userID=" + userID;
    xhr.open("GET", queryStr);
    xhr.send();
};