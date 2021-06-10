// 최상위 컴포넌트
import React, { Component } from 'react';
import Nav from './components/Nav';
import Intropage from './pages/Intropage';
import Footer from './components/Footer';
import { HashRouter, Route } from 'react-router-dom';
// import Mainpage from './pages/Mainpage';
// import Mypage from './pages/Mypage';


class App extends Component {


  render() {
    return (
      <HashRouter>
        <Nav />
        <Intropage />
        <Route path="/" exact={true} component={Intropage} />

        <Footer />
      </HashRouter>

    )
  }
}

export default App;