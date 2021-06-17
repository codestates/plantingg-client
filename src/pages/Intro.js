import React, { Component } from "react";
import "./Intro.css";
import introVideo from "../components/image/plantingg.mp4";
import diary from "../components/image/diary.png";
import character from "../components/image/허브맛.png";
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
            <div className="intro-title">Grow your plants with Plantingg!</div>
          </div>
          <div className="box">
            <div className="subtitle">
              당신만의 식물 다이어리를 만들어 보세요!
            </div>
            <div>
              <img className="diary-image" src={diary}></img>
              <div className="description1">빠르고, 간단하게!</div>
              <div className="description2">
                매일 당신의 식물을 사진과 함께 업로드 하세요.
                <br />
                식물이 차곡차곡 쌓입니다.
              </div>
            </div>
          </div>
          <div className="intro-box1">
            <div className="intro-subtitle">Plantingg의 기능</div>
            <div className="mini-box1">
              <div classsName="feature1">
                Picture
                <br />
                <i class="fas fa-camera"></i>
                <h5 classsName="intro-content">
                  Follow your plants and ares development over time.
                  <br />
                  Document events with images.
                </h5>
              </div>
            </div>
            <div className="mini-box2">
              <div classsName="feature2">
                computer
                <br />
                <i class="fas fa-desktop"></i>
                <div classsName="intro-content">
                  A big screen gives you great overview.
                  <br />
                  The keyboard contributes to easy enter and edit.
                </div>
              </div>
            </div>
          </div>
          <div className="intro-box2">
            <div className="intro-subtitle">좋은 다이어리를 작성하는 TIP</div>
            <div>
              <div className="tip1">이런 점은 주의해 주세요.</div>
              <div className="tip2">이런 점은 참고해 주세요.</div>
            </div>
          </div>
          <div className="intro-box3">
            <div className="intro-subtitle">사용자들의 Plantingg 후기!</div>
            <div>
              <div className="list1">
                Plantingg is the only app
                <br />
                I need to make sure works!
                <br />
                <div className="intro-character">
                  <img className="character" src={character}></img>
                </div>
              </div>
              <div className="list2">
                I just discovered this site today
                <br />
                and I am totally in love!
                <br />
                <div className="intro-character">
                  <img className="character" src={character}></img>
                </div>
              </div>
              <div className="list3">
                The perfect app to keep
                <br />
                track of all my plants!
                <br />
                <div className="intro-character">
                  <img className="character" src={character}></img>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Intro;
