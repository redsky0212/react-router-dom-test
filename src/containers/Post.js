import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    
};

const defaultProps = {
    
};

class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Post</h2>
                <p>포스트 #{this.props.match.params.id}</p>
            </div>
        );
    }
}

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default Post;