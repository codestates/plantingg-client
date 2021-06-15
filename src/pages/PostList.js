//Postpage
//서버에 올라가있는 list 받아와서 렌더링 하는 페이지

import { useState, useEffect } from 'react'
import axios from 'axios';

import CommonTableRow from '../components/table/ColumnTableRow';
import CommonTableColumn from '../components/table/CommonTableColumn';
import { postList } from './dummydata'
import { Link } from 'react-router-dom';
import './PostList.css'

function PostList(props) {
// const [post, updatepost] = useState({
//   photo: '',
//   content: ''
// })

// const [viewpost, setview] = useState([])

// useEffect(() => {
//   axios.get('https://localhost:3000/post/list').then((res) => {
//     setview(res.data)
//   })
// }, [viewpost])

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





const [ dataList, setDataList ] = useState([]);

useEffect(() => {
  setDataList(postList);
}, [ ])

return (
  <>
      {
        dataList ? dataList.map((item, index) => {
          return (
            <div className="post">

              <div className="content">
                <img src={item.image} className="postimg"/>
              </div>

              <div className="content">
              <div className="text">{ item.content }</div>
              <div className="text">{ item.createDate }</div>
              <div className="text">{ item.tag }</div>
              </div>

            </div>
          )
        }) : ('You do not have any posts. Lets start posting with us!')
      }
  </>
)
}


export default PostList;
