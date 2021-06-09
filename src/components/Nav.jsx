import React, { Component } from 'react';
import './Nav.css';
import logo from './image/logo2.png';
import SignUp from './SignUp';
import SignIn from './SignIn';


class Nav extends Component {
  state = {
    isModalOn: false,
  };


  handleModal = (event) => {
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
    console.log('isModalOn : working!')
  };


  handleClickLogo = () => {
    console.log('메인 페이지로 이동')
  }

  render() {
    return (
      <>
        <div className="nav">
          <img className="nav-logo" src={logo} alt="logo" onClick={this.handleClickLogo} />
          <div className="buttons">

            <button
              className="nav-signin"
              onClick={(
                <SignIn
                  handleModal={this.handleModal} />
              )}>
              로그인
              </button>

            <button
              className="nav-signup"
              onClick={
                <SignUp show={this.state.isModalOn} onHide={this.handleModal} />
              }>
              회원가입
              </button>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;