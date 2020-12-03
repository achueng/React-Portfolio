import React from "react";
import "./css/ContactForm.css";
import { Form, Button } from "react-bootstrap";

function ContactForm(props) {
    return (
        <React.Fragment>
            <h1 className="display-4">Contact</h1>
            <hr className="my-4"></hr>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="text"
                    onChange={props.handleInputChange}
                    placeholder="Name"
                    name="name"
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email"
                    onChange={props.handleInputChange}
                    placeholder="Email"
                    name="email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                    as="textarea"
                    rows={3}
                    onChange={props.handleInputChange}
                    placeholder="Enter message here"
                    name="message"
                    />
                </Form.Group>
                <Button 
                variant="light" 
                type="submit"
                onClick = {props.handleFormSubmit}
                >
                    Submit
                </Button>
                {(props.successState) ? (<span className="ml-3 small text-success">
                    We received your contact form!
                </span>) : (null)}
            </Form>
        </React.Fragment>
    )
}

export default ContactForm;