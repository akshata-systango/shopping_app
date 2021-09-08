import React, { useRef, useState } from "react";
import "./style/Header.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";

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
    await fetch(
      "https://shopping-app-5c89b-default-rtdb.firebaseio.com/feedback.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: {
            name: enteredUsername,
            email: enteredEmail,
            phone: enteredPhone,
            message: enteredMessage,
          },
        }),
      }
    );
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
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              ref={enterUsernameRef}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <FormControl aria-label="First name" ref={enterEmailRef} />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Phone</InputGroup.Text>
            <FormControl aria-label="First name" ref={enterPhoneRef} />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Message</InputGroup.Text>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              ref={enterMessageRef}
            />
          </InputGroup>
          <Button
            variant="outline-danger"
            className="btnsubmit"
            onClick={feedbackOrQuerySubmitHandler}
          >
            Submit
          </Button>
        </form>
      </div>
      {feedbackSended && alert("Your Feedback Sended successfully!")}
      {submissionDone && document.getElementById("form").reset()}
    </>
  );
};
export default ContactUsPage;
