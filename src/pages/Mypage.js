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
import imgA from '../components/image/seokjin.png'
import imgB from '../components/image/t1.png'
import imgC from '../components/image/t2.png'
import imgD from '../components/image/t3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

axios.defaults.withCredentials = true;

class Mypage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'welcome', // 수정버튼이 눌리면 상태가 변경되어야 한다.
      username: /*this.props.user.username || */"정다희",
      statusMessage: /*this.props.user.statusMessage || */"I feel crazy",
      profileImage: /*this.props.user.profileImage ||*/ "myimg",
      // name: /*this.props.user.name,//plant의 이름 */ ['천냥금',' 포인세티아','호야'],
      // image: /* this.props.user.image,//plant의 사진 */ [imgB, imgC, imgD],
      errorMessage: ""
    }
    // this.updatemyplant = this.updatemyplant.bind(this)
    this.setmode = this.setmode.bind(this)
    //   this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  //   onChangeHandler = () => {
  //     this.setState({
  //           [event.target.name] : event.target.value
  //     })

  setmode = () => { //프로필 업데이트 버튼이 눌리면 상태 변환
    this.setState({
      mode: 'update'
    })
  }

  // updatemyplant = () => {//컴포넌트 따로 빼야할듯
  //   if (image && name) {
  //     const { name, image } = this.state
  //     axios
  //       .post('https://plantingg.com/plant/upload', {
  //         image,
  //         name
  //       },//서버에서 받아오는 변수명 수정 필요
  //         //업데이트만 하는 컴포넌트 생성하기
  //         { 'Content-Type': 'application/json', withCredentials: true }
  //       )
  //       .then(this.props.history.push("/mypage"))//페이지 새로고침 필요
  //   } else {
  //     this.setState({
  //       errorMessage: '추가할 내 식물의 이름과 사진을 입력하세요'
  //     })
  //   }
  // }

  // componentDidUpdate() { //mypage 정보 업데이트시 이 코드 실행
  //   axios
  //     .get('https://plantingg.com/plant/get',
  //       { 'Content-Type': 'application/json', withCredentials: true }
  //     )
  //     .then((res) => {
  //       let { name, image } = res.data;
  //       this.setState({
  //         name,
  //         image,
  //       })
  //     })
  // }

  render() {
    console.log(this.props.userinfo)
    return <div>
    <header>
      <Nav />
    </header>

       <span className="profile">

        <span classNmae="outer3">
        <img className='profileimg' src={imgA} />
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
        <FontAwesomeIcon icon={faPen}/>update userinfo</button>
        {this.state.mode === 'update' ? (<UpdateMypage />) : ('')}
        </div>

        </span>
        </span>
        

      <div className="profile">
      <div className="align">
        <span className='box'><img className="memberimg" src={imgB}/><div className="membertext">{'Total Post Count'}</div><span className="membernbr">{'5'}</span></span>
        <span className='box'><img className="memberimg" src={imgC}/><div className="membertext">{'Your Membership'}</div><span className="membernbr">{'1'}</span></span>
        <span className='box'><img className="memberimg" src={imgD}/><div className="membertext">{'Days after Join us'}</div><span className="membernbr">{'103'}</span></span>
      </div>
      </div>
     
    </div>

  }
}

export default Mypage
