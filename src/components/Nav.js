import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <div>Noah B</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/music">
                <div>Music</div>
            </Link>
            <Link to="/contact">
                <div>Contact</div>
            </Link>
        </div>
    );
}

export default Nav;
