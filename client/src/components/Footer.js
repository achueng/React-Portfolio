import React from "react";
import { Row, Col } from "react-bootstrap";
import "./css/Footer.css";

function Footer(props) {
  return (
    <footer className="fixed-bottom p-3">
      <Row>
        <Col>
          <h6> &#169; Copyright 2020 Agnes Chueng</h6>
          <a className="credit" href="https://www.freepik.com/free-vector/watercolor-design-pastel-background_7335470.htm">Background image designed by Freepik</a>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer;