import React from "react";
import Row from "react-bootstrap/Row";
import Cards from "./Cards";
import projects from "../utils/projects.json";

function PortfolioCards() {
    return (
        <React.Fragment>
            <h1 className="display-4">Portfolio</h1>
            <hr className="my-4" />
            <Row>
                {projects.map(project => <Cards data={project}/>)}
            </Row>
        </React.Fragment>
    )
}

export default PortfolioCards;