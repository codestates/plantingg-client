// 최상위 컴포넌트
import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intropage from './pages/Intropage';
import { HashRouter, Route, Switch } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <HashRouter>
        <Nav />
        <Switch>
          <Route path="/" exact={true} component={Intropage} />


        </Switch>
        <Footer />
      </HashRouter>
    )
  }
}

export default App;

