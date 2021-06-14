import React, { Component } from "react";
import logo from "./image/logo1.png";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
//import Mypage from '../pages/Mypage';
import "./Nav.css";
//import Intropage from "../pages/Intropage";
//import ErrorModal from "./ErrorModal";
import axios from "axios";

axios.defaults.withCredentials = true;

class Nav extends Component {
  constructor(props) {
    console.log(props)

    super(props);
    this.state = {
      isSignInModalOn: false,
      isSignUpModalOn: false,
    };
  }

  // 모달창 on & off 
  handleOpenSignin = () => {
    this.setState({ isSignInModalOn: true });
    this.setState({ isSignUpModalOn: false });
    console.log("로그인 모달창 열기");
  };

  handleCloseSignin = () => {
    this.setState({ isSignInModalOn: false });
    console.log("로그인 모달창 닫기");
  };

  handleOpenSignup = () => {
    this.setState({ isSignUpModalOn: true });
    this.setState({ isSignInModalOn: false });
    console.log("회원가입 모달창 열기");

  };

  handleCloseSignup = () => {
    this.setState({ isSignUpModalOn: false });
    console.log("회원가입 모달창 닫기");
  };

  // 로고 클릭시 인트로 페이지로 이동
  moveToIntro = () => {
    this.props.history.push("/");
    console.log("인트로 페이지로 이동");
  };

  // 새 게시물 클릭시 게시물작성 페이지로 이동
  moveToPost = () => {
    this.props.history.push("/newpost");
    console.log("게시물 페이지로 이동");
  };

  // 마이페이지 클릭시 마이페이지로 이동
  moveToMypage = () => {
    this.props.history.push("/mypage")
    console.log("마이 페이지로 이동");
  };

  handleSignupModalOff = () => {
    this.props.handleLogout();
    this.setState({ isSignInModalOn: false })
    console.log('handleSignupModalOff works!!')
  }

  render() {
    return (
      <div className="nav">
        {this.props.isLogin ? (
          <>
            <a href="/intro">
              <img
                className="nav-logo"
                src={logo}
                onClick={this.moveToIntro}
                alt='logo'
              />
            </a>

            <div className="buttons">
              <a href="/newpost">
                <button className="nav-post nav-btn" onClick={this.moveToNewpost}> 새 글 작성 </button>
              </a>
              <button className="nav-logout nav-btn hide" onClick={this.handleSignupModalOff}> 로그아웃 </button>
              <a href="/mypage">
                <button className="nav-mypage nav-btn hide" onClick={this.moveToMypage}> 마이 페이지 </button>
              </a>
            </div>
          </>
        ) : (
            <>
              <a href="/intro">
                <img
                  className="nav-logo"
                  src={logo}
                  onClick={this.moveToIntro}
                  alt='logo'
                />
              </a>
              <div className="buttons">
                <button
                  className="nav-signin nav-btn"
                  onClick={this.handleOpenSignin}
                >로그인</button>
                {this.state.isSignInModalOn && (
                  <SignIn
                    openModal={this.handleOpenSignin}
                    closeModal={this.handleCloseSignin}
                    handleLogin={this.props.handleLogin}
                    handleCloseSignin={this.handleCloseSignin}
                    handleOpenSignup={this.handleOpenSignup}
                  />
                )}

                <button
                  className="nav-signup nav-btn"
                  onClick={this.handleOpenSignup}
                >회원가입</button>
                {this.state.isSignUpModalOn && (
                  <SignUp
                    openModal={this.handleOpenSignup}
                    closeModal={this.handleCloseSignup}
                    handleUserInfo={this.props.handleUserInfo}
                    handleOpenSignin={this.handleOpenSignin}
                    handleOpenSignup={this.handleOpenSignup}
                  />)}
              </div>
            </>
          )
        }
      </div>
    );
  }
}
export default Nav;

