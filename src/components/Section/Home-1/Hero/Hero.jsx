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
            backgroundImage: "url(/img/background/background1.png)",
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
       
              <h2>
                Global <span>Reach</span>, <br />
                Local <span>Care</span>
              </h2>
              <p>
                At One Click Handling, we bridge distances with precision and reliability.
                Our seamless handling solutions ensure your cargo reaches its destination
                safely and on time – no matter where in the world your business operates.
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
