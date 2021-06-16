import { useState, useEffect } from 'react';
import './Newpost.css';
import axios from 'axios';


function Newpost({ accessToken, isLogin }) {
  console.log('newpost isLogin:', isLogin)
  const [content, setContent] = useState('');
  // const [image, setImage] = useState('');
  const [tag, setTag] = useState('');
  const [errorMessage, setErrorMesssage] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [imgUrl, setImgUrl] = useState('이미지');

  function handleOnChange(e) {
    e.preventDefault();
    setContent(e.target.value);
  }

  function handleUploadImg(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    setImgFile(file);
    // console.log(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleChooseTag(e) {
    e.preventDefault();
    setTag(e.target.value);
  }

  // new post에서는 img와 content를 업로드하고 백엔드로 
  function handlePostSubmit(e) {
    // const formData = new FormData();
    // formData.append('imgFile', file);
    console.log('게시물 올리는 중')

    if (!content) {
      setErrorMesssage('내용을 입력하세요.')
      return;
    }
    else {
      axios.post('http://localhost:4000/post/create', {
        content: content,
        image: imgUrl
      }, {
        headers: {
          authorization: accessToken,
          // "Content-Type": "application/json",
        }, withCredentials: true
      })
        .then(res => {
          console.log('res : ', res);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <>
      <section className="newpost-page">
        <h2>Create your plantingg branch<i className="fas fa-leaf"></i></h2>
        <div className="newpost-container">
          <div className="newpost-image-container">
            <img className='profile_preview' src={imgUrl} />
            <input className="newpost-fileupload" type='file' accept="image/*" onChange={handleUploadImg}></input>
            {/* <button className="newpost-fileupload-fakebtn">Image upload</button> */}
            <div className="selectbox-container">
              <select onClick={handleChooseTag} className="select-box" value="4" multiple={true}>
                <option className="select-box-items">herb</option>
                <option className="select-box-items">tree</option>
                <option className="select-box-items">flower</option>
                <option className="select-box-items">edible</option>
              </select>
              <select onClick={handleChooseTag} className="select-box" value="4" multiple={true}>
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



// const setFile(e) {
//   if (e.target.files[0]) {
//     const img = newFormData();
//     img.append("file", e.target.files[0]);
//     axios.post("http://localhost:4000/post/create", img)
//       .then(res => {
//         setImgUrl(res.data);
//       })
//       .catch(err => console.log(err));
//   }
// }



// function handleUploadImg(e) {
//   e.preventDefault();
//   let reader = new FileReader();
//   const file = e.target.files[0];
//   console.log(file)  // 콘솔 잘찍힘

//   reader.onload = () => {
//     console.log('reader : ', reader)  // 콘솔 잘찍힘
//     setImgFile(file) // ImgFile(상태)에 file 을 넣어줌
//     setImgUrl(reader.result) // render.result를 ImgUrl(상태)로 넣어줌
//   }
//   reader.readAsDataURL(file); // file을 url로 변환시킴
// }


  // function handleUploadImg(e) {
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   const file = e.target.files[0];
  //   console.log('file :', file)  // input file에서 파일 선택시 콘솔 찍힘

  //   reader.onload = () => {
  //     const base64 = reader.result;
  //     if (base64) {
  //       setImgUrl(base64.toString())
  //       console.log('imgUrl 확인 : ', imgUrl)
  //     }
  //     console.log('reader : ', reader)  // input file에서 파일 선택시 콘솔 찍힘
  //     setImgFile(file) // ImgFile(상태)에 file 을 넣어줌 => 이미지 문자열로 변환 전 쌩파일이름
  //   }
  //   reader.readAsDataURL(file)
  // }