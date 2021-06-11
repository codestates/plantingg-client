import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import google from './image/g.png';
import Signin from './SignIn';
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;


function SignUp({ openModal, closeModal, accessToken, issueAccessToken }) {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  // console.log('history : ', history)
  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleSignup(e) {
    setIsSignup(true);
  }

  // 비밀번호 재확인
  function handlePasswordCheck(e) {
    setPasswordCheck(e.target.value);
    setErrorMessage(e.target.value !== password);
  }

  function signUpRequestHandler() {
    if (!username || !email || !password) {
      setErrorMessage('회원정보를 모두 입력하세요.')
    }
    else {
      axios.post('https://localhost:4000/signup',
        { username:username, email:email, password:password },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      )
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err));
    }
  }


  // [ 회원가입 서버 연결부분 ]
  // function handleSignup() {
  //   if (!username || !email || !password) {
  //     setErrorMessage('회원 정보를 모두 입력하세요.')
  //     return;
  //   }
  //   else {
  //     setErrorMessage('')
  //   }
  //   axios
  //     .post('https://plantingg.com/user/signup', {
  //       usename: username,
  //       email: email,
  //       password: password,
  //     }, {
  //       'Content-Type': 'application/json',
  //       withCredentials: true
  //     })
  //     .then((res) => {
  //       // Mainpage로 이동하게 
  //      // history.push('/main')
  //     })
  //     .catch((err) => console.log(err))
  // }


  return (
    <div
      className="modal-container show-modal"
      onClick={openModal} >
      <div
        className="modal"
        onClick={e => e.stopPropagation()}>
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

          <button
            className="signup-btn btn"
            onClick={signUpRequestHandler}>
            회원 가입
          </button>

          {/* 정상적으로 회원 가입처리가 된 경우 Signin 페이지로 이동 */}
          {/* {errorMessage ? <div>{errorMessage}</div> : <Signin />} */}
          <button className="signup-social btn">
            <img className="g-logo" src={google} />
            구글계정으로 회원가입</button>
        </div>
        <button onClick={closeModal} className="close btn">닫기</button>
      </div>
    </div >
  );

}

export default SignUp;

