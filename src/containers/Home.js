import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    
};

const defaultProps = {
    
};

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <button onClick={() => {
                    this.props.history.push('/about/javascript');
                }}>
                    자바스크립트 라우팅
                </button>
            </div>
        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;