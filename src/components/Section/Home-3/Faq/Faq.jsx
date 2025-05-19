'use client';
import { useState } from "react";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    const [popup, setPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const openPopup = () => {
      setPopup(true);
      const iframe = document.getElementById("youtube-video");
      if (iframe) {
        iframe.src = "https://www.youtube.com/embed/6mkoGSqTqFI?si=2kJDQsAvj9HLTUCe";
      }
      setIsActive(true);
      document.body.classList.add('disable-scroll');
    };
    const closePopup = () => {
      setPopup(false);
      const iframe = document.getElementById("youtube-video");
      if (iframe) {
        iframe.src = "";
      }
      setIsActive(false);
      document.body.classList.remove('disable-scroll');
    };
    return (
            <section className={`faq-three padding ${popup ? 'zindex-50' : 'zindex-1'}`}>
            <style jsx>{`
              .zindex-50 {
                z-index: 50;
              }
              .zindex-1 {
                z-index: 0;
              }
            `}</style>
                <div className="container">
                    <div className="faq-three__top">
                        <div className="sec-title-style3">
                            <div className="sub-title">
                                <div className="icon">
                                    <img src="/img/icon/title-marker-4.png" alt="" />
                                </div>
                                <h5>Faq</h5>
                            </div>
                            <h2>
                                Fortunately Asked <br />
                                Question
                            </h2>
                        </div>

                        <div className="btn-box">
                            <Link className="thm-btn" href="contact">
                                <span className="txt">Have You Any Question?</span>
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        {/* Start Faq Three Fa */}
                        <div className="col-xl-6">
                            <div className="faq-three__faq">
                                <Accordion defaultActiveKey="0" className='accordion-two accordion-three'>
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header >

                                            <h2><span>01. </span>
                                                How can I pay for your logistics
                                                services?
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua.
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header >

                                            <h2>
                                                <span>02. </span>
                                                How can I track my shipments?
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua.
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header >

                                            <h2>
                                                <span>03. </span> Can i specify a delivery date when
                                                ordering?
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua.
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header >

                                            <h2>
                                                <span>04. </span> Any advice for a first time shipper?
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua.
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        {/* End Faq Three Fa */}

                        {/* Start Faq Three Vide */}
                        <div className="col-xl-6">
                            <div className="faq-three__video">
                                <div className="faq-three__video-img">
                                    <img src="/img/resource/faq-v3-img1.jpg" alt="" />

                                    <div className="faq-three__video-box">
                                        <a
                                            className="faq-three__video-icon video-popup"
                                            onClick={openPopup}
                                        >
                                            <span className="txt">Play</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Faq Three Vide */}
                    </div>
                </div>
                <div
                    className={`popup-video ${popup ? "popup" : "popdown"}`}
                    onClick={closePopup}
                    >
                        <div className={`video-wrapper ${isActive ? 'active' : ''}`}>
                        <iframe
                            id="youtube-video"
                            className="video"
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/6mkoGSqTqFI?si=2kJDQsAvj9HLTUCe"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button className="mfp-close" onClick={closePopup}>×
                        </button>
                    </div>
                </div>
            </section>
    );
};

export default Faq;