// JavaScript code to manage contacts
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactsContainer = document.getElementById('contacts');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form input values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // Create new contact element
        const contactElement = document.createElement('div');
        contactElement.classList.add('contact');
        contactElement.innerHTML = `
            <h3>${name}</h3>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
        `;

        // Add contact to contacts container
        contactsContainer.appendChild(contactElement);

        // Reset form
        contactForm.reset();
    });
});