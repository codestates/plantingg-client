import { useState, useEffect } from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';

function Newpost() {
  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  })