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
                <h2>How can we help you</h2>
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
You can request a free quote by visiting our contact page or calling us.                    </p>
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
Yes, we provide global logistics solutions.                    </p>
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
We implement security protocols including X-Ray screening and real-time tracking.                    </p>
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
                      <span>05.</span>  What is your policy on handling pharmaceutical products?
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span>Answer:</span>
                    <p>
We follow strict guidelines including temperature control and compliance with regulations                  </p>
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
                <p>Let’s Talk</p>
                <h3>Need any help? Don't hesitate to reach out to us</h3>
              </div>

              <div className="faq-one__contact-info-number">
                <div className="icon"
                  style={{ backgroundColor: "#052161" }}
                >
                  <span className="icon-call"></span>
                </div>

                <div className="text">
                  <p>Have Any Questions</p>
                  <h3><Link href="tel:0333 404 0298">0333 404 0298</Link></h3>
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
