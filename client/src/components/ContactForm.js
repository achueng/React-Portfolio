import React from "react";
import "./css/ContactForm.css";
import { Form, Button } from "react-bootstrap";

function ContactForm() {
    return (
        <React.Fragment>
            <h1 className="display-4">Contact</h1>
            <hr className="my-4"></hr>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter message here"/>
                </Form.Group>
                <Button variant="light" type="submit">
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    )
}

export default ContactForm;