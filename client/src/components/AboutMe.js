import React from "react";
import "./css/AboutMe.css";

function AboutMe() {
    return (
        <React.Fragment>
            <h1 className="display-4">About Me</h1>
            <hr className="my-4"/>
            <img src={process.env.PUBLIC_URL + "/assets/image0.jpg"} alt="Agnes sitting in garden" className="float-left" id="portrait"/>
        </React.Fragment>
    )
}

export default AboutMe;