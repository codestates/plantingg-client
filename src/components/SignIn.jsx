import React, { useState, useEffect } from 'react';
import SignUp from './SignUp';
import './Modal.css';
import google from './image/g.png';
import axios from 'axios';

function SignIn({ openModal, closeModal, isModalOn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handlePassword(e) {
    setEmail(e.target.value);
  }

  function handleEmail(e) {
    setPassword(e.target.value);
  }

  // function handleLogin() {
  //   if (!email || !password) {
  //     setErrorMessage('이메일, 비밀번호를 입력하세요')
  //   }

  //   if (email && password) {
  //     axios
  //       .post('https://localhost:3000/signin',
  //         { email: email, password: password },
  //         { 'Content-Type': 'application/json', withCredentials: true })
  //       .then((res) => {
  //         this.props.handleResponseSuccess(true);
  //         return axios.get('https://localhost:3000/userinfo', {
  //           'Content-Type': 'application/json',
  //           withCredentials: true
  //         })
  //       })
  //       .then((res) => {
  //         let { mobile, email, username } = res.data;
  //         this.props.handleUserInfo({
  //           username, mobile, email
  //         })
  //         this.props.history.push('/')
  //       })
  //       .catch((err) => alert(err));
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
            type="text"
          />
          <input
            className="modal-input"
            placeholder="Password"
            onChange={handlePassword}
            type="password"
          />

          <button className="signin-btn btn">로그인</button>
          <button className="signin-social btn">
            <img className="g-logo" src={google} />
             구글계정으로 로그인</button>
          <a className="signin-signup" href="/signup">회원가입 </a>

        </form>
        {/* close 버튼 눌렀을 때 맨 위 className에서 show-modal을 없애주면 됨 */}
        <button onClick={closeModal} className="close">닫기</button>

      </div>
    </div>
  );

}

export default SignIn;

{/* <button
className="nav-signin"
onClick={this.handleModalOn}
>로그인 모달창
</button> */}