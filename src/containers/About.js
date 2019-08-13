import React, { Component } from 'react';
import queryString from 'query-string';


class About extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            query: JSON.stringify(queryString.parse(this.props.location.search)),
            color: {color: queryString.parse(this.props.location.search).color }
        };

    }

   

    render() {
        return (
            <div>
                <h2 style={this.state.color}>About</h2>
                <p>
                    {this.props.match.params.name} 리엑트 라우트 소개 페이지<br />
                    {this.state.query}
                </p>
            </div>
        );
    }
}

export default About;