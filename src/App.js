// 최상위 컴포넌트
import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intropage from './pages/Intropage';
//import PostMain from './pages/PostMain';
//import Mypage from './pages/Mypage';
import { HashRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
//import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      isLogin: false,
      accessToken: '',
    };
    console.log('state', this.state)
  }

  handleUserInfo = (obj) => {
    this.setState({ userInfo: obj })
  }

  issueAccessToken = (token) => {
    this.setState({ accessToken: token });
  }

  // 여기서 token을 상태로 저장하고, 로그인 상태만 저장
  handleLogin = (token) => {
    this.setState({ isLogin: true })
    this.issueAccessToken(token)
  }

  // 로그아웃은 localStorage만 비워주면 됨
  handleLogout = () => {
    console.log("로그아웃 중");
    this.setState({ isLogin: false });
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    const { userInfo, isLogin, accessToken } = this.state;
    return (
      <div>
        <Switch>
          <Nav
            handleLogout={this.handleLogout}
            isLogin={isLogin}
            handleLogin={this.handleLogin}
            handleUserInfo={this.handleUserInfo}
          />
          {/* <Route
            exact
            path='/signup'
            render={() => (
              <SignUp />
            )}
          />
          <Route
            exact
            path='/signin'
            render={() => (
              <SignIn />
            )}
          /> */}
          {/* <Route
            path='/mypage'
            render={() => (
              <Mypage
                userinfo={userInfo}
                handleLogout={this.handleLogout.bind(this)}
              />
            )}
          />
          <Route
            path='/post'
            render={() => (
              <PostMain
                userinfo={userInfo}
              />
            )}
          /> */}
          <Route
            path='/'
            render={() => {
              // if (isLogin) {
              //   return <Redirect to='/mypage' />;
              // }
              // return <Redirect to='/' />
              return <Redirect to='/' />
            }}
          />
        </Switch>
        <Intropage />
        <Footer />
      </div >
    )
  }
}

export default withRouter(App);

