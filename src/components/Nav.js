import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <div className="navName">
                <Link to="/">
                    <div><span className="navSpan">M </span>light-painting</div>
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
