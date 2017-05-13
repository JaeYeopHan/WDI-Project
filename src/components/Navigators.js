import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigators.css';

const Navigators = () => {
    return (
        <div className="Navigators">
            <NavLink
                to="/"
                className="btn">
                Home
            </NavLink>
            <NavLink
                to="/comp1"
                className="btn one">
                One
            </NavLink>
            <NavLink
                to="/comp2"
                className="btn two">
                Two
            </NavLink>
            <NavLink
                to="/comp3"
                className="btn three">
                Three
            </NavLink>
        </div>
    );
};

export default Navigators;
