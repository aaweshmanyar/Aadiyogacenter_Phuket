import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "react-phone-input-2/lib/style.css"; // Import styles for react-phone-input-2

const Contact = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const [emailTextColor, setEmailTextColor] = useState("");
  const form = useRef(null); // Reference to the form for EmailJS submission

  const [formData, setFormData] = useState({
    user_firstname: "",
    user_lastname: "",
    user_email: "",
    user_phone: "",
    user_message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [emailMessage]);

  // Validation function
  const validate = () => {
    const errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      errors.user_email = "Invalid email format";
    }

    // Phone validation (10-15 digits)
    if (!formData.user_phone || formData.user_phone.length < 10) {
      errors.user_phone = "Invalid phone number";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to submit form data via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }

    console.log("Submitting Form Data:", formData); // Log the form data

    const templateParams = {
      user_firstname: formData.user_firstname,
      user_lastname: formData.user_lastname,
      user_email: formData.user_email,
      user_phone: formData.user_phone,
      user_message: formData.user_message,
    };

    emailjs
      .send(
        "service_6to78uv", // Replace with your EmailJS Service ID
        "template_j4p45tc", // Replace with your EmailJS Template ID
        templateParams,
        "YpZ8BwMcnJpHK7rnX" // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log("Success!", response);
        setEmailMessage("Your form was successfully submitted!");
        setEmailTextColor("green");

        setFormData({
          user_firstname: "",
          user_lastname: "",
          user_email: "",
          user_phone: "",
          user_message: "",
        });
        form.current.reset(); // Optional: Resets the form as well
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setEmailMessage("Error submitting the form.");
        setEmailTextColor("red");
      });
  };

  return (
    <section className="section-sm lg:pt-[250px]" id="Contact">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]"
          data-aos="zoom"
        >
          <div
            className="flex-1 flex flex-col justify-center pl-8"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <h2 className="h2 mb-3 lg:mb-7">
              Get in Touch With Us for Yoga Course.
            </h2>
            <p className="mb-7 lg:mb-0">
              Get in touch with us for any kind of help. We are here to give you
              the best and also help you to find your yoga course.
            </p>
            <div className="mt-8 space-y-4 text-lg">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">
                  <span className="text-primary">&#x1F4CD;</span> Our Location
                </h3>
                <p className="text-gray-700">
                  80, Doctor wattana, 16 Soi Dr. Watthana, Pa Tong, Phuket,
                  83150, Thailand
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">
                  <span className="text-primary">&#x23F0;</span> Opening Hours
                </h3>
                <p className="text-gray-700">
                  Mon-Sun :<br />
                  05:30 AM to 09:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">
                  <span className="text-primary">&#x1F4E9;</span> Contact
                </h3>
                <p className="text-gray-700 mb-5">
                  Phone: +66 80 251 1273 
                  <br />
                  Email: info@aadiyogacenterphuket.com
                </p>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-white flex-1 shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg:-mt-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <input
              className="form-control"
              placeholder="First name"
              required
              name="user_firstname"
              type="text"
              value={formData.user_firstname}
              onChange={handleChange}
            />
            <input
              className="form-control"
              placeholder="Last name"
              required
              name="user_lastname"
              type="text"
              value={formData.user_lastname}
              onChange={handleChange}
            />
            <input
              className={`form-control ${
                errors.user_email ? "border-red-500" : ""
              }`}
              placeholder="Email address"
              required
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
            />
            {errors.user_email && (
              <p className="text-red-500 text-sm">{errors.user_email}</p>
            )}
            <input
              className={`form-control ${
                errors.user_phone ? "border-red-500" : ""
              }`}
              placeholder="Phone number"
              required
              name="user_phone"
              type="text"
              value={formData.user_phone}
              onChange={handleChange}
            />
            {errors.user_phone && (
              <p className="text-red-500 text-sm">{errors.user_phone}</p>
            )}
            <textarea
              className="form-control py-5 h-[165px] resize-none"
              placeholder="Message"
              name="user_message"
              value={formData.user_message}
              onChange={handleChange}
            ></textarea>
            <button className="btn btn-lg btn-orange" type="submit">
              Send Message
            </button>
            <p style={{ color: emailTextColor }}>{emailMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
