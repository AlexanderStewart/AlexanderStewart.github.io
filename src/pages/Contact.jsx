import React from "react";

//Local stuff.
import "../styles/main.scss";
import NavigationContact from "../components/NavigationContact";
import { Form, Card, Button } from "react-bootstrap";

function Contact() {
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
              <Card className="shadow bg-white rounded">
                <Card.Body>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput0">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="success" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
              <Card className="shadow bg-white mt-3 rounded">
                <Card.Body>
                  Don't trust this form? My email is
                  alexander.stewart.developer@gmail.com
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
