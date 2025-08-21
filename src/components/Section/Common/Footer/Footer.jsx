"use client"
import React from 'react';
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-one">
      <ScrollToTop smooth top='80' color="white" style={{backgroundColor:"#014bde", "&:hover": { backgroundColor: "#186265" }}}/>
      <div className="footer-one__bg"></div>
      <div className="footer-main padding">
        <div className="container">
          <div className="footer-main__bottom padding-top">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                <div className="single-footer-widget footer-widget__about">
                  <div className="title">
                    <h2>About Company</h2>
                  </div>
                  <div className="footer-widget__about-inner">
                    <p className="text1">
                    At One Click Handling, we combine advanced technology with decades of industry expertise to deliver seamless, reliable, and secure transport services. Our commitment is to ensure your goods are collected, handled, and delivered with precision — from origin to destination, on time, every time.

</p>
                    <p className="text2">We are available</p>
                    <p className="text3">24/7 Whenever you need us.</p>
                    <div className="footer-social-link">
                      <Link href="#">
                        <span className="icon-facebook"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-twitter"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-instagram"></span>
                      </Link>
                      <Link href="#">
                        <span className="icon-linkedin"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Quick Links</h2>
                  </div>
                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="/documents/och-brochure.pdf" target="_blank">Brochure</Link>
                      </li>
                      <li>
                        <Link href="/rate-card" >Rate Card</Link>
                      </li>
                      <li>
                        <Link href="/documents/credit_account_application_och.pdf" target="_blank">Account form</Link>
                      </li>
                      <li>
                        <Link href="/documents/BIFA-STC-2021-England-Edition.pdf" target="_blank">Terms &amp; Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-footer-widget footer-widget__links services">
                  <div className="title">
                    <h2>Our Services</h2>
                  </div>
                  <div className="footer-widget__links-box">
                    <ul>
                      <li><Link href="/security-screening">Security Screening</Link></li>
                      <li><Link href="/uk-eu-transport">UK & EU Transport</Link></li>
                      <li><Link href="/white-glove-service">White Glove Service</Link></li>
                      <li><Link href="/etsf">ETSF</Link></li>
                      <li><Link href="/warehousing">Warehousing & Storage</Link></li>
                      <li><Link href="/pick-and-pack">Pick & Pack</Link></li>
                      <li><Link href="/temperature-controlled-storage-transportation">Temperature Controlled</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="single-footer-widget footer-widget__contact">
                  <div className="title">
                    <h2>Get in Touch</h2>
                  </div>
                  <div className="footer-widget__contact-box">
                    <ul>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <div className="icon-box" style={{ marginRight: '10px' }}>
                          <span className="icon-pin"></span>
                        </div>
                        <div className="content-box">
                          <p>Address</p>
                          <h4>Unit 6 Mercury Centre, Feltham Trading Estate, TW14 0RN</h4>
                        </div>
                      </li>
                    
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <div className="icon-box" style={{ marginRight: '10px' }}>
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
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear} <Link href="/">One Click Handling,</Link> All Rights Reserved.
              </p>
            </div>
            <div className="copyright-menu">
              <ul>
                <li>
                  <Link href="/about#terms">
                    Terms &amp; Conditions
                    <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/about#privacy">
                    Privacy Policy
                    <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    Support
                    <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
