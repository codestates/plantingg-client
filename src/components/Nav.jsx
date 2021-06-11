import React, { Component } from 'react';
import logo from './image/logo1.png';
import SignUp from './SignUp';
import SignIn from './SignIn';
// import Mypage from '../pages/Mypage';
import './Nav.css';
import Intropage from '../pages/Intropage';
import ErrorModal from './ErrorModal';
import axios from 'axios';

axios.defaults.withCredentials = true;

// isSigninOn : true 일 때, 즉 로그인 상태일 때, 로그인 버튼이 없어야하고
// 마이페이지 접속 가능
// 
class Nav extends Component {
  constructor(props) {
    console.log('props : ', props)
    super(props);
    this.state = {
      isSigninOn: false,
      isSignupOn: false,
      isSignOut: false,
      userinfo: null,
      alertLoginmessage: '',
    }
    this.handleOpenSignin = this.handleOpenSignin.bind(this);
    this.handleCloseSignin = this.handleCloseSignin.bind(this);
    this.handleOpenSignup = this.handleOpenSignup.bind(this);
    this.handleCloseSignup = this.handleCloseSignup.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  // [ 버튼 ]
  handleOpenSignin = () => {
    this.setState({ isSigninOn: true })
    console.log('로그인 모달창 열기')
  }
  handleCloseSignin = () => {
    this.setState({ isSigninOn: false })
  }
  handleOpenSignup = (e) => {
    this.setState({ isSignupOn: true })
    e.preventDefault()
  }
  handleCloseSignup = (e) => {
    this.setState({ isSignupOn: false })
    e.stopPropagation()

  }
  handleMessage = () => {
    this.setState({ alertLoginmessage: '로그인 후 이용하세요' })
  }

  handleSignout = () => {
    axios.post("https://plantingg.com/user/signout")
      .then(() => {
        this.setState({ isSignOut: !this.state.isSignOut })
        this.props.history.push('/');
      })
    console.log('로그아웃 중')
  }

  moveToIntro = () => {
    this.props.history.push('/')
    console.log('인트로 페이지로 이동')
  }

  // user정보를 불러와야 마이페이지로 이동할 수 있는데... 
  // 현재는 signup 페이지에 유저정보관련 상태들이 있는데  nav에서 관리해 줘야되는지 ???
  // 
  // [로그인 성공시 게시물 페이지로 이동]
  moveToPost = () => {
    axios.get('https://plantingg.com/uer/userinfo',
      { /*email, password 데이터*/ })
      .then(

        this.props.history.push('/') // post (게시물 페이지)
      )
      .catch(err => alert(err))
    console.log('게시물 페이지로 이동')
  }

  // [로그인 성공시 마이페이지로 이동] 
  moveToMypage = () => {
    axios.get('http://plantingg.com/user/userinfo',
      { /*email, password 데이터*/ })
      .then(
        this.props.history.push('/') //mypage (마이 페이지)
      )
      .catch(err => alert(err));
    console.log('마이 페이지로 이동')
  }

  render() {
    return (
      <>
        <div className="nav">
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
              className="nav-signin nav-btn"
              onClick={this.handleOpenSignin}
            >로그인
            </button>
            {this.state.isSignupOn && (
              <SignIn
                openModal={this.handleOpenSignin}
                closeModal={this.handleCloseSignin}
                isSigninOn={this.state.isSigninOn}
              />
            )}
            <button
              className="nav-logout nav-btn hide"
              onClick={this.handleSignout}
            >로그아웃</button>
            <button
              className="nav-signup nav-btn"
              onClick={this.handleOpenSignup}
            >회원가입
            </button>
            {this.state.isSignupOn && (
              <SignUp
                openModal={this.handleOpenSignup}
                closeModal={this.handleCloseSignup}
                isModalOn={this.state.isSignupOn}
              />
            )}

            <button
              className="nav-mypage nav-btn hide"
              onClick={this.moveToMypage}
            >마이 페이지</button>
            {/* {this.state.alertLoginmessage ? <ErrorModal /> : <Intropage />} */}
            <i className="fas fa-bars fa-2x"></i>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;

