import React, { Component } from 'react';
import logo from './image/logo1.png';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './Nav.css';
import Intropage from '../pages/Intropage';
import axios from 'axios';


class Nav extends Component {
  state = {
    isSigninOn: false,
    isSignupOn: false,
    isSignOut: false,
  }

  handleOpenSignin = () => {
    this.setState({ isSigninOn: true })
  }
  handleCloseSignin = () => {
    this.setState({ isSigninOn: false })
  }
  handleOpenSignup = () => {
    this.setState({ isSignupOn: true })
  }
  handleCloseSignup = () => {
    this.setState({ isSignupOn: false })
  }

  handleSignout = () => {
    axios.post("https://plantingg.com/user/signout")
      .then(() => {
        this.setState({ isSignOut: !this.state.isSignOut })
        this.props.history.push('/');
      })
    console.log('로그아웃 중')
  }

  moveToPost = () => {
    this.props.history.push('/post')
  }

  motoToIntro = () => {
    this.props.history.push('/')
    console.log('인트로 페이지로 이동')
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
              className="nav-logout nav-btn"
              onClick={this.handleSignout}
            >로그아웃</button>


            <button
              className="nav-signin nav-btn"
              onClick={this.handleOpenSignin}
            >로그인
            </button>
            {this.state.isSigninOn && (
              <SignIn
                openModal={this.handleOpenSignin}
                closeModal={this.handleCloseSignin}
                isSigninOn={this.state.isSigninOn}
              />
            )}

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
          </div>
        </div>
      </>
    );
  }
}



export default Nav;

