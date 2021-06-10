

import axios from 'axios'
import React from 'react'
axios.defaults.withCredentials = true;

export default function UpdateMyPage(props) {

  return ( // 상태 어떻게 바꿀래
    <div className="item">
      <img>{this.props.userinfo.profileImage/*사진 어케넣니*/}</img>
      <input className="username">{this.props.userinfo.username}</input>
      <input className="currentstatus">{this.props.userinfo.currentstatus}</input>
      <button className="btn-logout" onClick={this.setmode}>update userinfo</button>
    </div>
  )
}
