// 최상위 컴포넌트
import React, { Component } from 'react';
import Nav from './components/Nav';
import Intropage from './pages/Intropage';
import Footer from './components/Footer';
import { HashRouter as Router } from 'react-router-dom';


class App extends Component {


  render() {
    return (
      <Router>
        <Nav />
        <Intropage />
        <Footer />
      </Router>

    )
  }
}

export default App;