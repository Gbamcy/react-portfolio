import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A React-based personal portfolio website showcasing my skills, projects, and resume.",
    image: "/images/react2.jpg",
    github: "https://github.com/gbamcy/react-portfolio",
    demo: "https://ben-portfolio-2025.netlify.app",
    tech: ["React js"]
  },
  {
    title: "Rhema Church site",
    description: "A church website with paystack functionality, members can request for prayers, Bible study etc.Admin approves it, make donations to church account, Admin can make post,edit and delete it.middleware.",
    image: "/images/Rema.jpg",
    github: "https://github.com/gbamcy/react-portfolio",
    demo: "https://qrcodescanner.netlify.app",
    tech: ["Laravel","PHP","MySQL"]
  },
  {
    title: "Tac Microfinance app",
    description: "A simple microfinance app with e-wallet in which member can apply for a loan, admin aproves it, payback loan, calculate loan due date etc.CRUD functionality and middleware for admins and users respectively.",
    image: "/images/tac.jpg",
    github: "https://github.com/gbamcy/sky-app",
    demo: "https://myweatherapp.netlify.app",
    tech: ["Laravel","PHP","MySQL"]
  },
  {
    title: "Personal blog App",
    description: "A simple blog app built with laravel with RESTful API's,middleware,admin panel and authentication.users can comment and make post. Admin can create,read, update and delete post.",
    image: "/images/myblog.jpg",
    github: "https://github.com/yourname/countdown-app",
    demo: "https://countdownapp.netlify.app",
    tech: ["Laravel","PHP","MySQL"]
  },
   {
    title: "Countdown App",
    description: "Countdown timer app built to track the days leading to my late Father's burial.",
    image: "/images/countdown.jpg",
    github: "https://github.com/yourname/countdown-app",
    demo: "https://countdownapp.netlify.app",
    tech: ["JavaScript"]
  },
   {
    title: "Countdown App",
    description: "Countdown timer app built to track the days leading to a special event.",
    image: "/images/countdown.jpg",
    github: "https://github.com/yourname/countdown-app",
    demo: "https://countdownapp.netlify.app",
    tech: ["JavaScript"]
  }
];

const allTechs = ["All", ...new Set(projects.flatMap(p => p.tech))];

const Project = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6); // initial visible projects

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.tech.includes(filter));

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="py-5 bg-white text-dark" id="projects">
      <div className="container">
        <h4 className="fw-semibold text-dark mb-4 text-center">Each project is a unique pieace of development</h4>

        {/* Filter Buttons */}
        <div className="text-center mb-4">
          {allTechs.map((tech, idx) => (
            <button
              key={idx}
              className={`btn btn-sm mx-1 mb-2 ${filter === tech ? 'btn-dark' : 'btn-outline-dark'}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="row g-4">
          {visibleProjects.length === 0 ? (
            <div className="col-12 text-center">
              <p className="text-muted">No projects found.</p>
            </div>
          ) : (
            visibleProjects.map((project, index) => (
              <div
                className="col-md-4 col-sm-6"
                key={index}
                data-aos="fade-up"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="card h-100 shadow-sm border-0"
                  // style={{ transition: "transform 0.3s" }}
                  // onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
                  // onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  <img
                    src={project.image}
                    className="card-img-top img-fluid"
                    alt={project.title}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-semibold">{project.title}</h5>
                    <p className="card-text small text-muted">{project.description}</p>
                    <p className="mb-2">
                      <strong>Tech:</strong> {project.tech.join(", ")}
                    </p>
                    <div className="mt-auto d-flex gap-2">
                      <a
                        href={project.github}
                        className="btn btn-outline-dark btn-sm d-flex align-items-center"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="me-1" /> GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="btn btn-dark btn-sm d-flex align-items-center"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaExternalLinkAlt className="me-1" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={() => setVisibleCount(prev => prev + 3)}
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          onClick={() => setSelectedProject(null)}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={e => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="img-fluid mb-3 rounded"
                />
                <p>{selectedProject.description}</p>
                <p><strong>Tech Stack:</strong> {selectedProject.tech.join(", ")}</p>
              </div>
              <div className="modal-footer">
                <a
                  href={selectedProject.github}
                  className="btn btn-outline-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="me-1" /> GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  className="btn btn-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt className="me-1" /> Live Demo
                </a>
                <button
                  className="btn btn-dark"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
