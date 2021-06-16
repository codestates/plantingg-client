import axios from 'axios'
import React, { useState } from 'react'
axios.defaults.withCredentials = true;

export default function UpdateMyPage({setWelcome, setImg, setName, setMsg }) {

  const [image, setImage] = useState('');
  const [currentstatus, setContent] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [imgUrl, setImgUrl] = useState('이미지');
  const [name, setusername] = useState('')
  const [errorMessage, setErrorMesssage] = useState('');

  function handleOnChange(e) {
    setContent(e.target.value);
    e.preventDefault();
  }

  function handleOnChangename(e) {
    setusername(e.target.value);
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

  function handlePostSubmit(){
    setImg(imgUrl)
    setName(name)
    setMsg(currentstatus)
    setWelcome()
  }



  // const updateUserInfo = () => {
  //   console.log(props.accessToken);
  //   axios
  //     .patch(
  //       `http://localhost:4000/user/userinfo`,
  //       { imgUrl, currentstatus },
  //       {
  //         headers: {
  //           authorization: props.accessToken,
  //           "Content-Type": "application/json",
  //           withCredentials: true,
  //         },
  //       }
  //     )
  //     .then(res => {
  //       console.log("업데이트 완료");
  //       console.log(res.data);
  //     });
  // };

  return ( // 상태 어떻게 바꿀래
    <>
      <section className="newpost-page">
        <div className="newpost-container">
          <div className="newpost-image-container">
            <img className='profile_preview' src={imgUrl} />
            <input className="newpost-fileupload" type='file' accept="image/*" onChange={handleUploadImg}></input>
          </div >
          <div className="newpost-contentbox">
            <input onChange={handleOnChangename} placeholder="Update your username" ></input>
            <textarea
              onChange={handleOnChange}
              className="newpost-content"
              placeholder="Update your StatusMessage"
            ></textarea>
            <button className="newpost-post-btn btn" onClick={handlePostSubmit}>게시물 올리기 버튼</button>
          </div>
        </div>
      </section>
    </>
  )
}