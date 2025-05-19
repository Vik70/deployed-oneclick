'use client';
import Link from "next/link";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUsSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.error(error.text);
                alert("Failed to send message. Please try again.");
            }
        );
    };

    return (
        <section className="contact-page padding">
            <div className="shape1 float-bob-y"><img src="/img/shape/contact-page-shape1.png" alt="" /></div>
            <div className="shape2 float-bob-y"><img src="/img/shape/contact-page-shape2.png" alt="" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="contact-page__contact-info">
                            <div className="sec-title-style3">
                                <div className="sub-title"><div className="icon" /></div>
                                <h5>Get In Touch</h5>
                                <h2>Contact Us Today</h2>
                            </div>
                            <ul>
                                <li>
                                    <div className="icon-box"><span className="icon-telephone-call"></span></div>
                                    <div className="text-box">
                                        <p>Call Us Toll Free</p>
                                        <h2><Link href="tel:03334040298">0333 404 0298</Link></h2>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-box"><span className="icon-location"></span></div>
                                    <div className="text-box">
                                        <p>Heathrow HQ</p>
                                        <h2>Unit 6 Mercury Centre,<br />Feltham Trading Estate<br />TW14 0RN</h2>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-box"><span className="icon-email"></span></div>
                                    <div className="text-box">
                                        <p>Email Us</p>
                                        <h2><Link href="mailto:info@oneclickhandling.co.uk">info@oneclickhandling.co.uk</Link></h2>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-box"><span className="icon-time"></span></div>
                                    <div className="text-box">
                                        <p>Operating Time</p>
                                        <h2>24/7 Whenever you need us</h2>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="contact-page__form-box">
                            <div className="title"><h2>Send Your Enquiry</h2></div>

                            <form id="contact-form" ref={form} onSubmit={sendEmail}>
  <div className="row">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="contact-page__input-box">
        <input type="text" placeholder="Full Name" name="name" required />
      </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="contact-page__input-box">
        <input type="email" placeholder="Email" name="email" required />
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="contact-page__input-box">
        <input type="text" placeholder="Mobile" name="number" />
      </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
      <div className="contact-page__input-box">
        <input type="text" placeholder="Company" name="company" />
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div className="contact-page__input-box">
        <textarea name="message" placeholder="Message"></textarea>
      </div>
      <div className="contact-page__btn">
        <button type="submit" className="thm-btn">
          <span className="txt">Send Message</span>
        </button>
      </div>
    </div>
  </div>
</form>



                            <p className="ajax-response mb-0"></p>
                            <div className="contact-page__form-box-text">
                                <p><span>Note:</span> Our team will get back to you within 1 business day!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
