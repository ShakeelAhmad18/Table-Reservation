import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

    const handleTop=()=>{
        window.scrollTo(0,0);
    }

  return (
    <div>
     <footer className="footer-area mt-30 bg-primary-light">
    <div className="go-top" onClick={handleTop}><i className="fal fa-long-arrow-up"/></div>
    <div className="footer-top pt-100 pb-70 text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="navbar-brand mt-10">
              <span />
              <a href="index.html" target="_self" title="Link" >
                <img src="assets/images/logo/logo1.png" alt="Brand Logo" />
              </a>
              <span />
            </div>
            <ul className="info-list mt-20">
              <li>
                <a href="mailto:live@example.com">live@example.com</a>
              </li>
              <li>
                <a href="tel:9992233555">+999 22 33 5555</a>
              </li>
            </ul>
            <div className="social-link mt-20">
              <a href="https://www.instagram.com/" target="_blank" title="instagram"><i className="fab fa-instagram" /></a>
              <a href="https://www.dribbble.com/" target="_blank" title="dribbble"><i className="fab fa-dribbble" /></a>
              <a href="https://www.twitter.com/" target="_blank" title="twitter"><i className="fab fa-twitter" /></a>
              <a href="https://www.youtube.com/" target="_blank" title="youtube"><i className="fab fa-youtube" /></a>
            </div>
            <div className="newsletter-form mx-auto mt-30">
              <form id="newsletterForm">
                <div className="form-group">
                  <input className="form-control" placeholder="Enter email here..." type="text" name="EMAIL" required autoComplete="off" />
                  <button className="btn btn-md btn-primary btn-gradient no-animation" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
            <ul className="footer-links list-unstyled mt-30">
              <li className="nav-item">
                <Link to="/" className="nav-link" target="_self" title="link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" target="_self" title="link">Table</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" target="_self" title="link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" target="_self" title="link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right-area border-top ptb-30">
      <div className="container">
        <div className="copy-right-content">
          <span>
            Copyright <i className="fal fa-copyright" /><span id="footerDate" /> <a href="index.html" target="_self" title="Bookapp" className="color-primary">Slotsmart</a>. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
