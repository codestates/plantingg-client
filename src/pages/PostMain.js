import React from 'react';
import PostList from './PostList';
import { withRouter } from 'react-router-dom';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
function PostMain({accessToken}) {

  return (
    <>

      <h2 >Post your plant</h2>
      <PostList accessToken={accessToken}/>

    </>
  )
}

export default PostMain;