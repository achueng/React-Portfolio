import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import "./css/ContactInfo.css";

function ContactInfo() {
    return (
        <Card className="py-3 sticky-top contact-card">
            <Row>
                <Col xs={4} md={12}>
                    <a href="https://github.com/achueng" alt="GitHub" target="_blank" rel="noreferrer">
                        <Image src={process.env.PUBLIC_URL + "/assets/github-logo.png"} alt="github-logo" rounded className="icons my-2 mx-auto"/>
                    </a>
                </Col>
                <Col xs={4} md={12} className="justify-content-center" target="_blank" rel="noreferrer">
                    <a href="https://www.linkedin.com/in/agnes-chueng-5872659b/" alt="LinkedIn">
                        <Image src={process.env.PUBLIC_URL + "/assets/linkedin-logo.png"} alt="linkedin-logo" rounded className="icons my-2 mx-auto"/>
                    </a>
                </Col>
                <Col xs={4} md={12}>
                    <a href="mailto:agneschueng2020@u.northwestern.edu" alt="Email" target="_blank" rel="noreferrer">
                        <Image src={process.env.PUBLIC_URL + "/assets/mail-logo.png"} alt="mail-logo" rounded className="icons my-2 mx-auto"/>
                    </a>
                </Col>
            </Row>
        </Card>
    )
}

export default ContactInfo;