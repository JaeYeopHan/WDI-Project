import React from 'react';
import { CountrySelector } from '../countrySelector';

const Category = ({ match }) => {
    return (
        <div>
            <CountrySelector match={match}/>
        </div>
    );
};

export default Category;
