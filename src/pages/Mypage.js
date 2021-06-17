//Mypage
//상위 컴포넌트로 부터 프로필 정보 props 로 받아오기 : username, currentstatus, isLogin ??
//받아온 props를 state로 지정
//프로필 수정 기능
//myplant 업데이트 기능
//api 에 plantlist get 하는게 없다.
import UpdateMypage from './UpdateMypage';
import './Mypage.css'
import axios from 'axios'
import React from 'react'
import Nav from '../components/Nav'
import imgA from '../components/image/profile.png'
import imgB from '../components/image/t1.png'
import imgC from '../components/image/t2.png'
import imgD from '../components/image/t3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

axios.defaults.withCredentials = true;

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome', // 수정버튼이 눌리면 상태가 변경되어야 한다.
      username: this.props.userinfo.username,
      statusMessage: '',
      profileImage: imgA,
      // name: /*this.props.user.name,//plant의 이름 */ ['천냥금',' 포인세티아','호야'],
      // image: /* this.props.user.image,//plant의 사진 */ [imgB, imgC, imgD],
      errorMessage: ""
    }
    // this.updatemyplant = this.updatemyplant.bind(this)
    this.setmode = this.setmode.bind(this)
    this.setWelcome = this.setWelcome.bind(this)
    this.setImg = this.setImg.bind(this)
    this.setMsg = this.setMsg.bind(this)
    this.setName = this.setName.bind(this)
    //   this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  //   onChangeHandler = () => {
  //     this.setState({
  //           [event.target.name] : event.target.value
  //     })

  setmode = () => {
    //프로필 업데이트 버튼이 눌리면 상태 변환
    this.setState({
      mode: "update",
    });
  };

  setWelcome = (msg) => {
    this.setState({
      mode: "welcome",
    })
  }
  setImg = (img) => {
    this.setState({
      profileImage: img
    })
  }

  setMsg = (msg) => {
    this.setState({
      statusMessage: msg
    })
  }

  setName = (name) => {
    this.setState({
      username: name
    })
  }

  render() {
    console.log(this.props)//여기에 status, img 가 안옴
    return <div className="mypage-container">
      <h2 className="page-title">My page<i className="fas fa-leaf"></i></h2>

      <span className="profile">
        <span classNmae="outer3">
          <img className='profileimg' src={this.state.profileImage} />
        </span>
        <span className="outer3">
          <div className='text'>
            <span className="text-main">{'Plant Owner Name'}</span>
            <span className="text">{this.state.username}</span>
          </div>
          <div className='text'>
            <span className="text-main">{'Status Message'}</span>
            <span className="text">{this.state.statusMessage}</span>
          </div>
          <div>
            <button className="btn-userinfo" onClick={this.setmode}>
              <FontAwesomeIcon icon={faPen} />update userinfo</button>
          </div>

        </span>
        <span className='outer3'>
          {this.state.mode === 'update' ? (<UpdateMypage accessToken={this.props.accessToken} setName={this.setName} setWelcome={this.setWelcome} setImg={this.setImg} setMsg={this.setMsg} />) : ('')}
        </span>
      </span>


      <div className="profile">
        <div className="align">
          <span className='box'><img className="memberimg" src={imgB} /><div className="membertext">{'Total Post Count'}</div><span className="membernbr">{'5'}</span></span>
          <span className='box'><img className="memberimg" src={imgC} /><div className="membertext">{'Your Membership'}</div><span className="membernbr">{'1'}</span></span>
          <span className='box'><img className="memberimg" src={imgD} /><div className="membertext">{'Days after Join us'}</div><span className="membernbr">
            {this.props.userinfo.createdAt.slice(8, 10)}</span></span>
        </div>
      </div>

    </div>

  }
}

export default Mypage;
