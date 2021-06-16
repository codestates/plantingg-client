import React, { useState } from "react";
import SignUp from "./SignUp";
import "./Modal.css";
import google from "./image/g.png";
import { useHistory } from "react-router-dom";
// import Mainpage from '../pages/Mainpage'
import axios from "axios";
import { useEffect } from 'react';
axios.defaults.withCredentials = true;

function SignIn({
  openModal,
  handleUserInfo,
  closeModal,
  handleLogin,
  handleOpenSignup,
  handleOpenSignin,
  accessToken,
}) {
  const history = useHistory();
  // console.log('handleLogin', handleLogin)
  // console.log('modal', openModal)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [goToSignup, setGoToSignup] = useState(false);

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function onKeyPress(e) {
    if (e.key === 'Enter') {
      loginRequestHandler();
    }
  }
  // function handleSwitchToSignUp(e) {
  //   setGoToSignup(true);
  //   console.log("회원가입으로 이동");
  // }

  function loginRequestHandler() {
    console.log("로그인 버튼 작동");
    if (!email || !password) {
      setErrorMessage("Check your email & password");
    }
    if (email && password) {
      console.log("hihi");
      axios
        .post(
          `http://localhost:4000/auth/signin`,
          { email: email, password: password },
          {
            headers: {
              "Content-Type": "application/json",
              authorization: accessToken
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log('login 응답 :', res.data);
          handleLogin(res.data.data.accessToken);
          // handleUserInfo(res.data);
          return res;
        })
        .then((res) => {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          localStorage.setItem("refreshToken", res.data.data.refreshToken);
          localStorage.setItem("email", email);
          // 회원가입 모달창으로 갔을 때, 로그인 모달을 닫아줘야 겹쳐서 실행되지 않음
          //handleOpenSignup();
          //handleOpenSignin(); // 주석 풀면 로그아웃 눌렀을때 회원가입모달로 이동함
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="modal-container show-modal" onClick={openModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="close">
          <i className="fas fa-times"></i>
        </button>
        {goToSignup && <SignUp signUp={goToSignup} />}
        <h2 className="modal-header">Sign In </h2>
        <div className="modal-info">
          <input
            autoFocus
            required
            className="modal-input"
            placeholder="Email"
            onChange={handleEmail}
            onKeyPress={onKeyPress}
            type="email"
          />
          <input
            required
            className="modal-input"
            placeholder="Password"
            onChange={handlePassword}
            onKeyPress={onKeyPress}
            type="password"
          />
          <button className="signin-btn btn" onClick={loginRequestHandler}>Sign In</button>
          {!errorMessage ? ('') : <div className="alert-box"><i className="fas fa-exclamation-circle"></i>{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default SignIn;


{/* <button className="signin-social btn">
  <img className="g-logo" src={google} />
  구글계정으로 로그인
</button> */}
{/* <a className="signin-signup" onClick={handleSwitchToSignUp} href="#">
  회원가입
</a> */}

// inputHandler(e) {
//   this.setState({ [e.target.name]: e.target.value });
// }
