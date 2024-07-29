document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const organization = document.getElementById('organization').value;
        const message = document.getElementById('message').value;

        // Add debug logging to assist tracking the problem
        console.log('Form Data:', { name, email, organization, message });

        const data = {
            name: name,
            email: email,
            organization: organization,
            message: message
        };

        const url = 'https://script.google.com/macros/s/AKfycbyNMEMTwgs7-S2z-sJupbFw369mLAdjEDokF2uze8VYt2jJH3MTiqq73mor4hA9qzQoHA/exec';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log('Fetch Response:', response);
            return response.text();
        })
        .then(data => {
            console.log('Response Data:', data);
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    });
});
