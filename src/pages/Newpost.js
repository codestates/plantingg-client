import { useState, useEffect } from 'react';
import './Newpost.css';
import axios from 'axios';


function Newpost({ accessToken, isLogin }) {
  console.log('newpost isLogin:', isLogin)
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [tag, setTag] = useState('');
  const [errorMessage, setErrorMesssage] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [imgUrl, setImgUrl] = useState('이미지');

  function handleOnChange(e) {
    setContent(e.target.value);
    e.preventDefault();
  }

  function handleUploadImg(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImgFile(file)
      setImgUrl(reader.result)
    }
    reader.readAsDataURL(file);
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

    axios.post('http://localhost:4000/post/create', {
      content: content,
      image: image,
      tag: tag,
    }, {
      headers: {
        authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }, withCredentials: true
    })
      .then(res => {
        console.log('res : ', res);
        isLogin(true)
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <section className="newpost-page">
        <h2>Create your plantingg branch<i class="fas fa-leaf"></i></h2>
        <div className="newpost-container">
          <div className="newpost-image-container">
            <img className='profile_preview' src={imgUrl} />
            <input className="newpost-fileupload" type='file' accept="image/*" onChange={handleUploadImg}></input>
            {/* <button className="newpost-fileupload-fakebtn">Image upload</button> */}
            <div className="selectbox-container">
              <select onClick={handleChooseTag} className="select-box" value="4" multiple>
                <option className="select-box-items">herb</option>
                <option className="select-box-items">tree</option>
                <option className="select-box-items">flower</option>
                <option className="select-box-items">edible</option>
              </select>
              <select onClick={handleChooseTag} className="select-box" value="4" multiple>
                <option className="select-box-items">cactus</option>
                <option className="select-box-items">succulent</option>
                <option className="select-box-items">scent</option>
                <option className="select-box-items">etc</option>
              </select>
            </div>
          </div >
          <div className="newpost-contentbox">
            <textarea
              className="newpost-content"
              onChange={handleOnChange}
              placeholder="내용을 입력하세요"
            ></textarea>
            <button className="newpost-post-btn btn" onClick={handlePostSubmit}>Post</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newpost;
