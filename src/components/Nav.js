import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <div className="navName">
                <Link to="/">
                    <span>Noah B</span>
                </Link>
            </div>
            <div className="navPages">
                <Link to="/about">
                    About
                </Link>
                <Link to="/music">
                    Music
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Nav;
