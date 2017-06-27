import React from 'react';
import { Board } from '../../containers/board';

const Country = ({ match }) => {
    return (
        <Board url={match.url}/>
    );
};

export default Country;
