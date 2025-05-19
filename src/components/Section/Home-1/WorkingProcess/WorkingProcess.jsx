'use client';

import Link from "next/link";
import { useEffect } from "react";
import "wowjs/css/libs/animate.css";
const WorkingProcess = () => {


  useEffect(() => {
    import('wowjs').then(WOW => {
      const wow = new WOW.WOW({
        boxClass: "wow", // default
        animateClass: "animated", // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
      });
        wow.init();
    });
}, []);

  return (
    <section className="working-process-one working-process-one-responsive">
      <div
        className="working-process-one__bg"
      ></div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>
              <span className="icon-right-arrow-1"></span> Check our steps
            </h5>
          </div>
          <h2>Our Freight Working Process</h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-4 wow fadeInLeft"
            data-wow-delay={'0ms'}
            data-wow-duration={"1500ms"}
          >
            <div className="working-process-one__single">
              <div className="shape1">
                <img src="/img/shape/working-process-v1-shape1.png" alt="" />
              </div>
              <div className="working-process-one__single-top">
                <div className="icon">
                  <img src="/img/icon/working-process/step-1.png" alt="" />
                </div>
                <div className="text">
                  <h2>Step - 1</h2>
                </div>
              </div>
              <div className="working-process-one__single-content">
                <h2>
                  <Link href="#">The Paperwork</Link>
                </h2>
                <p>
                  Once you place your order via mail or fax our field staff will
                  collect the documents and consignments from the shipper.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 wow fadeInRight"
            data-wow-delay={"200ms"}
            data-wow-duration={"1500ms"}
          >
            <div className="working-process-one__single ml60">
              <div className="shape1">
                <img src="/img/shape/working-process-v1-shape1.png" alt="" />
              </div>
              <div className="working-process-one__single-top">
                <div className="icon">
                  <img src="/img/icon/working-process/step-2.png" alt="" />
                </div>
                <div className="text">
                  <h2>Step - 2</h2>
                </div>
              </div>
              <div className="working-process-one__single-content">
                <h2>
                  <Link href="#">Select Location</Link>
                </h2>
                <p>
                  We’ll evaluate the size and weight of your cargo, find just
                  the right carrier to fly your goods to their destination.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 wow fadeInLeft"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="working-process-one__single ml80">
              <div className="working-process-one__single-top">
                <div className="icon">
                  <img src="/img/icon/working-process/step-3.png" alt="" />
                </div>
                <div className="text">
                  <h2>Step - 3</h2>
                </div>
              </div>
              <div className="working-process-one__single-content">
                <h2>
                  <Link href="#">Partners Till The End</Link>
                </h2>
                <p>
                  Our teams will be working hard at every step of the journey to
                  ensure that your shipment is delivered on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
