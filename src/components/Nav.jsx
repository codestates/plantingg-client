import React, { Component } from 'react';
import logo from './image/logo1.png';
import SignUp from './SignUp';
import SignIn from './SignIn';
//import Mypage from '../pages/Mypage';
import './Nav.css';
import Intropage from '../pages/Intropage';
import ErrorModal from './ErrorModal';
import axios from 'axios';

axios.defaults.withCredentials = true;

// isSignInModalOn : true 일 때, 즉 로그인 상태일 때, 로그인 버튼이 없어야하고
// 마이페이지 접속 가능
// 
class Nav extends Component {
  constructor(props) {
    console.log('props : ', props)
    super(props);
    this.state = {
      isLogin: false,
      isSignInModalOn: false,
      isSignUpModalOn: false,
      isSignOut: false,
      userinfo: null,
      alertLoginmessage: '',
      accessToken: '',
    }
    this.handleOpenSignin = this.handleOpenSignin.bind(this);
    this.handleCloseSignin = this.handleCloseSignin.bind(this);
    this.handleOpenSignup = this.handleOpenSignup.bind(this);
    this.handleCloseSignup = this.handleCloseSignup.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.loginHandler=this.loginHandler.bind(this);
    this.issueAccessToken=this.issueAccessToken.bind(this);
  }

  // [ 토큰 ]
  issueAccessToken(token) {
    this.setState({ accessToken: token });
  }

  // [ 로그인 핸들러 ]
  loginHandler(data) {
    this.setState({ isLogin: true });
    this.issueAccessToken(data);
  }

  // [회원가입 핸들러]
  signupHandler(data) {
    this.setState({ isSignup: true });

  }

  // [ 모달창 on & off ]
  handleOpenSignin = () => {
    this.setState({ isSignInModalOn: true })
    console.log('로그인 모달창 열기')
  }
  handleCloseSignin = () => {
    this.setState({ isSignInModalOn: false })
  }
  handleOpenSignup = () => {
    this.setState({ isSignUpModalOn: true })
  }
  handleCloseSignup = () => {
    this.setState({ isSignUpModalOn: false })
    console.log('회원가입 모달창 닫기')

  }

  // [ 로그인 하기 전에 마이페이지 버튼을 눌렀을 경우 => 에러메시지 ]
  handleMessage = () => {
    this.setState({ alertLoginmessage: '로그인 후 이용하세요' })
  }

  // [ 로그아웃 핸들러 ]
  handleSignout = () => {
    axios.post("https://localhost:4000/user/signout")
      .then(() => {
        this.setState({ isSignOut: !this.state.isSignOut })
        this.props.history.push('/');
      })
    console.log('로그아웃 중')
  }

  // [ 상단 로고 클릭시 인트로 페이지로 이동]
  moveToIntro = () => {
    this.props.history.push('/')
    console.log('인트로 페이지로 이동')
  }

  // user정보를 불러와야 마이페이지로 이동할 수 있는데...  현재는 signup 페이지에 유저정보관련 상태들이 있는데  nav에서 관리해 줘야되는지 ???
  // [로그인 성공시 게시물 페이지로 이동]
  moveToPost = () => {
    axios.get('https://localhost:4000/user/userinfo',
      { /*email, password 데이터*/ })
      .then(

        this.props.history.push('/') // post (게시물 페이지)
      )
      .catch(err => alert(err))
    console.log('게시물 페이지로 이동')
  }

  // [로그인 성공시 마이페이지로 이동] 
  moveToMypage = () => {
    axios.get('https://localhost:4000/user/userinfo',
      { /*email, password 데이터*/ })
      .then(
        this.props.history.push('/') //mypage (마이 페이지)
      )
      .catch(err => alert(err));
    console.log('마이 페이지로 이동')
  }

  render() {
    return (

      <div className="nav">
        {this.state.isLogin ? (
          <>
            <a href="/intro">
              <img
                className="nav-logo"
                src={logo}
                alt="logo"
                onClick={this.moveToIntro}
              />
            </a>

            <div className="buttons">
              <button
                className="nav-post nav-btn"
                onClick={this.moveToPost}
              >새 글 작성</button>

              <button
                className="nav-logout nav-btn hide"
                onClick={this.handleSignout}
              >로그아웃</button>
              <button
                className="nav-mypage nav-btn hide"
                onClick={this.moveToMypage}
              >마이 페이지</button>
              {/* {this.state.alertLoginmessage ?
                <ErrorModal />
                : <Mypage accessToken={this.state.accessToken} issueAccessToken={this.issueAccessToken} />} */}
            </div>
          </>
        ) : (
            <>
              <a href="/intro">
                <img
                  className="nav-logo"
                  src={logo}
                  alt="logo"
                  onClick={this.moveToIntro}
                />
              </a>
              <div className="buttons">
                <button
                  className="nav-signin nav-btn"
                  onClick={this.handleOpenSignin}
                >로그인
                </button>
                {this.state.isSignInModalOn && (
                  <SignIn
                    openModal={this.handleOpenSignin}
                    closeModal={this.handleCloseSignin}
                    loginHandler={this.loginHandler}
                  />
                )}

                <button
                  className="nav-signup nav-btn"
                  onClick={this.handleOpenSignup}
                >회원가입
                </button>
                {this.state.isSignUpModalOn && (
                  <SignUp
                    openModal={this.handleOpenSignup}
                    closeModal={this.handleCloseSignup}
                    accessToken={this.state.accessToken}
                    issueAccessToken={this.issueAccessToken}
                  />
                )}

              </div>
            </>
          )}

      </div>
    )
  }
}
export default Nav;




{/* <i className="fas fa-bars fa-2x"></i> */ }
