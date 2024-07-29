document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const organization = document.getElementById('organization').value;
        const message = document.getElementById('message').value;

        console.log('Form Data:', { name, email, organization, message });

        const data = {
            name: name,
            email: email,
            organization: organization,
            message: message
        };

        const url = 'https://script.google.com/macros/s/AKfycbwjrDaH5Frcd8oyte7Cp265iuy27fO3cSuW3tf-Tkee0_5CU9PLEZxOd8CxyRYnlHoMpw/exec';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log('Fetch Response:', response);
            return response.json();
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
