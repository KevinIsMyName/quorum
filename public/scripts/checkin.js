const checkBtn = document.getElementById("checkBtn");
var errormsg = document.getElementById("errorMsg");
let eventCode;


checkBtn.addEventListener("click", () => {
    eventCode = document.getElementById("eventCode").value;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        let data = this.response;
        if (data.error) {
            console.log("Error processing event code.");
            errormsg.innerHTML = "Not a Valid Event Code. Please Try Again.";
            errormsg.style.color = "red";
        } else {
            console.log("Event code successfully processed.")
        }
    });
    xhr.responseType = "json";
    xhr.open("GET", "checkedin?eventCode=" + eventCode);
    xhr.send();
});