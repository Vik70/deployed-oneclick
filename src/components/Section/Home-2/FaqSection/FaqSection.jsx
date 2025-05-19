"use client"
import Link from 'next/link'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function FaqSection() {
  return (
    <section className="faq-one faq-one--two padding">
      <div className="big-title">
        <h2>faq</h2>
      </div>
      <div
        className="faq-one__bg"
        style={{
          backgroundImage: "url(/img/resource/faq-v2-bg.jpg)"
        }}
      ></div>
      <div className="container">
        <div className="row">
          {/* <!-- Start Faq One Faq--> */}
          <div className="col-xl-6">
            <div className="faq-one__faq">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>FAQ?</h5>
                </div>
                <h2>Frequently Asked Questions</h2>
              </div>

              <Accordion defaultActiveKey="0" className='accordion-two'>
                <Accordion.Item eventKey="0" >
                  <Accordion.Header >

                    <h2>
                      <span>01.</span> How can I pay for your logistics
                      services?
                    </h2>

                  </Accordion.Header>
                  <Accordion.Body>

                    <span>Answer:</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header >

                    <h2>
                      <span>02.</span> How can I track my shipments?
                    </h2>

                  </Accordion.Header>
                  <Accordion.Body>

                    <span>Answer:</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header >
                    <h2>
                      <span>03.</span>Can i specify a delivery date when
                      ordering?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header >
                    <h2>
                      <span>04.</span>Any advice for a first time shipper?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          {/* <!-- End Faq One Faq--> */}

          {/* <!-- Start Faq One Contact Info--> */}
          <div className="col-xl-6">
            <div
              className="faq-one__contact-info wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="title-box">
                <p>Let’s Talk</p>
                <h3>You need any help? get free consultation</h3>
              </div>

              <div className="faq-one__contact-info-number">
                <div className="icon">
                  <span className="icon-call"></span>
                </div>

                <div className="text">
                  <p>Have Any Questions</p>
                  <h3><Link href="tel:123456789">(00) 112 365 489</Link></h3>
                </div>
              </div>

              <div className="btn-box">
                <Link className="thm-btn" href="contact">
                  <span className="txt">Contact Us</span>
                  <i className="icon-right-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- End Faq One Contact Info--> */}
        </div>
      </div>
    </section>
  )
}
