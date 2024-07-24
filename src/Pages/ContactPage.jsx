import React, { useState, useRef, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import "./Pages.css";

const ContactPage = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    appointmentDate: "",
    clientMessage: "",
    clientService: [],
  });
  const [buttonText, setButtonText] = useState("SUBMIT");

  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();

      if (!formData.clientService.length) {
        alert("Please select at least one service.");
        return;
      }

      emailjs
        .sendForm(
          "service_m69ym3g",
          "template_gxynhzh",
          formRef.current,
          "H1z2hb96-5blyipWM"
        )
        .then(
          () => {
            alert("Message sent successfully!");
            setButtonText("Sent");
            setFormData({
              clientName: "",
              clientEmail: "",
              clientPhone: "",
              appointmentDate: "",
              clientMessage: "",
              clientService: [],
            });
          },
          (error) => {
            alert("Message failed to send. Please try again.");
            console.error("Failed to send message:", error.text);
          }
        );
    },
    [formData]
  );

  const toggleServiceSelection = useCallback((service) => {
    setFormData((prev) => ({
      ...prev,
      clientService: prev.clientService.includes(service)
        ? prev.clientService.filter((s) => s !== service)
        : [...prev.clientService, service],
    }));
  }, []);

  useEffect(() => {
    gsap.to("#contacth1", {
      yPercent: -100,
      delay: 0.7,
      duration: 0.8,
      ease: "power4.out",
      stagger: { amount: 0.5 },
    });
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <div className="aboutpage">
      <div className="whitecontainerorange">
        <div className="aboutme-pages">
          <div className="linkDisplaypage ">
            <div className="contact-grid">
              <div className="gridDiv cgd">
                <div className="containerAnimate">
                  <div className="containerAnimate-div">
                    <h1 id="contacth1">
                      Contact Me<span className="o2">07</span>
                    </h1>
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:oguntolakenny6@gmail.com"
                >
                  <div className="contact-profile underline fC">
                    <div className="contactprofilediv mediv">
                      <div className="overlay-base hero-overlay"></div>
                    </div>
                    <p className="smallestp whitecolor">
                      To: oguntolakenny6@gmail.com
                    </p>
                  </div>
                </a>
              </div>
              <div className="gridDiv">
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className="form-group">
                    <label htmlFor="clientService">
                      I am looking for (select multiple if needed)
                      <span className="orangeColor">*</span>
                    </label>
                    <div className="fC flexbtn">
                      {["Web Development", "Web Design"].map((service) => (
                        <button
                          type="button"
                          key={service}
                          onClick={() => toggleServiceSelection(service)}
                          className={`service-btn ${
                            formData.clientService.includes(service)
                              ? "selected clicked-btn"
                              : ""
                          }`}
                          aria-label={`Select ${service}`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                    <input
                      type="hidden"
                      name="client_service"
                      value={formData.clientService.join(", ")}
                    />
                  </div>
                  {[
                    {
                      label: "Name",
                      name: "user_name",
                      type: "text",
                      placeholder: "ie Clients Name",
                      required: true,
                    },
                    {
                      label: "Email",
                      name: "user_email",
                      type: "email",
                      placeholder: "ie Client email@google.com",
                      required: true,
                    },
                    {
                      label: "Phone Number",
                      name: "user_phone",
                      type: "tel",
                      placeholder: "ie +234 000 000 0000",
                      required: true,
                    },
                    {
                      label: "Appointment Date",
                      name: "appointmentDate",
                      type: "date",
                      placeholder: "",
                      required: false,
                    },
                    {
                      label: "Message",
                      name: "message",
                      type: "textarea",
                      placeholder: "@hi kenny, im name, ..",
                      required: false,
                    },
                  ].map(({ label, name, type, placeholder, required }) => (
                    <div className="form-group" key={name}>
                      <label htmlFor={name}>
                        {label}{" "}
                        {required && <span className="orangeColor">*</span>}
                      </label>
                      {type === "textarea" ? (
                        <textarea
                          id={name}
                          name={name}
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={handleChange}
                          aria-label={label}
                        />
                      ) : (
                        <input
                          type={type}
                          id={name}
                          name={name}
                          placeholder={placeholder}
                          value={formData[name]}
                          onChange={handleChange}
                          required={required}
                          aria-label={label}
                        />
                      )}
                    </div>
                  ))}
                  <div className="more-btn-div footer-btn">
                    <button type="submit" className="more-button">
                      <p>{buttonText}</p>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
