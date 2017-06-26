import React from 'react';

const Country = ({ match }) => {
    return (
        <div>
            {match.url}
        </div>
    );
};

export default Country;
