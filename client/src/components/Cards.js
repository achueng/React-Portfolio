import React from "react";
import { Card, Col } from "react-bootstrap";

function Cards(props) {
    let project = props.data;
    console.log(project);
    return (
        <Col sm={12} lg={5}>
            <Card className="p-1 mb-2 mx-auto">
                <Card.Img variant="top" src="" alt=""/>
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                    <Card.Text>
                            Description
                    </Card.Text>
                    <Card.Link href="#">Check it out!</Card.Link>
                    <Card.Link href="#">Github Repo</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Cards;