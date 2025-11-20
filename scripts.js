/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event){
        const email = emailInput.ariaValueMax.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red";
        } else {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.style.color = "white";
            form.reset();
        }
    })
})