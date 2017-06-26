import React from 'react';

const NoMatch = ({ location }) => {
    return (
        <div>No match for {location.pathname}</div>
    );
};

export default NoMatch;
