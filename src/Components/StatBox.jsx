import React from "react";

function StatBox(props) {

    return (
        <div className={props.statboxId}>
            <div className="statbox">
                <div className="icon" style={{ backgroundImage: `url(${props.bgImage})` }} />
                <div className="statbox-text">
                    <h5>{props.statTitle}</h5>
                    <p>{props.statText}</p>
                </div>
            </div>
        </div>
    );
}

export default StatBox;