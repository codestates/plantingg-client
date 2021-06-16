import React, { Component } from 'react';
import './Intro.css';
import introVideo from '../components/image/plantingg.mp4';
// import { Player } from 'video-react';



class Intro extends Component {
  render() {
    return (
      <>
        <main className="intropage">
          <div className="intro-header">

          </div>
          <video  id="video" autoPlay muted loop>
            <source src={introVideo} className="introvideo" type="video/mp4" />
          </video>
          <div className="intro-simple">
          </div>
          <div className="intro-detail">
            <h1 className="intro-header">Grow your plants with Plantingg</h1>
            <div className="intro-detail">
              <div className="intro-detail-first"></div>
              <div className="intro-detail-second"></div>
              <div className="intro-detail-third"></div>

            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Intro;

