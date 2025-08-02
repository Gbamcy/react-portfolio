import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpwlrapj"); // Your Formspree ID
  const [successMessage, setSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setSuccessMessage(true);
      setFormData({ name: "", phone: "", message: "" });

      const timer = setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", phone: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Full name is required";
      valid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message cannot be empty";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleValidatedSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Left Grid - Contact Info */}
        <div className="col-md-6" data-aos="fade-up">
          <div className="bg-light p-4 rounded shadow-sm h-100">
            <h5 className="text-dark mb-4">Contact Information</h5>
            <div className="d-flex align-items-start mb-3">
              <FaEnvelope className="text-primary me-3 mt-1" />
              <div>
                <h6 className="mb-1">Email</h6>
                <p className="mb-0">ushabeks@gmail.com</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <FaPhoneAlt className="text-success me-3 mt-1" />
              <div>
                <h6 className="mb-1">Mobile</h6>
                <p className="mb-0">+234 7032146138</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <FaMapMarkerAlt className="text-danger me-3 mt-1" />
              <div>
                <h6 className="mb-1">Location</h6>
                <p className="mb-0">Abuja, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Grid - Form */}
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-white p-4 rounded shadow-sm h-100 contact-card">
            <h5 className="text-dark mb-4">Send a Message</h5>

            {successMessage && (
              <div className="alert alert-success d-flex align-items-center animate__animated animate__fadeInDown" role="alert">
                <FaCheckCircle className="me-2" />
                Message sent successfully!
              </div>
            )}

            <form onSubmit={handleValidatedSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className={`form-control ${formErrors.name && "is-invalid"}`}
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <div className="invalid-feedback">{formErrors.name}</div>
              )}
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <label htmlFor="phone" className="mt-3">Mobile Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className={`form-control ${formErrors.phone && "is-invalid"}`}
                value={formData.phone}
                onChange={handleChange}
              />
              {formErrors.phone && (
                <div className="invalid-feedback">{formErrors.phone}</div>
              )}
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />

              <label htmlFor="message" className="mt-3">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`form-control mb-3 ${formErrors.message && "is-invalid"}`}
                value={formData.message}
                onChange={handleChange}
              />
              {formErrors.message && (
                <div className="invalid-feedback">{formErrors.message}</div>
              )}
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type="submit"
                className="btn btn-outline-dark btn-md d-flex align-items-center gap-2"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    <Spinner animation="border" size="sm" />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
