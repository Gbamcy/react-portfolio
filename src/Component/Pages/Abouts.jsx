
import "./Abouts.css"
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
  return (<section className="bg-light py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-12 col-md-3 text-center mb-4 mb-md-0">
            <img
              src="/images/profile1.png"
              alt="Gbancy Ben"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "220px" }}
            />
          </div>

          {/* Text Column */}
          <div className="col-12 col-md-9">
            <h1 className="text-primary mb-3 fw-bold">About Me</h1>
            <p className="lead">
              I’m a frontend developer, a passion for technology led me into the world of web development where I’ve spent the past year building responsive and user-friendly web applications using React.js and modern web tools. I thrive on creating elegant solutions, continuously learning, and transforming ideas into functional interfaces.
            </p>

    
            {/* Tech Stack */}
            <h5 className="mt-4 text-primary">Tech Stack</h5>
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
  )
}

export default Abouts
