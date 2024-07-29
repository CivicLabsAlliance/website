document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const organization = document.getElementById('organization').value;
        const message = document.getElementById('message').value;

        const data = {
            name: name,
            email: email,
            organization: organization,
            message: message
        };

        const url = 'https://script.google.com/macros/s/AKfycbzdBH8eBNq6SgJFDbP-2J__r9ESAv1cWudWt50dMVSf9vgWiBgCR1bjpC5ckxPUBMpo3Q/exec';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(data => {
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    });
});
