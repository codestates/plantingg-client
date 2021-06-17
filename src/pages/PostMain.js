import React from 'react';
import PostList from './PostList';
import { withRouter } from 'react-router-dom';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import imgA from '../components/image/seokjin.png'

function PostMain({accessToken}) {

  return (
    <>
      <PostList accessToken={accessToken}>
      </PostList>
    </>
  )
}

export default PostMain;