import React, { Component } from 'react';
import logo from './image/logo2.png';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './Nav.css';


class Nav extends Component {
  state = {
    isSigninOn: false,
    isSignupOn: false,
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

  render() {
    return (
      <>
        <div className="nav">
          <img className="nav-logo" src={logo} alt="logo" />
          <div className="buttons">
            <button
              className="nav-signin"
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
              className="nav-signin"
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

