// Scroll to contact form
document.getElementById('scrollToContact').addEventListener('click', function() {
  document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        // Gather form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const organization = document.getElementById("organization").value;
        const message = document.getElementById("message").value;

        // Gather Turnstile response
        const turnstileResponse = document.querySelector('.cf-turnstile input[name="cf-turnstile-response"]').value;

        // Create payload
        const payload = {
            name: name,
            email: email,
            company: organization,
            message: message,
            "cf-turnstile-response": turnstileResponse
        };

        try {
            // Send POST request to Cloudflare worker
            const response = await fetch("https://contact-forms.civiclabs.us/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            });

            if (response.status === 200) {
                // Show success message
                document.querySelector(".contact").innerHTML = "<p>Thanks for reaching out, we will be in touch shortly.</p>";
            } else {
                // Show error message
                document.querySelector(".contact").innerHTML = "<p>There was an issue with your submission. Please try again later.</p>";
            }
        } catch (error) {
            console.error("Error:", error);
            // Show error message
            document.querySelector(".contact").innerHTML = "<p>There was an issue with your submission. Please try again later.</p>";
        }
    });
});
