import axios from 'axios'
import React, { useState } from 'react'
import './UpdateMypage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
//import imgA from '../components/image/profile.png'
export default function UpdateMyPage({ setWelcome, setImg, setName, setMsg }) {
  axios.defaults.withCredentials = true;

  const [image, setImage] = useState('');
  const [currentstatus, setContent] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [imgUrl, setImgUrl] = useState('');
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

  function handlePostSubmit() {
    setImg(imgUrl)
    setName(name)
    setMsg(currentstatus)
    setWelcome()
  }

  return (
    <>
      <section className="newpost-page">
        <div className="container">
          <div className="newpost-image-container">
            <img className='preview' src={imgUrl} />
            <input className="updatepost" name="file" id="file" type="file" accept="image/*" onChange={handleUploadImg} /><label for="file"><i class="fas fa-upload"></i>Find file</label>
          </div >
          <div className="updatebox">
            <input onChange={handleOnChangename} className="usernameprofile" placeholder="Update your username" ></input>
            <input onChange={handleOnChange} className="contentprofile" placeholder="Update your StatusMsg"
            ></input>
            <button className="newprofile" onClick={handlePostSubmit}><FontAwesomeIcon icon={faPen} />Update myinfo</button>
          </div>
        </div>
      </section>
    </>
  )
}