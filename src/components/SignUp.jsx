import React from "react";
import { useState } from "react";
import axios from "axios";
import google from "./image/g.png";
import Signin from "./SignIn";
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;

function SignUp({
  openModal,
  closeModal,
  handleUserInfo,
  handleOpenSignin,
  handleOpenSignup,
}) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [message, setMessage] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function onKeyPress(e) {
    if (e.key === 'Enter') {
      signUpRequestHandler();
    }
  }
  // 비밀번호 재확인 => 적용안됨..하
  function handlePasswordCheck(e) {
    setPasswordCheck(e.target.value);
    // setErrorMessage(e.target.value !== password);
  }


  function signUpRequestHandler() {
    if (password !== passwordCheck) {
      setErrorMessage('Check your password')
    }
    else if (!username || !email || !password) {
      setErrorMessage("Fill in all blanks.");
    } else {
      axios
        .post(
          `http://localhost:4000/auth/signup`,
          { username: username, email: email, password: password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log('res.data :', res.data);
          handleUserInfo(res.data); // 여기서 유저인포 들어가도록 보내주고 있어요.
          setIsSignup(true);
          // 로그인 모달창으로 전환할 때, 회원가입 모달창을 닫아줘야 겹쳐서 실행되지 않음
          handleOpenSignup();
          handleOpenSignin();
          history.push("/intro");
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
        <h2 className="modal-header">Sign Up</h2>
        <form className="modal-info">
          <input
            autoFocus
            type="text"
            className="modal-input"
            placeholder="Username"
            onChange={handleUsername}
            onKeyPress={onKeyPress}
            required
          />
          <input
            type="email"
            className="modal-input"
            placeholder="Email"
            onChange={handleEmail}
            onKeyPress={onKeyPress}
            required
          />
          <input
            type="password"
            className="modal-input"
            placeholder="Password"
            onChange={handlePassword}
            onKeyPress={onKeyPress}
            minlength="8"
            required
          />
          <input
            type="password"
            className="modal-input"
            placeholder="Password check"
            onChange={handlePasswordCheck}
            onKeyPress={onKeyPress}
            required
          />
          <button className="signup-btn btn" onClick={signUpRequestHandler}>
            Sign Up
          </button>
          {isSignup && <Signin />}
          {!errorMessage ? ('') : <div className="alert-box"><i className="fas fa-exclamation-circle"></i>{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default SignUp;

{/* <button className="signup-social btn">
  <img className="g-logo" src={google} />
  구글계정으로 회원가입
</button> */}