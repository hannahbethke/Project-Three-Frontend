import React from 'react';

const Homepage = () => {
    return (
        <div className="homepageContainer">

            <div className="homepageLeft">
                
            </div>

            <div className="homepageRight">
            <img className="homepageImg" src={require("../images/pexels-merlin-lightpainting2.jpg")} alt="headshot" />
            </div>

            <div className="overlay">
                <h1 className="overlayH1">Merlin</h1>
            </div>

        </div>
    );
}

export default Homepage;
