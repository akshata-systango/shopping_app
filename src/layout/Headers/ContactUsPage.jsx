import React, { useRef, useState } from "react";
import "./style/Header.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
// import { Link } from "react-router-dom";
const axios = require("axios").default;

const ContactUsPage = () => {
  const [feedbackSended, setFeedbackSended] = useState(false);
  const [submissionDone, setsubmissionDone] = useState(false);
  const enterUsernameRef = useRef();
  const enterEmailRef = useRef();
  const enterPhoneRef = useRef();
  const enterMessageRef = useRef();

  const feedbackOrQuerySubmitHandler = async (event) => {
    event.preventDefault();
    const enteredUsername = enterUsernameRef.current.value;
    const enteredEmail = enterEmailRef.current.value;
    const enteredPhone = enterPhoneRef.current.value;
    const enteredMessage = enterMessageRef.current.value;

    axios
      .post(
        "https://shopping-app-5c89b-default-rtdb.firebaseio.com/feedback.json",
        {
          name: enteredUsername,
          email: enteredEmail,
          phone: enteredPhone,
          message: enteredMessage,
        }
      )
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

    setFeedbackSended(true);
    setsubmissionDone(true);
  };
  return (
    <>
      <div className="contactForm">
        <form id="form">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            <FormControl
              aria-label="Username"
              aria-describedby="basic-addon1"
              ref={enterUsernameRef}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <FormControl aria-label="Email" ref={enterEmailRef} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Phone</InputGroup.Text>
            <FormControl aria-label="Phone" ref={enterPhoneRef} />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Message</InputGroup.Text>
            <FormControl
              as="textarea"
              aria-label="Message"
              ref={enterMessageRef}
            />
          </InputGroup>
          <Button
            title="button"
            variant="outline-danger"
            className="btnsubmit"
            onClick={feedbackOrQuerySubmitHandler}
          >
            Submit
          </Button>
        </form>
        {/* <Link to="/mydocument">Open a PDF</Link> */}
      </div>
      {feedbackSended && <p>"Your Feedback Sended successfully!</p>}
      {submissionDone && document.getElementById("form").reset()}
    </>
  );
};
export default ContactUsPage;
