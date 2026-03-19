"use client";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <section className="faq-one padding"
      style={{ backgroundColor: "#052161" }}
    >
      <div className="big-title">
        <h2>FAQ</h2>
      </div>
      <div
        className="faq-one__bg"
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6  faq-padding-top">
            <div className="faq-one__faq">
              <div className="sec-title">
                <div className="sub-title">
                  <h5><span className="icon-right-arrow-1"></span>FAQ</h5>
                </div>
                <h2>How can we help you?</h2>
              </div>
              <Accordion defaultActiveKey="0" className='accrodion-grp faq-one__accrodion accordion-one'>
                <Accordion.Item eventKey="0" >
                  <Accordion.Header >
                    <h2>
                      <span>01.</span> How can I get a quote for your services?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
If your requirement is not covered by our <a href="/documents/One Click Handling - Rate Card - March 2026 V1.0.pdf" target="_blank">Rate Card</a>, solutions and pricing are just a phone call or an email away. Alternatively, please complete our enquiry form, and our sales team will respond within 1 working day.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header >
                    <h2>
                      <span>02.</span> Do you offer international shipping?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
                    We provide road transport throughout the European Union.                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header >
                    <h2>
                      <span>03.</span> What measures do you take to ensure cargo security?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
Shipments are managed in compliance with the UK Aviation Security Act regulations.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header >
                    <h2>
                      <span>04.</span> Can I track my shipment?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
 Yes, tracking services are available. Contact our support team for details                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header >
                    <h2>
                      <span>05.</span>  What is your policy on handling medical or pharmaceutical products?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
Shipments are managed in compliance with the Medicines &amp; Healthcare products Regulatory Agency (MHRA), Good Delivery Practices (GDP) protocols.
                  </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div className="col-xl-6">
            <div
              className="faq-one__contact-info wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="title-box">
                <p>Let&#39;s Talk</p>
                <h3>Need any help? Don&#39;t hesitate to reach out to us</h3>
              </div>

              <div className="faq-one__contact-info-number">
                <div className="icon"
                  style={{ backgroundColor: "#052161" }}
                >
                  <span className="icon-call"></span>
                </div>

                <div className="text">
                  <p>Have Any Questions</p>
                  <h3><Link href="tel:02033193929">02033193929</Link></h3>
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
        </div>
      </div>
    </section>
  );
};

export default Faq;
