import React from "react";
import "./css/AboutMe.css";

function AboutMe() {
    return (
        <React.Fragment>
            <h1 className="display-4">About Me</h1>
            <hr className="my-4" />
            <img src={process.env.PUBLIC_URL + "/assets/image0.jpg"} alt="Agnes sitting in garden" className="float-left" id="portrait" />
            <p>
                Hello! My name is Agnes Chueng. I am currently a student in a coding bootcamp. I love traveling to different places, and I am a huge foodie. Through traveling and trying out different foods, I am able to learn about different cultures, which makes me feel more connected with the world.
            </p>
            <p>
                In my down time, I like playing MapleStory M. This game is particularly special to me because the original PC version (MapleStory) was a game I used to play as a kid, so the mobile version brings back nostaglia. I was also able to connect with a great community through the game, which helps all of us feel less isolated during this pandemic.
            </p>
            <p>
                I studied at the University of Illinois at Urbana-Champaign (UIUC) with a major in East Asian Languages and Cultures, and a minor in Linguistics. During my time as a student at UIUC, I studied abroad in Taiwan and Hong Kong, each for half a year. Studying abroad was a great opportunity for me to broaden my horizons, to travel to different parts of the world, and to experience teaching.
            </p>
            <p>
                I have work experience in tutoring children within the age range of 4 through 16, but tutoring/teaching isn't what I mainly want to commit to as my career. I do not know what exactly I want to go into for my career, but one thing I am certain about is that computer programming will be one of the essential skills for most jobs in the future. Learning how to code will definitely benefit me in my search for career opportunities.
            </p>
        </React.Fragment>
    )
}

export default AboutMe;