
import "./Home.css"
import profile1 from '../../assets/profile1.png'
import {Container,Row,Col} from 'react-bootstrap'
import hand from '../../assets/tech-icon/hand.jpg'
import rose from '../../assets/tech-icon/rose.jpg'
import {  BiLogoGithub } from 'react-icons/bi';

import { FaDownload, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const Home = () => {


  return (
    <div className="container " id="home">
        <div className="row align-items-center">
          {/* Description Section */}
          <div className="col-12 col-md-7 mb-4">
            <h1 className="mb-3 fw-bold text-primary" id="homehead">Frontend React Developer </h1>
            <p className="lead" id="homePara">
              I'm <strong>Benjamin</strong> from abuja,Nigeria. A passionate frontend developer who builds
              responsive web apps using modern design principles. I turn
              ideas into stunning interfaces that work flawlessly across devices.
            </p>

            {/* Contact Info */}
              <p className="homeContact">
              <FaEnvelope className="me-2 text-primary" />
              <a href="mailto:ushabeks@gmail.com" className="text-dark text-decoration-none">ushabeks@gmail.com</a>
            </p>
            <p className="homeContact">
              <FaMapMarkerAlt className="me-2 text-primary" />
              Abuja, Nigeria
            </p>

            {/* Buttons */}
            <div className="d-flex gap-3 flex-wrap mt-4">
              <a
                href="/MyCV.pdf"
                download="MyCV.pdf"
                className="btn btn-primary d-flex align-items-center"
                
              >
                <FaDownload className="me-2" />
                Download CV
              </a>

              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary d-flex align-items-center"
                id="homebutn"
              >
                <FaGithub className="me-2" />
                GitHub
              </a>
            </div>
          </div>

          {/* Image + Side Info */}
          <div className="col-12 col-md-3 offset-md-2 text-center">
            <img
              src="/images/pix2.png"
              alt="Ben"
              className="rounded-circle shadow img-fluid mb-3"
              style={{ maxWidth: "180px" }}
            />
            {/* <h5 className="fw-bold">Benjamin</h5>
            <p className="text-muted">React Developer</p> */}
          </div>
        </div>
      </div>
    
    //   <Container className="home py-5" id="home">
    //   <Row className="justify-content-center align-items-center">
    //     {/* Text Section */}
    //     <Col xs={12} md={6} lg={6} className="mb-4 mb-md-0">
    //       <div className="headtitle mb-3">
    //         <h1 className="fw-bold display-5 text-primary">
    //           Front-End React <br /> Developer{' '}
    //           <img src={hand} alt="wave" style={{ height: 25 }} />
    //         </h1>
    //       </div>
    //       <p className="lead mb-4 p-3 ">
    //         I'm Benjamin Beke, a passionate Front-End React Developer based in Abuja Nigeria. I have a year of hands-on
    //         experience creating dynamic and responsive web applications. Let's connect and bring
    //         innovative ideas to life! <img src={rose} alt="rose" className="p-4" style={{ height: 20 }} />
    //       </p>

    //       <ul className="list-unstyled d-flex align-items-center gap-3">
    //         <li className="cv">
    //           <div className="text-center ">
    //         <a
    //           href="/MyCV.pdf"
    //           download="MyCV.pdf"
    //           className="btn btn-primary btn-md"
    //         >
    //           <FaDownload className="me-1" />
    //           Download Cv
    //         </a>
    //       </div>
            
    //       </li>
            
    //         <li className="git"><a href="" className="btn btn-primary btn-md"><BiLogoGithub className="me-1" size={20} /></a></li>
    //       </ul>
    //     </Col>

    //     {/* Profile Section */}
    //     <Col xs={12} md={4} lg={4}>
    //       <div className="profile text-center">
    //         <img src={profile1} alt="profile" className="image img-fluid rounded-circle shadow" style={{height:150}}/>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
    
  )
}

export default Home
