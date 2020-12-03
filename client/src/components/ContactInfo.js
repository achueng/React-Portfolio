import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import "./css/ContactInfo.css";

function ContactInfo() {
    return (
        <Card className="py-3 sticky-top contact-card">
            <Row>
                <Col xs={4} md={12}>
                    <a href="" alt="">
                        <Image src="https://picsum.photos/80/80" alt="" roundedCircle className="icons my-2 mx-auto"/>
                    </a>
                </Col>
                <Col xs={4} md={12} className="justify-content-center">
                    <a href="" alt="">
                        <Image src="https://picsum.photos/80/80" alt="" roundedCircle className="icons my-2 mx-auto"/>
                    </a>
                </Col>
                <Col xs={4} md={12}>
                    <a href="" alt="">
                        <Image src="https://picsum.photos/80/80" alt="" roundedCircle className="icons my-2 mx-auto"/>
                    </a>
                </Col>
            </Row>
        </Card>
    )
}

export default ContactInfo;