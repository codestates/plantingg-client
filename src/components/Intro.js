import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <>
        <main>
          <div className="intro-simple">
            <video mute autoplay loop>
              <source src="" type="video/mp4" />
            </video>
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

export default Intro;