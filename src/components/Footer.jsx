import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h3 className="footer-header">Grow your plants with Plantingg</h3>
        <section className="footer-container">
          <i className="fas fa-map-marker-alt icon"></i>
          <div className="footer-address  footer-content">570, Songpa-daero, Songpa-gu, Seoul, Republic of Korea</div>
          <i className="fas fa-envelope icon"></i>
          <div className="footer-mail footer-content">plantingg_cs@plantingg.com</div>
          <i className="fas fa-phone-alt icon"></i>
          <div className="footer-call footer-content">+82 70-0302-2021</div>
        </section>
        <div className="footer-copyright">&copy; 2021 plantingg, Inc.</div>
      </footer >
    </>
  )
}

export default Footer;