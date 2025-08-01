import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'; // Add custom animation and styling here
import Rose from '../../assets/tech-icon/rose.jpg';




const Landing = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionRef.current.classList.add("fade-in");
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container-fluid py-5"
      style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}
    >
      <div className="row justify-content-center align-items-center">
        {/* Text Column */}
        <div className="col-lg-6 col-md-12 mb-4 text-center text-lg-start">
          <h1 className="fw-bold display-5 mb-3">Hi, I'm Benjamin 👋</h1>
          <p className="lead mb-4">
            A passionate Frontend Developer based in Abuja, Nigeria. I build responsive and interactive websites using React, JavaScript and modern web technologies. Let's bring ideas to life on the web.<img src={Rose} style={{height:20}}/>
          </p>
          <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
            <a
              href="https://github.com/gbamcy"
              className="btn btn-dark btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="/MyCV.pdf"
              download
              className="btn btn-outline-dark btn-sm"
            >
              Download CV
            </a>
          </div>
          
        </div>

        {/* Image Column */}
        <div className="col-lg-4 col-md-8 text-center">
          <img
            src="/images/pix2.png" alt="My profile" style={{ width: "400px", borderRadius: "10px" }} 
            className="img-fluid rounded shadow-sm"
            
            />
          
        </div>
      </div>
    </section>
  );
};

export default Landing;
