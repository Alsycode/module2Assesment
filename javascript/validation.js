document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');
    const fullName = document.getElementById('fullName');

    // Real-time validation
    const validateField = (field, messageElement, validationFn) => {
        field.addEventListener('input', () => {
            if (validationFn(field)) {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            } else {
                field.classList.remove('is-valid');
                field.classList.add('is-invalid');
            }
        });
    };

    // Validate name (2-50 characters, letters only)
    validateField(fullName, fullName.nextElementSibling, (field) => {
        const regex = /^[A-Za-z\s]{2,50}$/;
        return regex.test(field.value);
    });

    // Validate email
    validateField(email, email.nextElementSibling, (field) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(field.value);
    });

    // Validate password (at least 8 chars, number, uppercase, lowercase)
    validateField(password, password.nextElementSibling, (field) => {
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return regex.test(field.value);
    });

    // Validate confirm password
    validateField(confirmPassword, confirmPassword.nextElementSibling, (field) => {
        return field.value === password.value && field.value !== '';
    });

    // Form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        // Check password match
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }

        if (form.checkValidity()) {
            // Simulate form submission (replace with actual submission logic)
            alert('Form submitted successfully!');
            form.reset();
            form.classList.remove('was-validated');
            [fullName, email, password, confirmPassword].forEach(field => {
                field.classList.remove('is-valid');
            });
        } else {
            form.classList.add('was-validated');
        }
    }, false);
});