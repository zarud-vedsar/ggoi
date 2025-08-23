import React, { useState } from 'react'
import Footer from '../../Components/Website/Footer'
import Breadcrum from '../../Components/Website/breadcrum'
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { toast } from 'react-toastify';
//  const PHP_API_URL = "https://www.ghanshyamgroup.in/php-server/controller";
const PHP_API_URL = "http://localhost/ggoi/php-server/controller";

const ContactUs = () => {
  const initializeFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const [formData, setFormData] = useState({ ...initializeFormData });
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState({ name: '', msg: '' });
  const makeError = (name, msg) => {
    setError({ name: name, msg: msg });
    toast.error(msg);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;


    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const { name, email, subject, message, phone } = formData;
    if (!name) {
      makeError('name', 'Name is required');
      return setIsSubmit(false);
    }
    if (!email) {
      makeError('email', 'Email is required');
      return setIsSubmit(false);
    }


    if (!emailRegex.test(email)) {
      makeError('email', 'Please enter a valid email address');
      return setIsSubmit(false);
    }
    if (!phone) {
      makeError('phone', 'Phone number is required');
      return setIsSubmit(false);
    }

    if (!phoneRegex.test(phone)) {
      makeError('phone', 'Please enter a valid 10-digit phone number');
      return setIsSubmit(false);
    }
    if (!subject) {
      makeError('subject', 'Subject is required');
      return setIsSubmit(false);
    }
    if (!message) {
      makeError('message', 'Message is required');
      return setIsSubmit(false);
    }
    setError({ name: "", msg: "" })

    const sendFormData = new FormData();
    sendFormData.append('name', name);
    sendFormData.append('email', email);
    sendFormData.append('subject', subject);
    sendFormData.append('message', message);
    sendFormData.append('phone', phone);
    sendFormData.append('data', 'contact_submit');
    try {
      const response = await fetch(`${PHP_API_URL}/webrequest.php`, {
        method: 'POST',
        body: sendFormData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        setIsSubmit(false);
        return toast.error("Submission failed. Please try again.");
      }
      const result = await response.json();
      toast.success("Form submitted successfully!");
      setFormData({ ...initializeFormData });
    } catch (e) {
      toast.error("Submission failed. Please check your connection.");
    } finally {
      setIsSubmit(false);
    }

  }
  return (
    <>
      <Breadcrum paths={[
        { label: 'Home', link: '/' },
        { label: 'Contact Us', link: `/contact-us` },
      ]} />
      <section className="py-5" id="main-content">
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-center mb-5 section-heading"> Contact Information</h2>
            </div>
          </div>

          <div className="row mb-5">
            <div className='col-md-6 px-5 mb-5 mb-md-0 d-flex align-items-center' data-aos="fade-up" data-aos-delay="200">
              <div className='row'>
                <div className="col-md-6 mb-4 " >
                  <div className='d-flex flex-column justify-content-center align-items-center p-5 h-100' style={{ backgroundColor: "#f5f5f5" }}>

                    <FaMapLocationDot className='am-f40 am-text-primary mb-4' />


                    <p className='text-center'>
                      Phoolpur, Prayagraj, Boodae, Uttar Pradesh 211002
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-4 ">
                  <div className='d-flex flex-column justify-content-center align-items-center p-5 h-100' style={{ backgroundColor: "#f5f5f5" }}>

                    <IoCall className='am-f40 am-text-primary mb-4' />


                    <div className='d-flex flex-column'>
                      <a href="tel: +918924057222" > +91 892 405 7222
                      </a>
                      <a href="tel:+919621925222" >+91962 192 5222</a>

                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4 ">
                  <div className='d-flex flex-column justify-content-center align-items-center p-5 h-100' style={{ backgroundColor: "#f5f5f5" }}>

                    <IoMdMail className='am-f40 am-text-primary mb-4' />



                    <a href="mailto:ghanshyamurvashi@gmail.com" >ghanshyamurvashi@gmail.com</a>

                  </div>
                </div>

              </div>
            </div>
            <div className='col-md-6 px-5' data-aos="fade-up" data-aos-delay="300">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className='form-group col-12'>
                    <label htmlFor="name">Name <span className='text-danger'>*</span></label>
                    <input type="text" id="name" name="name" placeholder='Enter name' className='form-control' value={formData?.name} onChange={handleChange} />
                    {error?.name === "name" && <p><small className='text-danger'>{error.msg}</small></p>}
                  </div>
                  <div className='form-group col-sm-6'>
                    <label htmlFor="email">Email <span className='text-danger'>*</span></label>
                    <input type="email" id="email" name="email" placeholder='Enter email' value={formData?.email} onChange={handleChange} />
                    {error?.name === "email" && <p><small className='text-danger'>{error.msg}</small></p>}
                  </div>
                  <div className="form-group col-sm-6">
                    <label htmlFor="phone">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit phone number"
                      maxLength="10"
                      pattern="[0-9]{10}"
                      required
                    />
                    {error?.name === "phone" && (
                      <p>
                        <small className="text-danger">{error.msg}</small>
                      </p>
                    )}
                  </div>
                  <div className='form-group col-12'>
                    <label htmlFor="subject">Subject <span className='text-danger'>*</span></label>
                    <input type="text" id="subject" name="subject" placeholder='Enter subject' value={formData?.subject} onChange={handleChange} />
                    {error?.name === "subject" && <p><small className='text-danger'>{error.msg}</small></p>}
                  </div>
                  <div className='form-group col-12'>
                    <label htmlFor="message">Message <span className='text-danger'>*</span></label>
                    <textarea type="text" id="message" name="message" placeholder='Enter message' value={formData?.message} onChange={handleChange} />
                    {error?.name === "message" && <p><small className='text-danger'>{error.msg}</small></p>}
                  </div>

                </div>
                <div className='d-block '>

                  <button
                    type="submit"
                    className="btn btn-success py-3 am-f20"
                    style={{ background: "#a51734" }}
                  >
                    {isSubmit ? (
                      <>
                        <div className="spinner-border text-light me-2" role="status" style={{ width: "1.5rem", height: "1.5rem" }}>
                        </div> Submitting... </>
                    ) : (
                      "Submit"
                    )}
                  </button>

                </div>
              </form>
            </div>
          </div>
          <div className='row' data-aos="fade-up" data-aos-delay="200">
            <div className='col-12 pt-5'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.13554881356!2d82.1049804!3d25.5338614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aac22e70a509f%3A0xe105a3f52a452856!2sGhanshyam%20Urvashi%20pg%20college!5e0!3m2!1sen!2sin!4v1755156696284!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default ContactUs