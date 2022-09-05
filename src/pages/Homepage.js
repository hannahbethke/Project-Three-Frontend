import React from 'react';

const Homepage = () => {
    return (
        <div className="homepageContainer">

            <div className="homepageLeft">
                <img className="homepageImg" src={require("../images/pexels-merlin-lightpainting-11308623.jpg")} alt="headshot" />
            </div>

            <div className="homepageRight">
            </div>

            <div className="overlay">
                NO<span className="homepageSpan">AH</span>
            </div>

        </div>
    );
}

export default Homepage;
