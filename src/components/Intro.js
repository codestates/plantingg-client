import React, { Component } from 'react';
import './Intro.css';
// import { Player } from 'video-react';


class Intro extends Component {
  render() {
    return (
      <>
        <main className="intropage">
          <div className="intro-simple">
            <form id="video">
              <input
                type="fiile"
                name="video"
                multiple="false"
              />
            </form>
            introduction - simple
          </div>
          <div className="intro-detail">
            <h1 className="intro-header">Grow your plants with Plantting</h1>
            <div className="intro-detail">

              <div className="intro-detail-first">

              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
}

export default Intro;

{/* <video id="video" controls muted autoplay loop playsInline>
  <source src="../public/How" />
</video> */}