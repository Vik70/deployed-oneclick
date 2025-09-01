"use client";
import React from 'react';
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  const [showAccountModal, setShowAccountModal] = React.useState(false);
  const [pendingHref, setPendingHref] = React.useState(null);

  const onAccountClick = (e) => {
    e.preventDefault();
    setPendingHref(e.currentTarget.getAttribute('href'));
    setShowAccountModal(true);
  };

  const proceedDownload = () => {
    if (pendingHref) {
      window.open(pendingHref, '_blank', 'noopener');
    }
    setShowAccountModal(false);
    setPendingHref(null);
  };

  return (
    <>
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
                                <Link href="mailto:sales@oneclickhandling.co.uk">
                                  sales@oneclickhandling.co.uk
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
                      <li><Link href="/documents/och-brochure.pdf" target="_blank">Brochure</Link></li>
                      <li><Link href="/rate-card">Rate Card</Link></li>
                      <li><a href="/documents/credit_account_application_och.pdf" target="_blank" onClick={onAccountClick}>Account form</a></li>
                      <li><Link href="/documents/BIFA-STC-2021-England-Edition.pdf" target="_blank">BIFA Terms &amp; Conditions</Link></li>
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
                  <li><Link href="/documents/BIFA-STC-2021-England-Edition.pdf" target="_blank">Terms &amp; Conditions</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/support">Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showAccountModal && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.55)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:9999}}>
          <div style={{background:'#fff', color:'#111', maxWidth:520, width:'90%', padding:'24px', borderRadius:12, boxShadow:'0 10px 30px rgba(0,0,0,.35)'}}>
            <h3 style={{margin:'0 0 12px', fontSize:22}}>Account Form</h3>
            <p style={{margin:'0 0 18px', lineHeight:1.5}}>Please complete and sign me, then email to <a href="mailto:sales@oneclickhandling.co.uk">sales@oneclickhandling.co.uk</a>.</p>
            <div style={{display:'flex', gap:10, justifyContent:'flex-end'}}>
              <button onClick={()=>{setShowAccountModal(false); setPendingHref(null);}} style={{padding:'10px 16px', borderRadius:8, border:'1px solid #d1d5db', background:'#fff', cursor:'pointer'}}>Cancel</button>
              <button onClick={proceedDownload} style={{padding:'10px 16px', borderRadius:8, border:'none', background:'#014bde', color:'#fff', cursor:'pointer'}}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterThree;
