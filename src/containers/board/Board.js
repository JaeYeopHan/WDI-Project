import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { parseUrl } from '../../utils';

const propTypes = {
    url: PropTypes.string
};

const defaultProps = {
    url: '/undefined/undefined'
};

class Board extends Component {
    constructor(props) {
        super(props);
        this.option = parseUrl(this.props.url);
    }

    render() {
        return (
            <div>
                <span>category: {this.option.category}</span>
                <span>country: {this.option.country}</span>
            </div>
        );
    }
}

Board.propTypes = propTypes;
Board.defaultProps = defaultProps;

export default Board;
