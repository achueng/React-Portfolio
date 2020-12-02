import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import "./css/ContactInfo.css";

function ContactInfo() {
    return (
        <Card className="py-3 contact-card">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Image src="https://picsum.photos/100/100" roundedCircle className="my-2 mx-auto"/>
                </Col>
                <Col md={{ span: 8, offset: 2 }}>
                    <Image src="https://picsum.photos/100/100" roundedCircle className="my-2 mx-auto"/>
                </Col>
                <Col md={{ span: 8, offset: 2 }}>
                    <Image src="https://picsum.photos/100/100" roundedCircle className="my-2 mx-auto"/>
                </Col>
            </Row>
        </Card>
    )
}

export default ContactInfo;