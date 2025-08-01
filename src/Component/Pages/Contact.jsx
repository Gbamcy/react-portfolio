import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaMobileAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Contact.css"; // For additional styles
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("xpwlrapj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="flex-fill pt-5 mt-5 bg-light" id="contact">
      <div className="container py-5">
        <h1 className="text-center text-dark fw-bold mb-5">Contact Me Directly</h1>

        <div className="row g-4">
          {/* Card 1: Contact Info */}
          <div className="col-md-4" data-aos="fade-up">
            <div className="bg-white p-4 rounded shadow-sm h-100 contact-card">
              <h5 className="text-dark mb-4">Contact Information</h5>

              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="text-dark me-3 fs-5" />
                <span>ushabeks@gmail.com</span>
              </div>

              <div className="d-flex align-items-center mb-3">
                <FaPhoneAlt className="text-dark me-3 fs-5" />
                <span>+234 703 214 6138</span>
              </div>

              <div className="d-flex align-items-center">
                <FaMapMarkerAlt className="text-dark me-3 fs-5" />
                <span>
                  <img
                    src="https://flagcdn.com/w40/ng.png"
                    alt="Nigeria"
                    width="24"
                    className="me-2 rounded-circle"
                  />
                  Area 3 Garki Abuja, Nigeria.
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Contact Form */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white p-4 rounded shadow-sm h-100 contact-card">
              <h5 className="text-dark mb-4">Send a Message</h5>
              <form onSubmit={handleSubmit} action="https://formspree.io/f/xpwlrapj" method="post">
                <label htmlFor="name">
                 Full Name
                 </label>
                 <input
                  id="name"
                  type="text" 
                   name="name"
                   className="form-control"
                   />
                  <ValidationError 
                   prefix="name" 
                   field="text"
                    errors={state.errors}
                    />
                    <label htmlFor="phone">
                     Mobile Number
                    </label>
                    <input
                    id="phone"
                    type="tel" 
                    name="phone"
                    className="form-control"
                    />
                   <ValidationError 
                  prefix="phone" 
                  field="tel"
                  errors={state.errors}
                  />
                  <label htmlFor="message">
                     Message
                    </label>
                 <textarea
                 id="message"
                 name="message"
                 className="form-control mb-3"
                 />
                 <ValidationError 
                 prefix="Message" 
                 field="message"
                  errors={state.errors}
                  />
                 <button type="submit" className="btn btn-outline-dark btn-md" disabled={state.submitting}>
                  Submit
                  </button>
                </form> 
            </div>
          </div>

          {/* Card 3: Map */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white p-3 rounded shadow-sm h-100 contact-card">
              <h5 className="text-dark mb-3">My Location</h5>
              <div className="ratio ratio-4x3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.6111099874537!2d7.495401975851512!3d9.033890088088226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a7c0131fd7d%3A0x837b12c91b8d960a!2sArea%203%2C%20Garki%2C%20Abuja!5e0!3m2!1sen!2sng!4v1721986602247!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Area 3 Garki Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
