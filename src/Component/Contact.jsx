import React, { useState, useEffect } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    window.alert(`Welcome ${data.fullName}`);
  };
  return (
    <>
    <div className="contactpage" >
    <div className="my-5">
        <h1 id="contactus" className="text-center">
          Contact Us
        </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={fromSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  data-aos="fade-right"
                  type="fullname"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  data-aos="fade-left"
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  data-aos="fade-right"
                  type="phone"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                placeholder="Your Message"
                  data-aos="fade-left"
                  type="msg"
                  className="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="row">
                <div className="col-sm">
                  <button type="submit" className="btn-get-started">
                    Submit
                  </button>
                </div>
                <div className="col-sm ">
                  <button type="submit" className="btn-get-started">
                    Go Back to Home Page
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};
export default Contact;
