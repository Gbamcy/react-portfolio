import React from 'react'
import './Project.css'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


const projects = [
  {
    title: "Rhema Church",
    image: "/images/Rema.jpg",
    github: "https://github.com/Gbamcy/Rhema-Church",
    live: "https://Gbamcy.github.io/Rhema-Church"
  },
  {
    title: "Tac",
    image: "/images/tac.jpg",
    github: "https://github.com/Gbamcy/Tac-project",
    live: "https://Gbamcy.github.io/Tac-project"
  },
  {
    title: "myBlog",
    image: "/images/myblog.jpg",
    github: "https://github.com/Gbamcy/blog-project",
    live: "https://Gbamcy.github.io/blog-project"
  }
  // Add more projects
];
const Project = () => {
  return (
      <main className="flex-fill pt-5 mt-5 bg-light text-dark" id="project">
      <div className="container py-5">
        <div className="row gx-3 gy-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card project-card bg-white border-0 shadow-sm h-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "240px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-primary fw-semibold">
                    {project.title}
                  </h5>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <a
                      href={project.github}
                      className="btn btn-sm btn-outline-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={14} className="me-1" /> GitHub
                    </a>
                    <a
                      href={project.live}
                      className="btn btn-sm btn-primary text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt size={13} className="me-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Project
