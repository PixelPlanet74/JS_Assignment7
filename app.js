// Chapter 46, 48 (Events)

// Q no: 1
// function usrclick(){
//     alert("Welcome User")
// }

// Q no: 2
// function hide(){
//     var hideButton = document.getElementById("hideButton");
//     var hiddenElement = document.getElementById("hiddenElement");
//     hiddenElement.style.display = "none";
// }

// Q no: 4
// var scrollToTopLink = document.getElementById("scrollToTopLink");

// scrollToTopLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });

// Q no: 5
// var playSoundLink = document.getElementById("playSoundLink");
// var audio = document.getElementById("myAudio");
// playSoundLink.addEventListener("click", function(event) {
// event.preventDefault();
// audio.play();
// });

// Q no: 6
// function newWindow(){
//     window.open("https://www.google.com")
// }

// Q no: 7
// function usrclick(){
//     alert("Welcome User")
// }

// Q no: 9
// var playSoundLink = document.getElementById("playSoundLink");
// var audio = document.getElementById("myAudio");
// playSoundLink.addEventListener("click", function(event) {
// event.preventDefault();
// audio.play();
// });

// Q no: 12
// var openWindowLink = document.getElementById("openWindowLink");
// openWindowLink.addEventListener("click", function(event) {
//     event.preventDefault();
//     var mouseX = event.clientX || window.innerWidth / 2;
//     var mouseY = event.clientY || window.innerHeight / 2;
//     var windowWidth = Math.min(window.innerWidth - mouseX, 400);
//     var windowHeight = Math.min(window.innerHeight - mouseY, 400);
//     var newWindow = window.open("", "_blank", "width=" + windowWidth + ",height=" + windowHeight);
//     var closeButton = newWindow.document.createElement("button");
//     closeButton.textContent = "Close Window";
//     closeButton.addEventListener("click", function() {
//         newWindow.close();
//     });
//     newWindow.document.body.appendChild(closeButton);
// });



// Chapter 49, 50 (Reading and Setting field values)

// Q no: 1
// function greet(){
//     var userName = document.getElementById("usrName");
//     var usrName = userName.value;
//     console.log("Hi! " + usrName);
// }

// Q no: 2
// var getValueButton = document.getElementById("getValueButton");
// getValueButton.addEventListener("click", function() {
//     var checkbox = document.getElementById("myCheckbox");
//     var isChecked = checkbox.checked;
//     console.log("Checkbox is checked: " + isChecked);
// });

// Q no: 3
// var getValueButton = document.getElementById("getValueButton");
// getValueButton.addEventListener("click", function() {
//     var select = document.getElementById("mySelect");
//     var selectedValue = select.value;
//     console.log("Selected value: " + selectedValue);
// });

// Q no: 5
// var maritalStatusSelect = document.getElementById("maritalStatus");
// var statusField = document.getElementById("status");
// var submitButton = document.getElementById("submitButton");
// submitButton.addEventListener("click", function() {
//     var selectedStatus = maritalStatusSelect.value;
//    if (selectedStatus === "single") {
//         statusField.value = "available";
//     }
//     else {
//         statusField.value = "";
//     }
//     statusField.style.display = "block";
// });

// Q no: 6
// var myInput = document.getElementById("myInput");
// var fillButton = document.getElementById("fillButton");
// fillButton.addEventListener("click", function() {
//     var inputValue = myInput.value;
//     if (inputValue.trim() === "") {
//         myInput.value = "Default Value";
//     }
// });
