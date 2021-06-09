import React, { Component } from 'react';
import './Intropage.css';

class Intropage extends Component {
  render() {
    return (
      <>
        <main>
          <div className="intro-simple">
            <h1 className="intro-header">Welcome to Plantingg</h1>
            introduction - simple
          </div>
          <div className="intro-detail">
            introduction - detail
          </div>
        </main>
      </>
    )
  }
}

export default Intropage;