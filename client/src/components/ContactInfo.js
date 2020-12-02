import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import "./css/ContactInfo.css";

function ContactInfo() {
    return (
        <Card className="py-3 sticky-top contact-card">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <a href="" alt="">
                        <Image src="https://picsum.photos/100/100" alt="" roundedCircle className="my-2 mx-auto"/>
                    </a>
                </Col>
                <Col md={{ span: 8, offset: 2 }}>
                    <a href="" alt="">
                        <Image src="https://picsum.photos/100/100" alt="" roundedCircle className="my-2 mx-auto"/>
                    </a>
                </Col>
                <Col md={{ span: 8, offset: 2 }}>
                    <a href="" alt="">
                        <Image src="https://picsum.photos/100/100" alt="" roundedCircle className="my-2 mx-auto"/>
                    </a>
                </Col>
            </Row>
        </Card>
    )
}

export default ContactInfo;