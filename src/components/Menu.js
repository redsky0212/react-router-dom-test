import React, { Component } from 'react';
// NavLink는 특정 스타일을 지정해서 넣어줄 수 있다.
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    
};

const defaultProps = {
    
};

class Menu extends Component {

    constructor(props) {
        super(props);

        this.activeStyle = {
            color: 'green',
            fontSize: '2rem'
        };
    }

    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/" activeStyle={this.activeStyle}>홈</NavLink></li>
                    <li><NavLink exact to="/about" activeStyle={this.activeStyle}>About</NavLink></li>
                    <li><NavLink to="/about/이름" activeStyle={this.activeStyle}>이름 About</NavLink></li>
                </ul>
            </div>
        );
    }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;