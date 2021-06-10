

import axios from 'axios'
import React from 'react'
axios.defaults.withCredentials = true;

export default function UpdatePlant(props) {

  return ( // 상태 어떻게 바꿀래
    <div className="item">
      <input className="plantimg" placeholder="Please attach any pictures of your plant"></input>
      <input className="plantname" placeholder="Please fill your plant's name"></input>
      <button className="btn-logout" onClick={this.setmode}>update Myplant</button>
    </div>
  )
}
