"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="main-slider main-slider-one">
      <div
        className="swiper-slide swiper-slide-active" // <- KEY FIX
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          className="image-layer"
          style={{
            backgroundImage: "url(/img/background/boxes-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        ></div>

        {/* Decorative elements */}
        <div className="big-title">
          <h2>Let Us Handle It</h2>
        </div>
        <div className="img-box">
          <img src="/img/slider/slider-v1-img4.png" alt="" />
        </div>
        <div className="icon-one">
          <img src="/img/icon/slider-v1-icon1.png" alt="" />
        </div>
        <div className="icon-two">
          <img src="/img/icon/slider-v1-icon2.png" alt="" />
        </div>

        {/* Text content */}
        <div className="container" style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center" }}>
          <div className="main-slider-one__single padding">
            <div className="main-slider-one__content">
       
              <h2 style={{ color: '#1e3a8a', textShadow: '3px 2px 0 #ffffff, -3px 2px 0 #ffffff, 3px -2px 0 #ffffff, -3px -2px 0 #ffffff, 0 3px 0 #ffffff, 3px 0 0 #ffffff, 0 -3px 0 #ffffff, -3px 0 0 #ffffff' }}>
                Neutral, Nimble, and <span style={{ color: '#1e3a8a' }}>Built for Forwarders</span>
              </h2>
              <p>
                Welcome to One Click Handling, a dynamic new cargo handling organisation created to serve the UK’s freight forwarding community with precision, flexibility, and trust. Operating 24/7, we deliver a suite of asset-driven services tailored for both general and specialist cargo—ensuring your shipments are handled with care, speed, and full operational support.
              </p>
              <div className="btn-box">
                <Link className="thm-btn" href="/">
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

export default Hero;
