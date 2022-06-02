import React, { useState } from "react";
import "./style/Header.css";
import "./style/contactUS.css";
import axios from "axios";

const ContactUsPage = () => {
  const [feedbackSended, setFeedbackSended] = useState(false);
  const [submissionDone, setsubmissionDone] = useState(false);
  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("userData", userData);
    axios
      .post(
        "https://shopping-app-5c89b-default-rtdb.firebaseio.com/feedback.json",
        {
          name: userData.username,
          email: userData.email,
          phone: userData.phone,
          message: userData.message,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setFeedbackSended(true);
    setsubmissionDone(true);
  };
  return (
    <>
      <div className="contactForm">
        <form id="form">
          <label>Name</label>
          <input
            type="text"
            aria-label="Username"
            value={userData.username || ""}
            name="username"
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            aria-label="Email"
            name="email"
            value={userData.email || ""}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input
            type="text"
            aria-label="Phone"
            name="phone"
            value={userData.phone || ""}
            onChange={handleChange}
          />

          <label>Message</label>
          <input
            type="textarea"
            name="message"
            aria-label="Message"
            value={userData.message || ""}
            onChange={handleChange}
          />

          <button
            variant="outline-danger"
            onClick={submitHandler}
            className="button button3"
          >
            Submit
          </button>
        </form>
      </div>
      {feedbackSended && alert("Your Feedback Sended successfully!")}
      {submissionDone && document.getElementById("form").reset()}
    </>
  );
};
export default ContactUsPage;
