"use client";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-one footer-one--two style3">
      <ScrollToTop
        smooth
        top="80"
        color="white"
        style={{
          backgroundColor: "#014bde",
          "&:hover": { backgroundColor: "#186265" },
        }}
      />
      <div className="footer-one__bg"></div>
      <div className="shape2 float-bob-y">
        <img src="/img/shape/footer-v2-shape2.png" alt="" />
      </div>
      <div className="footer-main">
        <div className="container">
          <div className="footer-main__bottom">
            <div className="row">
              {/* Column 1 */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="footer-widget__about-inner">
                    <div className="footer-widget__contact-box">
                      <ul>
                        <li>
                          <div className="icon-box">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="content-box">
                            <p>Address</p>
                            <h4>
                              Unit 6 Mercury Centre, Feltham Trading Estate, TW14 0RN
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div className="icon-box">
                            <span className="icon-paper-plane"></span>
                          </div>
                          <div className="content-box">
                            <p>Email</p>
                            <h4>
                              <Link href="mailto:operations@oneclickhandling.co.uk">
                                info@oneclickhandling.co.uk
                              </Link>
                            </h4>
                          </div>
                        </li>
                        <li>
                          <div className="icon-box">
                            <span className="icon-out-call"></span>
                          </div>
                          <div className="content-box">
                            <p>Phone</p>
                            <h4>
                              <Link href="tel:03334040298">0333 404 0298</Link>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Quick Links</h2>
                  </div>
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/services">Our Services</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget footer-widget__links services">
                  <div className="title"><h2>Our Services</h2></div>
                  <ul>
                    <li><Link href="/x-ray-screening">X-Ray Screening</Link></li>
                    <li><Link href="/time-critical-deliveries">Time Critical Deliveries</Link></li>
                    <li><Link href="/etsf">ETSF</Link></li>
                    <li><Link href="/pick-and-pack">Pick and Pack</Link></li>
                    <li><Link href="/pharmaceutical">Pharmaceutical</Link></li>
                    <li><Link href="/aog">AOG (Aircraft on Ground)</Link></li>
                    <li><Link href="/on-board-courier">On Board Courier</Link></li>
                    <li><Link href="/warehousing">Warehousing</Link></li>
                  </ul>
                </div>
              </div>

              {/* Optional fourth column */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                {/* Empty or add newsletter/social/etc */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear} <Link href="/">One Click Handling,</Link> All Rights Reserved.
              </p>
            </div>

            <div className="header-social-links">
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61576271162489" target="_blank" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/oneclickhandling" target="_blank" rel="noopener noreferrer">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/oneclickhandling" target="_blank" rel="noopener noreferrer">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Static page links instead of modal buttons */}
            <div className="copyright-menu">
              <ul>
                <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/support">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
