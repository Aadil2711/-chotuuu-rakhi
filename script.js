console.log("Script loaded");

function goToRakhi() {
    window.location.href = "rakhi.html";
}

function goToBhaidooj() {
    window.location.href = "bhaidooj.html";
}

function goToBirthday() {
    window.location.href = "birthday.html";
}

function goToIdiot() {
    window.location.href = "idiot.html";
}

function goToFather() {
    window.location.href = "father.html";
}

function goToGallery() {
    window.location.href = "gallery.html";
}

function goToEnding() {
    window.location.href = "ending.html";
}

function openLetter() {

    document.getElementById("closedLetter").style.display = "none";

    document.getElementById("openedLetter").style.display = "block";
}
function wrongAnswer() {

    document.getElementById("message").innerHTML =
        "❌ Wrong answer.<br><br>It was the absolute bestest birthday ever. 😤❤️";

    document.getElementById("continueButton").style.display = "inline-block";
}

function correctAnswer() {

    document.getElementById("message").innerHTML =
        "Correct answer. 😎❤️";

    document.getElementById("continueButton").style.display = "inline-block";
}