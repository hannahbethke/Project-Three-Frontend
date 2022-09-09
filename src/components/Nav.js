import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">

            <div className="navLogo">
                <Link to="/">
                    <div className="navLogo">
                        <span className="navSpan1">M</span>
                        <span className="navSpan2">light-painting</span>
                        
                    </div>
                </Link>
            </div>

            <div className="navPages">
                <Link to="/about">
                    about
                </Link>
                <Link to="/artwork">
                    artwork
                </Link>
                <Link to="/contact">
                    contact
                </Link>
            </div>

        </div>
    );
};

export default Nav;
