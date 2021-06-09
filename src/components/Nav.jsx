import React, { Component } from 'react';
import './Nav.css';
import logo from './image/logo2.png';

class Nav extends Component {
  state = {
    isLoginOrSignupModal: false,
  };

  handleLoginOrSignupModal = (event) => {
    this.setState({
      isLoginOrSignupModal: !this.state.isLoginOrSignupModal,
    });
    console.log('handleLoginOrSignupModal : working!')
  };

  render() {
    return (
      <>
        <div className="nav">
          <img className="nav-logo" src={logo} alt="logo" />
          <div className="buttons">

            <button className="nav-signin" onClick={this.handleLoginOrSignupModal}>로그인</button>

            <button className="nav-signup" onClick={this.handleLoginOrSignupModal}>회원가입</button>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;