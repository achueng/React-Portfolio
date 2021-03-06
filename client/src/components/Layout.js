import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import ContactInfo from "./ContactInfo";
import "./css/Layout.css";

function Layout(props) {
    return (
        <Container className="custom-container">
            <Row>
                <Col md={8}>
                    <Jumbotron className="custom-jumbotron">
                        {props.children}
                    </Jumbotron>
                </Col>
                <Col md={{ span: 2, offset: 2 }}>
                    <ContactInfo/>
                </Col>
            </Row>
        </Container>
    )
}

export default Layout;