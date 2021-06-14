// 최상위 컴포넌트
import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intropage from './pages/Intropage';
import { HashRouter } from 'react-router-dom';
import Mypage from './pages/Mypage'
import PostMain from './pages/PostMain'

// const users = [
//   { email: 'kim@test.com', password: '123', name: 'Kim' },
//   { email: 'lee@test.com', password: '456', name: 'Lee' },
//   { email: 'park@test.com', password: '789', name: 'Park' }
// ]

class App extends Component {


  state = {
    isLogin: false,
    userinfo: null,
  };
  
  render() {
    return (
      <>
    

      <main>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Intropage />} />
          <Route
            path="/mypage"
            render={props => <Mypage user={this.state.userinfo} />}
          />
          <Route
            path="/postmain"
            render={props => <PostMain user={this.state.userinfo} />}
          />
          {/* <Route
            path="/post"
            render={props => <Mypost user={this.state.userinfo} {...props} />}
          /> */}

        </Switch>
    </Router>
    </main>
    </>
    )
  }
}

export default withRouter(App);

