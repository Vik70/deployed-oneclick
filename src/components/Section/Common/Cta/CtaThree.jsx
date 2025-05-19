import Link from 'next/link';
import React from 'react';

const CtaThree = () => {
    return (
        <section className="cta-two style3 style4"  style={{ paddingTop: '80px' }}>
      <div className="container">
        <div className="cta-two__inner">
          <div className="shape1">
            <img src="/img/shape/cta-v3-shape1.png" alt="" />
          </div>
          <div className="shape2">
            <img src="/img/shape/cta-v3-shape2.png" alt="" />
          </div>
          <div className="shape3 float-bob-x">
            <img src="/img/shape/cta-v3-shape3.png" alt="" />
          </div>
          <div className="cta-two__inner-box">
            <div className="sec-title-style3">
              <div className="sub-title">
                <div className="icon">
                </div>
                <h5>Get in touch</h5>
              </div>
              <h2>
                Looking for the best <br />
                transport services?
              </h2>
            </div>

            <div className="btn-box">
              <Link className="thm-btn" href="contact">
                <span className="txt">Request a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default CtaThree;