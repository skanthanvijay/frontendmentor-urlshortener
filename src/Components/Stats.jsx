import React from "react";
import ShortenedLinks from "./ShortenedLinks";
import StatBox from "./StatBox";

function Stats() {
    return (
        <div className="stats">
            <ShortenedLinks /> {/* UrlShortener */}
            <div className="advanced-stats">
                <div className="stats-titlebox">
                    <h1>Advanced Statistics</h1>
                    <h6>Track how your links are performing across the web with our advanced statistics dashboard.</h6>
                </div>
                <div className="statbox-container">
                    <div className="statbox-container-inner">
                        <StatBox
                            statboxId="statbox-1"
                            bgImage="images/icon-brand-recognition.svg" 
                            statTitle="Brand Recognition"
                            statText="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content." 
                        />
                        <StatBox
                            statboxId="statbox-2"
                            bgImage="images/icon-detailed-records.svg"
                            statTitle="Detailed Records"
                            statText="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                        />
                        <StatBox
                            statboxId="statbox-3"
                            bgImage="images/icon-fully-customizable.svg"
                            statTitle="Fully Customizable"
                            statText="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                        />
                    </div>
                    <div className="statbox-line" />
                </div>
            </div>
        </div>
    );
}

export default Stats;