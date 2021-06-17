import React, { Component } from "react";
import "./Intro.css";
import introVideo from "../components/image/plantingg.mp4";
import diary from "../components/image/diary.png";
import herb from "../components/image/허브맛.png";
import profile from "../components/image/profile.png";
import peach from "../components/image/복숭아맛쿠키.png";
import cream from "../components/image/슈크림맛쿠키.png";


// import { Player } from 'video-react';

class Intro extends Component {
  render() {
    return (
      <>
        <main className="intropage">
          <div className="intro-header"></div>
          <video className="video" autoPlay muted loop>
            <source src={introVideo} type="video/mp4" />
          </video>
          <div>
            <div className="intro-title">Grow your plants with Plantingg</div>
          </div>
          <div className="intro-box1">
            <div className="intro-subtitle">Make your own plant diary</div>
            <div className="intro-first-container">
              <div className="intro-desc-box">
                <h2 className="intro-desc-main"> Quick and simple!</h2>
                <div className="intro-desc">
                  Upload your plants with pictures every day. <br />
                  Your plants will be piled up one by one!
              </div>
              </div>
              <img className="diary-image" src={diary}></img>
            </div>
          </div>
          <section className="intro-box2andbox3">
            <div className="intro-box2">
              <div className="intro-subtitle">Features of Plantingg</div>
              <div className="minibox12-container">
                <div className="mini-box1">
                  <h5 className="feature1">Picture</h5>
                  <i className="fas fa-camera fa-2x"></i>
                  <div className="intro-func-desc">Follow your plants and ares development over time.
                  Document events with images.
              </div>
                </div>
                <div className="mini-box1">
                  <h5 className="feature1">Computer </h5>
                  <i className="fas fa-desktop fa-2x"></i>
                  <div className="intro-func-desc">A big screen gives you great overview.
                  The keyboard contributes to easy enter and edit.
                </div>
                </div>
              </div>
            </div>
            <div className="intro-box2">
              <div className="intro-subtitle">TIP for making a good diary</div>
              <div className="intro-tip-container">
                <div className="intro-tip-desc">
                  <h5 className="feature1">tip 1 </h5>
                  <i class="far fa-lightbulb fa-2x" ></i>
                  <p className="intro-func-desc">Don't edit too many plant pictures! Excessive Photoshop makes it difficult to remember the true appearance of plants.</p>
                </div>
                <div className="intro-tip-desc">
                  <h5 className="feature1">tip 2 </h5>
                  <i class="far fa-lightbulb fa-2x" ></i>
                  <p className="intro-func-desc">Does the plant hurt? <br />Track your symptoms against healthy photos!</p>
                </div>
              </div>
            </div>
          </section>
          <div className="intro-box4">
            <div className="intro-subtitle">User's review of Plantingg<i className="fas fa-leaf"></i> </div>
            <div className="intro-list-box">
              <div className="intro-list">
                <p className="intro-func-desc">I just discovered this site today <br /> and I am totally in love!</p>
                <img className="character" src={peach}></img>
              </div>
              <div className="intro-list">
                <p className="intro-func-desc">The perfect app to keep<br />track of all my plants!</p>
                <img className="character" src={herb}></img>
              </div>
              <div className="intro-list">
                <p className="intro-func-desc">Plantingg is the only app<br />I need to make sure works!</p>
                <img className="character" src={cream}></img>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Intro;