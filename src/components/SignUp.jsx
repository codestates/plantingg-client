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

  // 비밀번호 재확인 => 적용안됨..하
  function handlePasswordCheck(e) {
    setPasswordCheck(e.target.value);
    setErrorMessage(e.target.value !== password);
  }

  function signUpRequestHandler() {
    if (!username || !email || !password) {
      setErrorMessage("회원정보를 모두 입력하세요.");
    } else {
      axios
        .post(
          `http://localhost:4000/user/signup`,
          { username: username, email: email, password: password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          setIsSignup(true);
          handleUserInfo(res.data);
          // 로그인 모달창으로 전환할 때, 회원가입 모달창을 닫아줘야 겹쳐서 실행되지 않음
          handleOpenSignup();
          handleOpenSignin();
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="modal-container show-modal" onClick={openModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-header">회원 가입</h2>
        <div className="modal-info">
          <input
            required
            className="modal-input"
            placeholder="Username"
            onChange={handleUsername}
            type="text"
          />
          <input
            required
            className="modal-input"
            placeholder="Email"
            onChange={handleEmail}
            type="email"
          />
          <input
            required
            className="modal-input"
            placeholder="Password"
            onChange={handlePassword}
            type="password"
          />
          <input
            required
            className="modal-input"
            placeholder="Confirm Password"
            onChange={handlePasswordCheck}
            type="password"
          />
          <button className="signup-btn btn" onClick={signUpRequestHandler}>
            회원 가입
          </button>
          {isSignup && <Signin />}

          <button className="signup-social btn">
            <img className="g-logo" src={google} />
            구글계정으로 회원가입
          </button>
        </div>
        <button onClick={closeModal} className="close btn">
          닫기
        </button>
      </div>
    </div>
  );
}

export default SignUp;
