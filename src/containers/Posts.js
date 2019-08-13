import React, { Component } from 'react';
import Post from './Post';
import {Link, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    
};

const defaultProps = {
    
};

class Posts extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>포스트 목록 Posts</h3>
                <ul>
                    <li><Link to={`${this.props.match.url}/1`}>포스트 #1</Link></li>
                    <li><Link to={`${this.props.match.url}/2`}>포스트 #2</Link></li>
                    <li><Link to={`${this.props.match.url}/3`}>포스트 #3</Link></li>
                </ul>
                <Route exact path={this.props.match.url} render={() => (<p>포스트를 선택하세요</p>)} />
                <Route exact path={`${this.props.match.url}/:id`} component={Post} />
            </div>
        );
    }
}

Posts.propTypes = propTypes;
Posts.defaultProps = defaultProps;

export default Posts;