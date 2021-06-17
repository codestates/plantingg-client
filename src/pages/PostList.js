//Postpage
//서버에 올라가있는 list 받아와서 렌더링 하는 페이지

import { useState, useEffect } from 'react'
import axios from 'axios';
import React, { Component } from 'react'
// import CommonTableRow from '../components/table/ColumnTableRow';
// import CommonTableColumn from '../components/table/CommonTableColumn';
// import { postList } from './dummydata'
import { Link } from 'react-router-dom';
import './PostList.css'

// function PostList({accessToken}){
// const [dataList, setDataList] = useState([]);
class PostList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      setDataList: ''
    }
    // this.getFormatDate = this.getFormatDate.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/post/read',
      {
        headers: {
          authorization: this.props.accessToken,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      .then((res) => {
        console.log(`thisisres.data`, res.data)
        this.setState({
          setDataList: res.data
        })
      })
  }

  // getFormatDate = (date) => {
  //   var year = date.getFullYear();              //yyyy
  //   var month = (1 + date.getMonth());          //M
  //   month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
  //   var day = date.getDate();                   //d
  //   day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
  //   return year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  // }

  render() {
    return (
      <div className="mypage-container">
        <h2 className="page-title">Plants diary<i className="fas fa-leaf"></i></h2>

        <span className="postcontainer">
          {
            this.state.setDataList ? this.state.setDataList.map((item, index) => {
              return (

                <div className="postlistcontainer">
                  <div className="postlist" key={index}>
                    {/* <div className="content"> */}
                    <img src={item.image} className="postimg" />
                    {/* </div> */}

                    <div className="content">
                      <div className="text">{item.content}</div>
                      <div className="text">{item.updatedAt}</div>
                    </div>
                  </div>
                </div>

              )
            }) : ('You do not have any posts. Lets start posting with us!')
          }
        </span>
      </div>
    )
  }
}


export default PostList;

  // useEffect(() => {
  //   axios.get("http://plantingg.com/post/list").then((res) => {
  //     setview(res.data);
  //   });
  // }, [viewpost]);

  // const submitpost = () => {
  //   axios.post('https://localhost:3000/post/upload', {
  //     img: post.photo,
  //     content: post.content,
  //   }).then(() => {
  //     alert('등록완료')
  //   })
  // }

  // const getvalue = e => {
  //   const { name, value } = e.target;
  //   updatepost({
  //     ...post,
  //     [name]: value
  //   })
