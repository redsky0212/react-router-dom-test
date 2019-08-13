import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Home, About} from './containers';

import Menu from './components/Menu'; // 라우터 Link를 모아놓은 컴포넌트


class App extends Component {

  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/about/:name?" component={About} />
      </div>
    );
  }
}


export default App;