import React, { useState } from "react";

// Import a helper function to validate email addresses
import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Create state variables to store form field values
  // Initialize them with empty strings
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle changes in form input fields
  const handleInputChange = (e) => {
    // Get the value and name of the input filed that triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Update the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Prevent the default form submission behavior (page refresh)
    e.preventDefault();

    // Check if the email is not valid or the userName is empty, and display an error message if so
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    // Check if the message is empty and set an error message if so
    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

    // If everything is valid, clear the form inputs after successful submission
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Reach Out</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <p>Want to get into contact?</p>
          <address>
            Charlotte, NC <br />
            P: <a href="tel:630.624.9123">630.624.9123</a>
            <br />
            E:{" "}
            <a href="mailto://jaldharapatel91@gmail.com">
              jaldharapatel91@gmail.com
            </a>
          </address>
          <p>
            <strong>I'd love to hear your feedback!</strong>
          </p>
        </div>

        {/* contact form section  */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}
            <label for="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {/* Display error message if there's one */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
