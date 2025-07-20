import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import {BrowserRouter,NavLink,Link} from "react-router-dom"
import './Footer.css'; // Custom styles

const Footer = () => {
  return (
    <footer className="footer text-white bg-primary py-4 mt-5 " id='footer'>
      <Container>
        <Row className="text-center text-md-start">
          {/* Social Media Links */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Follow Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://wa.me/2347032146138" className="text-white fs-5" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://linkedin.com/in/beke-benjamin-94b98a23b" className="text-white fs-5" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com/benjamin.bek.5" className="text-white fs-5" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://x.com/yourhandle" className="text-white fs-5" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </div>
          </Col>

          {/* Quick Navigation Links */}
          <Col xs={12} md={6}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-center justify-content-md-end gap-3 mb-0">
              <li><NavLink to="/" style={{color:'white'}}>Home</NavLink></li>
              <li><NavLink to="/abouts" style={{color:'white'}}>About</NavLink></li>
              <li><NavLink to="/project" style={{color:'white'}}>Project</NavLink></li>
              <li><NavLink to="/contact" style={{color:'white'}}>Contact</NavLink></li>
            </ul>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        <p className="text-center mb-0 small">
          © {new Date().getFullYear()} Beke Benjamin. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
