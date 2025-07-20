
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaMobileAlt,
} from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  return (
    
      <main className="flex-fill pt-5 mt-5 bg-light" id="contact">
        <div className="container py-5">
          <h2 className="text-center text-primary fw-bold mb-5">Contact Me</h2>

          <div className="row g-4">
            {/* Grid 1 - Contact Info */}
            <div className="col-md-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h5 className="text-primary mb-4">Contact Information</h5>

                <div className="d-flex align-items-center mb-3">
                  <FaEnvelope className="text-primary me-3" />
                  <span>ushabeks@gmail.com</span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FaPhoneAlt className="text-primary me-3" />
                  <span>+234 703 214 6138</span>
                </div>

                <div className="d-flex align-items-center">
                  <FaMapMarkerAlt className="text-primary me-3" />
                  <span>
                    <img
                      src="https://flagcdn.com/w40/ng.png"
                      alt="Nigeria"
                      width="24"
                      className="me-2 rounded-circle"
                    />
                    Area 3 Federal Secretariat Abuja, Nigeria
                  </span>
                </div>
              </div>
            </div>

            {/* Grid 2 - Contact Form */}
            <div className="col-md-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h5 className="text-primary mb-4">Send a Message</h5>
                <form>
                  <div className="mb-3 input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="mb-3 input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FaMobileAlt />
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Grid 3 - Google Map */}
            <div className="col-md-4">
              <div className="bg-white p-3 rounded shadow-sm h-100">
                <h5 className="text-primary mb-3">My Location</h5>
                <div className="ratio ratio-4x3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.578710372582!2d7.497425114783745!3d9.03657759350057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a7a2bace2cb%3A0x91f502d4f60e3d19!2sFederal%20Secretariat%2C%20Area%201%2C%20Garki%2C%20Abuja!5e0!3m2!1sen!2sng!4v1625838412345!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Federal Secretariat Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Contact



