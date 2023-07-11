import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Query Submitted");

    // Perform form validation and data processing here
    // Send the form data to the server or perform any other actions

    // Reset form fields after submission
    setName("");
    setEmail("");
    setQuery("");
    setPhone("");
  };

  return (
    <div className="contact">
      <div className="contact-form m-3">
        <h1>Contact</h1>
        <p>Submit the form below to get in touch with me</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Type your Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Your email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Type your email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Your Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              pattern="[0-9]{10}"
              placeholder="Type your 10 digit Phone number"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">
              Type your Query
            </label>
            <textarea
              className="form-control"
              id="query"
              rows="3"
              value={query}
              required
              onChange={(e) => setQuery(e.target.value)}
            ></textarea>
          </div>
          <div className="button-container">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
