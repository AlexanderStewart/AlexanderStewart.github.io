import React, { useEffect } from "react";

//Local stuff.
import "../styles/main.scss";
import NavigationContact from "../components/NavigationContact";
import { Form, Card, Button } from "react-bootstrap";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="half-background"></div>
      <div className="horizontally-center-page">
        <div className="main-width">
          <NavigationContact />

          <div className="center">
            <h1 className="header-text-b black-text heavy-font">
              Get in touch
              <span className="period">.</span>
            </h1>
          </div>

          <div className="flex-content-a-container">
            <div className="blurb">
              <Card border="dark" className="bg-white rounded border-3">
                <Card.Body>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput0">
                      <Form.Label className="label">Name</Form.Label>
                      <Form.Control className="border-2" type="name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="label">Email address</Form.Label>
                      <Form.Control
                        className="border-2"
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="label">Message</Form.Label>
                      <Form.Control
                        className="border-2"
                        as="textarea"
                        rows={3}
                      />
                    </Form.Group>
                    <Button className="label" variant="dark" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <Card
                border="warning"
                className="bg-white mt-1 rounded text-align-center border-3"
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
