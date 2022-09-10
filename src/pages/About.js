import aboutImg from '../assets/images/pexels-merlin-lightpainting1.jpg';

const About = () => {
    
    return (
        <div className="aboutPageContainer">

            <div className="aboutImgDiv">
                <img className="aboutImg" src={aboutImg} alt="face with blue and black eye mask" />
            </div>

            <div className="aboutPageBio">
                <h1>MERLIN Light Painting </h1>
                <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="p2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="p3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>
    );
};

export default About;
