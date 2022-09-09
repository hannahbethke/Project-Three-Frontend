import homepageImg from '../assets/images/pexels-merlin-lightpainting2.jpg';

const Homepage = () => {
    return (
        <div className="homepageContainer">

            <div className="homepageRight">
                <img className="homepageImg" src={homepageImg} alt="face with rainbow color" />
            </div>

            <div className="overlap">
                <h1 className="overlapH1">Merlin</h1>
            </div>

        </div>
    );
};

export default Homepage;
