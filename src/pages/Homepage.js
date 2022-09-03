import React from 'react';

const Homepage = () => {
    return (
        <>
            <div className="homepageContainer">
                <div className="homepageLeft">
                    <img src={require("../images/headshot1.jpg")} alt="headshot" />
                </div>

                <div className="homepageRight">

                </div>
                <div className="overlay">
                    NO<span>AH</span>
                </div>
            </div>
        </>
    );
}

export default Homepage;
