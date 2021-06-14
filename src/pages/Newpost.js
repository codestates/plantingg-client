import { useState, useEffect } from 'react';
// import './App.css';
//import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import ReactHtmlParser from 'react-html-parser';
//import Axios from 'axios';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Newpost.css';
import axios from 'axios';


function Newpost() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [tag, setTag] = useState('');
  const [errorMessage, setErrorMesssage] = useState('');

  function handleOnChange(e) {
    setContent(e.target.value);
    e.preventDefault();
  }

  function handleUploadImg(e) {
    setImage(e.target.files[0])
    console.log('이미지 파일 선택')
  }

  function handleChooseTag(e) {
    setTag(e.target.value)
  }

  // new post에서는 img와 content를 업로드하고 => 백엔드로 보내고
  // mypage에서 response로 이미지 URL 받고 상태에 저장 => 다시 백엔드로 보냄 
  function handlePostSubmit() {
    console.log('게시물 올리는 중')

    if (!image && !content && !tag) {
      setErrorMesssage('내용을 입력하세요.')
    }

    axios.post('http://localhost:3000/post/create', {
      content: content,
      image: image,
      tag: tag,
    },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }


  return (
    <>
      <section className="newpost-page">
        <h2>Create your plantingg branch</h2>
        <div className="newpost-container">
          <div className="newpost-image-container">
            <div class="newpost-image-space">이미지 선택하면 올라갈 자리</div>
            <input
              type="file"
              accept="*"
              className="newpost-image"
              onChange={null}
              onClick={handleUploadImg}
              placeholder="share your plant's story"
            />
            {/* <button
              className="newpost-image-btn btn"
              onClick={handleUploadImg}
            >이미지 업로드</button> */}
            <select onClick={handleChooseTag} className="select-box" size="4" multiple>
              <option className="select-box-first" value="">herb</option>
              <option className="select-box-second" value="">tree</option>
              <option className="select-box-third" value="">flower</option>
              <option className="select-box-fourth" value="">edible plants</option>
            </select>
          </div >
          <div className="newpost-contentbox">
            <textarea
              className="newpost-content"
              onChange={handleOnChange}
            ></textarea>
            <button
              className="newpost-post-btn btn"
              onClick={handlePostSubmit}
            >게시물 올리기 버튼</button>
          </div>

        </div>

      </section>
    </>
  )
}

export default Newpost;

// 이미지 파일을 선택하면 화면에 보여야함
// 게시글 적고, 게시물 올리기 버튼을 클릭하면 백엔드로 전송 후 데이터 저장 (사진 + 게시물)

// 게시물 올리기 버튼을 클릭했을 때, 이미지나 본문 내용이 아무것도 없다면 데이터 전송되면 안됨