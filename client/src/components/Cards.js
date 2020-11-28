import React from "react";
import { Card, Col } from "react-bootstrap";

function Cards(props) {
    let project = props.data;
    return (
        <Col sm={12} lg={6}>
            <Card className="p-1 mb-2 mx-auto">
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "assets/" + project.image} alt={project.title}/>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>
                    {project.description}
                    </Card.Text>
                    <Card.Link href={project.link} target="_blank">Check it out!</Card.Link>
                    <Card.Link href={project.repo} target="_blank">Github Repo</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Cards;