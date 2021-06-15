// 최상위 컴포넌트 .
import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import PostMain from './pages/PostMain';
import Mypage from './pages/Mypage';
import Newpost from './pages/Newpost';
import { HashRouter, Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      isLogin: false,
      accessToken: '',
    };
    console.log('액세스 토큰 상태확인 :', this.state.accessToken)
  }

  // handleKeepLogin = async () => {
  //   const loggedInfo = storage.get('loggedInfo')
  //   if (!loggedInfo) return;

  //   const { UserActions } = this.props;
  //   UserActions.setLoggedInfo(loggedInfo);
  //   try {
  //     await UserActions.checkStatus();

  //   } catch (e) {
  //     storage.remove('loggedInfo');
  //     window.applicationCache.href = '/auth/login?expired';
  //   }
  // }

  // componentDidMount() {
  //   console.log('컴포넌트 딛 마운트')
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     this.setState({ isLogin: true })
  //   } else {
  //     this.setState({ isLogin: false })
  //   }
  // }

  // handleResponseSuccess(data) {
  //   console.log(data);
  //   localStorage.setItem('')
  // }

  handleLoginTrue = () => {
    this.setState({ isLogin: true })
  }

  handleUserInfo = (obj) => {
    this.setState({ userInfo: obj })
    console.log('userinfo :', this.state.userinfo)
  }

  // issueAccessToken = (token) => {
  //   this.setState({ accessToken: token });
  // }

  // 여기서 token을 상태로 저장하고, 로그인 상태만 저장
  handleLogin = (token) => {
    console.log('handleLogin token : ', token) // 잘 받아옴
    this.setState({ isLogin: true })
    this.setState({ accessToken: token })
    //this.issueAccessToken(token)
  }

  // 로그아웃은 localStorage만 비워주면 됨
  handleLogout = () => {
    console.log("로그아웃 중");
    this.setState({ isLogin: false });
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    console.log('App.js 렌더링 props', this.props)
    const { userInfo, isLogin, accessToken } = this.state;
    return (
      <div>
        <header>
          <Nav
            handleLogout={this.handleLogout}
            isLogin={isLogin}
            handleLogin={this.handleLogin}
            handleUserInfo={this.handleUserInfo}
            accessToken={this.accessToken}
            handleLoginTrue={this.handleLoginTrue}
          />
        </header>
        <Switch>
          <Route
            path='/intro'
            exact={true}
            component={Intro}
            isLogin={isLogin}
          />
          <Route
            path='/'
            exact={true}
            render={() => {
              if (isLogin) {
                return <Redirect to='/mypage' />;
              }
              return <Redirect to='/intro' />
            }}
          />

          <Route
            path='/mypage'
            render={() => (
              <Mypage
                userinfo={userInfo}
                handleLogout={this.handleLogout}
                isLogin={isLogin}
              />
            )}
          />
          <Route
            path='/post'
            exact
            render={() => (
              <PostMain
                userinfo={userInfo}
                isLogin={isLogin}
              />
            )}
          />
          <Route
            path='/newpost'
            render={() => (
              <Newpost
                userinfo={userInfo}
                accessToken={accessToken}
                isLogin={isLogin}
              />
            )}
          />

        </Switch>

        <footer>
          <Footer />
        </footer>
      </div >
    )
  }
}

export default withRouter(App);
