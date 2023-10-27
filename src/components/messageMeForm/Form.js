import React, {useState} from "react";
import "./Form.scss";

function Form() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    email: "",
    name: "",
    phoneNum: ""
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://mobj5qxqxk.execute-api.us-east-1.amazonaws.com/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log('Form submitted successfully.');
      } else {
        // Handle error
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <div>
        <h2> Send Me A Message 🌸 </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="name"
          placeholder="Name"
          value={formData.GuestName}
          onChange={handleChange}
        />
        <textarea
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
        />
        <textarea
          type="tel"
          name="phoneNum"
          placeholder="Phone (Optional)"
          value={formData.Phone}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="subject"
          placeholder="Message Title"
          value={formData.MessageTitle}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={8}
          value={formData.Message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
