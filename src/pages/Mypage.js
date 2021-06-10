//Mypage
//상위 컴포넌트로 부터 프로필 정보 props 로 받아오기 : username, currentstatus, isLogin ??
//받아온 props를 state로 지정
//프로필 수정 기능
//myplant 업데이트 기능
//api 에 plantlist get 하는게 없다.
import UpdateMypage from './UpdateMypage';
import UpdatePlant from './UpdatePlant'
import axios from 'axios'
import React from 'react'
axios.defaults.withCredentials = true;

class Mypage extends React.Component {
  constructor(props){
    super(props)
      this.state={
        mode:'welcome', // 수정버튼이 눌리면 상태가 변경되어야 한다.
        username:this.props.data.username,
        statusMessage:this.props.data.statusMessage,
        profileImage:this.props.data.profileImage,
        name:this.props.data.name,//plant의 이름
        image:this.props.data.image,//plant의 사진
        errorMessage:""
      }
  this.updatemyplant = this.updatemyplant.bind(this)
  this.setprofilemode = this.setprofilemode.bind(this)
//   this.onChangeHandler = this.onChangeHandler.bind(this)
      }
//   onChangeHandler = () => {
//     this.setState({
//           [event.target.name] : event.target.value
//     })

setprofilemode = () =>{ //프로필 업데이트 버튼이 눌리면 상태 변환
  this.setState({
    mode:'update'
  })
}

updatemyplant = () => {//컴포넌트 따로 빼야할듯

const setplantupdatemode = () =>{
      this.setState({
            mode:'plantupdate'
      })
}
setplantupdatemode()

if(image && name){
    const { name, image } = this.state
    axios
    .post('https://plantingg.com/plant/upload', {
    image,
    name
  },//서버에서 받아오는 변수명 수정 필요
  //업데이트만 하는 컴포넌트 생성하기
  { 'Content-Type': 'application/json', withCredentials: true }
)
.then(this.props.history.push("/mypage"))//페이지 새로고침 필요
  }else{
    this.setState({
      errorMessage: '추가할 내 식물의 이름과 사진을 입력하세요'
    })
  }


}

componentDidUpdate() { //mypage 정보 업데이트시 이 코드 실행
    axios
    .get('https://plantingg.com/plant/get', 
    { 'Content-Type': 'application/json', withCredentials: true } 
    )
    .then((res)=>{
      let { name, image } = res.data;
      this.setState({
            name,
            image,
          })
    })
  }

  render(){
      return  <div><h1>Plantingg-Mypage</h1>
      <div>
      <img>{this.props.userinfo.profileImage/*사진 어케넣니*/}</img>
      <span className="username">{this.props.userinfo.username}</span>
      <span className="currentstatus">{this.props.userinfo.currentstatus}</span>
      <button className="btn-logout" onClick={this.setprofilemode}>update userinfo</button>
      {this.state.mode==='update' ? (<UpdateMypage></UpdateMypage>) :('')}
      </div>

      <div>
        {this.state.name.map((name)=>
            <span className="plants" key={name}>{name}</span>//사진도 함께 하려면 어떻게 해야 할까 ?
        )}
      </div>
      <button className="btn-updateplany" onClick={this.updatemyplant}>update myplant</button>
      {this.state.errorMessage.length ===0 ? ('') : (<div>{this.state.errorMessage}</div>)}
      {this.state.mode==='plantupdate' ? (<UpdatePlant></UpdatePlant>) :('')}
      </div>
    }
}
    
export default Mypage
