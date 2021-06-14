//Postpage
//게시물을 작성하면 보여지는 페이지
//게시물 작성 페이지는 따로

import { useState, useEffect } from 'react'
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'

const [post, updatepost] = useState({
  photo: '',
  content: ''
})


const [viewpost, setview] = useState([])

useEffect(() => {
  axios.get('https://localhost:3000/post/list').then((res) => {
    setview(res.data)
  })
}, [viewpost])

useEffect(() => {
  axios.get("http://plantingg.com/post/list").then((res) => {
    setview(res.data);
  });
}, [viewpost]);

const submitpost = () => {
  axios.post('https://localhost:3000/post/upload', {
    img: post.photo,
    content: post.content,
  }).then(() => {
    alert('등록완료')
  })
}

const getvalue = e => {
  const { name, value } = e.target;
  updatepost({
    ...post,
    [name]: value
  })


  return (
    <div className="App">
      <h1>Post your Plant</h1>
      <div className='post-container'>
        {viewpost.map(p =>
          <div>
            <h2>{p.phote}</h2>
            <div>
              {ReactHtmlParser(p.content)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostList;
