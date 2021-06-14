import axios from 'axios'
import React from 'react'
axios.defaults.withCredentials = true;
import UpdateMyPage.css
import './Mypage.css'

export default function UpdateMyPage() {

  return ( // 상태 어떻게 바꿀래
    <div className="item">
      <input className="username"></input>
      <input className="currentstatus"></input>
      <button className="btn-logout" >update my info</button>
    </div>
  )
}
