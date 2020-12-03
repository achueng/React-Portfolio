import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import "./css/ContactInfo.css";

function ContactInfo() {
    return (
        <Card className="py-3 sticky-top contact-card">
            <Row>
                <Col xs={4} md={12}>
                    <a href="https://github.com/achueng" alt="GitHub" target="_blank">
                        <Image src="https://picsum.photos/80/80" alt="github-logo" roundedCircle className="icons my-2 mx-auto"/>
                    </a>
                </Col>
                <Col xs={4} md={12} className="justify-content-center" target="_blank">
                    <a href="https://www.linkedin.com/in/agnes-chueng-5872659b/" alt="LinkedIn">
                        <Image src="https://picsum.photos/80/80" alt="linkedin-logo" roundedCircle className="icons my-2 mx-auto"/>
                    </a>
                </Col>
                <Col xs={4} md={12}>
                    <a href="mailto:agneschueng2020@u.northwestern.edu" alt="Email" target="_blank">
                        <Image src="https://picsum.photos/80/80" alt="mail-logo" roundedCircle className="icons my-2 mx-auto"/>
                    </a>
                </Col>
            </Row>
        </Card>
    )
}

export default ContactInfo;