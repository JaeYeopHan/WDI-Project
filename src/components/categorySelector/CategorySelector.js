import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategorySelector.css';

const Navigators = () => {
    return (
        <div className="Navigators">
            <NavLink
                to="/1"
                className="btn one">
                One
            </NavLink>
            <NavLink
                to="/2"
                className="btn two">
                Two
            </NavLink>
            <NavLink
                to="/3"
                className="btn three">
                Three
            </NavLink>
            <NavLink
                to="/4"
                className="btn four">
                Three
            </NavLink>
        </div>
    );
};

export default Navigators;
