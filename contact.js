// Retrieve the form element
var contactForm = document.getElementById("contactForm");

// Add submit event listener to the form
contactForm.addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Retrieve form inputs
    var name = contactForm.elements["name"].value;
    var email = contactForm.elements["email"].value;
    var message = contactForm.elements["message"].value;

    // Log form data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // You can send the form data to a server using AJAX or any other method here
});

var sidenav = document.querySelector(".slide-navbar");

function showNavbar(){
    sidenav.style.left="0"
}

function closeNavbar(){
    sidenav.style.left="-60%"
}
