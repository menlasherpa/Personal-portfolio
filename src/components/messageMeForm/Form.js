import React, { useState } from 'react';
import './Form.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const endpoint = 'https://mobj5qxqxk.execute-api.us-east-1.amazonaws.com/v1/contact';

  const validateForm = () => {
    if (!name || !email || !subject || !message) {
      alert('Please fill in all required fields: Name, Email, Subject, and Message');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      body: JSON.stringify({
        email,
        message,
        subject,
        phone: phone || null, // Make phone number optional
      }),
    };

    const fetchPromise = fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data),
    });

    fetchPromise
      .then((response) => {
        response.json();
        alert("Your message was successfully sent to Lakpa. You'll hear from her soon! 👩🏻‍💻");
      })
      .then((data) => {
        console.log(data); // Handle response, catch errors
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Oops! Something went wrong. Please try again :)");
      });
  };

  return (
    <div>
      <h2>Send Me A Message 🌸</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          type="text"
          placeholder="Phone Number (Optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder="Your message"
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
