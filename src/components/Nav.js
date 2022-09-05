import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <div className="navName">
                <Link to="/">
                    <div><span className="navSpan">NoahB</span></div>
                </Link>
            </div>
            <div className="navPages">
                <Link to="/about">
                    about
                </Link>
                <Link to="/music">
                    music
                </Link>
                <Link to="/contact">
                    contact
                </Link>
            </div>
        </div>
    );
}

export default Nav;
