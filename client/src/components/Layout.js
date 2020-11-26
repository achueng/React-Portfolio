import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import "./css/Layout.css";

function Layout(props) {
    return (
        <Container className="custom-container">
            <Row>
                <Col md={8}>
                    <Jumbotron>
                        {props.children}
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Layout;