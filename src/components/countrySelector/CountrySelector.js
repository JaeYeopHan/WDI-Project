import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import DefaultOption from '../options/DefaultPage';
import Country from '../options/Country';

const CountrySelector = ({ match }) => {
    return (
        <div>
            <div className="Navigators">
                <NavLink
                    to={`${match.url}/a`}
                    className="btn one">
                    Five
                </NavLink>
                <NavLink
                    to={`${match.url}/b`}
                    className="btn two">
                    Six
                </NavLink>
                <NavLink
                    to={`${match.url}/c`}
                    className="btn two">
                    Seven
                </NavLink>
                <NavLink
                    to={`${match.url}/d`}
                    className="btn two">
                    Eight
                </NavLink>
            </div>
            <Route
                exact path={match.url}
                render={DefaultOption}
            />
            <Route path={`${match.url}/a`} component={Country}/>
            <Route path={`${match.url}/b`} component={Country}/>
            <Route path={`${match.url}/c`} component={Country}/>
            <Route path={`${match.url}/d`} component={Country}/>
        </div>
    );
};

export default CountrySelector;
