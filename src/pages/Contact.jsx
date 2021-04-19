import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form, Card, Button, Alert } from "react-bootstrap";

//Local stuff.
import "../styles/main.scss";
import NavigationContact from "../components/NavigationContact";

function Contact() {
  const [state, handleSubmit] = useForm("xoqyvnve");
  let showContact = false;

  if (state.succeeded) {
    showContact = true;
  }

  return (
    <div className="about">
      <div className="half-background"></div>
      <div className="horizontally-center-page">
        <div className="main-width">
          <NavigationContact />

          <div className="center">
            <h1 className="header-text black-text heavy-font">
              Get in touch
              <span className="period">.</span>
            </h1>
          </div>

          <div className="flex-content-a-container">
            <div className="blurb">
              {showContact && (
                <Alert variant="success">
                  I'll be in touch with you shortly!
                </Alert>
              )}
              <Card border="dark" className="bg-white rounded border-3">
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="label" htmlFor="email">
                        Email address
                      </Form.Label>
                      <Form.Control
                        className="border-2"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="label">Message</Form.Label>
                      <Form.Control
                        className="border-2"
                        id="message"
                        name="message"
                        as="textarea"
                        rows={3}
                      />
                    </Form.Group>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <Button
                      className="label"
                      variant="dark"
                      type="submit"
                      disabled={state.submitting}
                    >
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <Card
                border="warning"
                className="bg-white mt-1 rounded text-align-left border-3"
              >
                <Card.Body>
                  Don't trust this form? My email is{" "}
                  <a href="mailto:alexander.stewart.developer@gmail.com">
                    alexander.stewart.developer@gmail.com
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
