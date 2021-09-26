import React from "react";
import Button from "react-bootstrap/Button";

function Intro() {
    return (
        <div className="intro">
            <div className="subdiv illustration-div"></div>
            <div className="subdiv">
                <div className="intro-text">
                    <h1>More than just shorter links</h1>
                    <h4>Build your brand's recognition and get detailed insights on how your links are performing.</h4>
                    <Button className="btn-lg funnelbtn">Get Started</Button>
                </div>
            </div>
        </div>
    );
}

export default Intro;
