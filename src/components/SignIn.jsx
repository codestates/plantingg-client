import React, { useState, useEffect } from 'react';
import SignUp from './SignUp';
import './Modal.css';
import google from './image/g.png';
import Mainpage from '../pages/Mainpage'
import axios from 'axios';

function SignIn({ openModal, closeModal, isModalOn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [goToSignup, setGoToSignup] = useState(false);
  const [signupModalOn, setSignupModalOn] = useState(false);

  function handlePassword(e) {
    setEmail(e.target.value);
  }

  function handleEmail(e) {
    setPassword(e.target.value);
  }

  function handleSignupModal() {
    setSignupModalOn(true);
  }

  function handleSwitchToSignUp(e) {
    setGoToSignup(true)
    e.preventDefault()
    console.log('회원가입으로 이동')
  }

  // [ 로그인 서버연결 부분 ]
  // function handleSignin() {
  //   if (!email || !password) {
  //     setErrorMessage('이메일이나 비밀번호를 확인하세요.')
  //     return;
  //   }
  //   else {
  //     setErrorMessage('')
  //     return axios
  //       .post('https://plantingg.com/user/signin',
  //         { email: email, password: password },
  //         { 'Content-Type': 'application/json', withCredentials: true })
  //       .then(() => {
  //         alert('로그인 되었습니다.')
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   }
  // }

  return (
    <div
      className="modal-container show-modal"
      onClick={openModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-header">로그인</h2>
        <form className="modal-info">
          <input
            className="modal-input"
            placeholder="Email"
            onChange={handleEmail}
            type="email"
          />
          <input
            className="modal-input"
            placeholder="Password"
            onChange={handlePassword}
            type="password"
          />

          <button className="signin-btn btn">로그인</button>
          {/* 정상적으로 로그인처리가 된 경우 Mainpage로 이동 */}
          {/* 정상적으로 로그인처리가 된 경우 Nav button이 logout으로 전환 */}

          {/* {errorMessage ? <div>{errorMessage}</div> : <Mainpage />} */}

          <button className="signin-social btn">
            <img className="g-logo" src={google} />
             구글계정으로 로그인</button>
          <a
            className="signin-signup"
            onClick={handleSwitchToSignUp}
            href="/signup">
            회원가입 </a>
          {goToSignup && (<SignUp

          />)}


        </form>
        <button onClick={closeModal} className="close">닫기</button>

      </div>
    </div>
  );

}

export default SignIn;

