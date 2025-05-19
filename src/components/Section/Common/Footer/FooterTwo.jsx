"use client"
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import "~/assets/css/color-1.css";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const FooterTwo = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-one footer-one--two">
      <ScrollToTop smooth top='80' color="white" style={{backgroundColor:"#FFD550", "&:hover": { backgroundColor: "#186265" }}}/>
      <div
        className="footer-one__bg"
        style={{ backgroundImage: "url(/img/footer/footer-v2-bg.jpg)" }}
      ></div>
      <div className="shape1 float-bob-y">
        <img src="/img/shape/footer-v2-shape1.png" alt="" />
      </div>
      <div className="shape2 float-bob-y">
        <img src="/img/shape/footer-v2-shape2.png" alt="" />
      </div>
      <div className="footer-main ">
        <div className="container">
          <div className="footer-main__bottom">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="logo-box">
                    <Link href="">
                      <BrandLogo imageSrc="/img/resource/logo-3.png" />
                    </Link>
                  </div>
                  <div className="footer-widget__about-inner">
                    <p className="text1">
                      Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur
                    </p>
                    <p className="text2">We are available</p>
                    <p className="text3">MOn-Sat: 10:00am to 07:30pm</p>

                    <div className="footer-social-link">
                      <Link href="#"><span className="icon-facebook"></span></Link>
                      <Link href="#"><span className="icon-twitter"></span></Link>
                      <Link href="#"><span className="icon-instagram"></span></Link>
                      <Link href="#"><span className="icon-linkedin"></span></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Quick Links</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li><Link href="about">Mission & Vision</Link></li>
                      <li><Link href="about">Get Pricing Plan</Link></li>
                      <li><Link href="team">Meet The Team</Link></li>
                      <li><Link href="about">Our Clients</Link></li>
                      <li><Link href="about">Available Positions</Link></li>
                      <li><Link href="about">Job Application</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div
                  className="single-footer-widget footer-widget__links services"
                >
                  <div className="title">
                    <h2>Our Services</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li><Link href="road-transport">Air Freight</Link></li>
                      <li><Link href="road-transport">Ocean Freight</Link></li>
                      <li>
                        <Link href="road-transport">Railway Freight</Link>
                      </li>
                      <li><Link href="road-transport">Warehousing</Link></li>
                      <li><Link href="road-transport">Packaging</Link></li>
                      <li><Link href="road-transport">Distribution</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget single-footer__newsletter">
                  <div className="title">
                    <h2>Newsletter</h2>
                  </div>
                  <div className="single-footer__newsletter-box">
                    <div className="single-footer__newsletter-text1">
                      <p>
                        Subscribe to our weekly newsletter to <br />
                        get information.
                      </p>
                    </div>
                    <form className="single-footer__newsletter-form">
                      <div className="single-footer__newsletter-form-input">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          name="email"
                        />
                      </div>

                      <div className="single-footer__newsletter-btn">
                        <button className="thm-btn" type="submit">
                          <span className="txt">Subscribe New</span>
                          <i className="icon-right-arrow"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear} <Link href="/">Translo,</Link> All Rights Reserved.
              </p>
            </div>
            <div className="copyright-menu">
              <ul>
                <li><Link href="about">Trams &amp; Condition</Link></li>
                <li><Link href="about">Privacy Policy</Link></li>
                <li><Link href="about">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
