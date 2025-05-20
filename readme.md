
Sign Up Form Validation

Overview-------------

This project implements a responsive sign-up form with client-side validation using HTML, CSS, Bootstrap, and JavaScript. The form features a glassmorphism design with gradient colors, real-time validation feedback, and prevents submission until all validations are met.

Features
1.Responsive Design: Uses Bootstrap's grid system for mobile-friendly layout.
2.Glassmorphism UI: Transparent form with blur effect and gradient background.
3.Real-time Validation: Immediate feedback for user inputs.



Validation Rules:
1.Full Name: 2-50 characters, letters and spaces only.
2.Email: Valid email format.
3.Password: Minimum 8 characters, must include a number, uppercase, and lowercase letter.
4.Confirm Password: Must match the password.
5.Terms: Checkbox must be checked.
6.Error Handling: Clear error messages for invalid inputs.



Custom Styling: Gradient buttons and input fields with hover effects.

Project Structure------------------

├── index.html         # Main HTML file with form
├── css/
│   └── styles.css    # Custom CSS (embedded in HTML for this example)
├── js/
│   └── validation.js  # JavaScript for form validation
└── README.md         # Project documentation

Setup Instructions--------------
1.Clone the repository:
2.git clone <repository-url>
3.Open index.html in a web browser to view the form.
4.Ensure an internet connection for Bootstrap CDN.

Dependencies----------
1.Bootstrap 5.3.0 (via CDN)
2.Modern web browser (Chrome, Firefox, Edge, etc.)

Usage------------------
Fill out the form fields.
Real-time validation provides immediate feedback.
Submit the form when all fields are valid (simulated with an alert).
