import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import google from './image/g.png';

function SignUp({ openModal, closeModal, isModalOn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [backOpen, setBackOpen] = useState(false);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setEmail(e.target.value);
  }

  function handleEmail(e) {
    setPassword(e.target.value);
  }

  // function handleCloseOutside(e) {

  // }

  // useEffect() => {
  //   window.addEventListener('click', (e) => {
  //     e.target === 
  //   })
  // }

  return (
    <div
      className="modal-container show-modal"
      onClick={openModal} >
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2 className="modal-header">회원 가입</h2>
        <form className="modal-info">
          <input
            className="modal-input"
            placeholder="Username"
            onChange={handleUsername}
            type="text"
          />
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
          <input
            className="modal-input"
            placeholder="Confirm Password"
            onChange={handlePassword}
            type="password"
          />

          <button className="signup-btn btn">회원 가입</button>
          <button className="signup-social btn">
            <img className="g-logo" src={google} />
            구글계정으로 회원가입</button>
        </form>
        <button onClick={closeModal} className="close btn">닫기</button>
      </div>
    </div >
  );

}

export default SignUp;

