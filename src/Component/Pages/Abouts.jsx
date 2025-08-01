import "./Abouts.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaPhp,
  FaReact,
  FaDatabase,
  FaLaravel,
} from "react-icons/fa";

const Abouts = () => {
  return (
    <section className=" py-5 fade-up" id="about" style={{background:'white'}}>
      <div className="container">
        <div className="row justify-content-center align-items-center">

          {/* Profile Image */}
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/images/profile1.png"
              alt="Gbancy Ben"
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "200px" }}
            />
          </div>

          {/* About Text */}
          <div className="col-12 col-md-6">
            <h1 className="fw-bold text-dark mb-3">About Me</h1>
            <p className="lead">
              I' specialize in building modern, scalable, and user-focused web applications using React, PHP, JavaScript, and Laravel.

               With a solid foundation in both frontend and backend development. Whether I’m creating dynamic single-page applications with React, building robust REST APIs with Laravel, or adding seamless interactivity with JavaScript.

               I believe in writing code that not only works but also makes sense — code that’s easy to understand, efficient to run, and ready to scale. Let’s build something great.!

            </p>

            {/* Tech Stack */}
            <h5 className="mt-4 text-dark">Tech Stack</h5>
            <div className="d-flex flex-wrap gap-4 fs-2 mt-3">
              <FaHtml5 title="HTML5" className="text-danger" />
              <FaCss3Alt title="CSS3" className="text-primary" />
              <FaJsSquare title="JavaScript" className="text-warning" />
              <FaBootstrap title="Bootstrap" className="text-info" />
              <FaPhp title="PHP" className="text-secondary" />
              <FaReact title="React.js" className="text-info" />
              <FaLaravel title="Laravel" className="text-danger" />
              <FaDatabase title="MySQL" className="text-success" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouts;
