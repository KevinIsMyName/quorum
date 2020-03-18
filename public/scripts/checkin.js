const checkBtn = document.getElementById("checkBtn");
let eventCode;


checkBtn.addEventListener("click", () => {
    eventCode = document.getElementById("eventCode").value;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        let data = this.response;
        if (data.error) {
            console.log("Error processing event code.");
        } else {
            console.log("Event code successfully processed.")
        }
    });
    xhr.responseType = "json";
    xhr.open("GET", "checkedin?eventCode=" + eventCode);
    xhr.send();
});