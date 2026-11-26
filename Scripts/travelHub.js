
    <!-- JAVASCRIPT FORM VALIDATION -->


        // Get the form element
        const contactForm = document.getElementById("contactForm");

        // Get the success message
        const successMessage = document.getElementById("successMessage");


        // Form validation
        contactForm.addEventListener("submit", function(event) {

            // Prevent the form from submitting automatically
            event.preventDefault();

            // Check if all required fields are valid
            if (!contactForm.checkValidity()) {

                event.stopPropagation();

                contactForm.classList.add("was-validated");

                return;

            }

            // Show success message
            successMessage.style.display = "block";

            // Scroll to the success message
            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            // Reset form fields
            contactForm.reset();

            // Remove validation styles
            contactForm.classList.remove("was-validated");

        });


        // Clear success message when the form is reset
        contactForm.addEventListener("reset", function() {

            successMessage.style.display = "none";

            contactForm.classList.remove("was-validated");

        });
