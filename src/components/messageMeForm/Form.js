import React, {useState} from "react";
import "./Form.scss";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    MessageTitle: "",
    Message: "",
    Email: "",
    GuestName: "",
    Phone: ""
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async data => {
    data.preventDefault();
    // Make an API call here to submit the form data to your serverless back end.
    try {
      const response = await axios.post("YourApiEndpoint", data);
      if (response.status === 200) {
        alert("Message submitted successfully");
      } else {
        alert("Message submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Message submission failed");
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
          name="GuestName"
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
          name="Phone"
          placeholder="Phone (Optional)"
          value={formData.Phone}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="MessageTitle"
          placeholder="Message Title"
          value={formData.MessageTitle}
          onChange={handleChange}
        />
        <textarea
          name="Message"
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
