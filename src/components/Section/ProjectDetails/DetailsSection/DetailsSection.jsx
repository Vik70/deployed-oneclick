/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useState } from "react";
import ProjectInfoCard from "~/components/Ui/Cards/ProjectInfoCard";

const DetailsSection = () => {
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/6mkoGSqTqFI?si=2kJDQsAvj9HLTUCe";
    }
    setIsActive(true);
    document.body.classList.add("disable-scroll");
  };
  const closePopup = () => {
    setPopup(false);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "";
    }
    setIsActive(false);
    document.body.classList.remove("disable-scroll");
  };

  return (
    <section className={`project-details-page padding ${popup ? 'zindex-50' : 'zindex-1'}`}>
    <style jsx>{`
      .zindex-50 {
        z-index: 999;
      }
      .zindex-1 {
        z-index: 3;
      }
    `}</style>
      <div className="container">
        <div className="row">
          {/* <!--Start Services Details Page Content--> */}
          <div className="col-xl-8">
            <div className="services-details-page__content">
              <div className="services-details-page__content-img1">
                <img src="/img/project/project-details-img1.jpg" alt="#" />
              </div>

              <div className="services-details-page__content-text1">
                <div className="top-text">
                  <div className="icon">
                    <span className="icon-ocean-freight1"></span>
                  </div>

                  <div className="title">
                    <h2>Transport for Product</h2>
                  </div>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  packages and web page editors now use Lorem Ipsum as their
                  default model.
                </p>

                <p>
                  Packages and web page editors now use Lorem Ipsum as their
                  default model textlayout. The point of using are Ipsum is that
                  it has a more-or-less normal distribution of letters, as
                  opposed to using 'Content here content normal distribution of
                  letters as opposed to here making readable making.
                </p>
              </div>

              <div className="services-details-page__content-text2">
                <div className="title-box">
                  <h2>Project Challenge</h2>
                  <p>
                    Readable and Packages editors now use Lorem Ipsum as their
                    default model textlayout. The point of using the some is
                    that it has a more-or-less normal distribution of letters as
                    opposed to using.
                  </p>
                </div>

                <div className={`row `}>
    
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="services-details-page__content-text2-single text-center">
                      <div className="icon-box">
                        <span className="icon-checked-2"></span>
                      </div>
                      <div className="text">
                        <h4>
                          Packages and Web <br /> Page Editors
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="services-details-page__content-text2-single text-center">
                      <div className="icon-box">
                        <span className="icon-checked-2"></span>
                      </div>
                      <div className="text">
                        <h4>
                          Professional and <br /> Dedicated Team
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="services-details-page__content-text2-single text-center">
                      <div className="icon-box">
                        <span className="icon-checked-2"></span>
                      </div>
                      <div className="text">
                        <h4>
                          Trusted Construction <br /> Agency
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="services-details-page__content-text3">
                <div className="title-box">
                  <h2>How it Work</h2>
                  <p>
                    Readable and Packages editors now use Lorem Ipsum as their
                    default model textlayout. The point of using the some is
                    that it has a more-or-less normal distribution of letters as
                    opposed to using.
                  </p>
                </div>

                <div className="services-details-page__content-text3-img">
                  <div className="shape1">
                    <img src="/img/shape/services-details-shape1.png" alt="" />
                  </div>
                  <div className="inner">
                    <img src="/img/service/services-details-img2.jpg" alt="" />

                    <div className="services-details-page__content-text3-img-video">
                      <a className="video-btn video-popup " onClick={openPopup}>
                        <span className="txt">Play</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-details-page__text1">
                <h2>Result</h2>
                <p>
                  Readable and Packages editors now use Lorem Ipsum as their
                  default model textlayout. The point of using the some is that
                  it has a more-or-less normal distribution of letters as
                  opposed to using.
                </p>
              </div>

              <div className="project-details-page__text2 text-center">
                <div className="big-icon">
                  <span className="icon-quote11"></span>
                </div>
                <div className="rating-box">
                  <Link href="#">
                    <i className="icon-star"></i>
                  </Link>
                  <Link href="#">
                    <i className="icon-star"></i>
                  </Link>
                  <Link href="#">
                    <i className="icon-star"></i>
                  </Link>
                  <Link href="#">
                    <i className="icon-star"></i>
                  </Link>
                  <Link href="#">
                    <i className="icon-star"></i>
                  </Link>
                </div>
                <p>
                  “Readable and Packages editors now use Lorem Ipsum as their
                  default model textlayout point of using the some is that it
                  has a more”
                </p>
                <div className="author-box">
                  <div className="icon-box">
                    <span className="icon-user1"></span>
                  </div>
                  <div className="text-box">
                    <p>Rebecca Tylor</p>
                  </div>
                </div>
              </div>

              <div className="services-details-page__pagination margin-top padding-bottom">
                <div className="single-box">
                  <div className="icon-box">
                    <span className="icon-air-transport"></span>
                  </div>
                  <div className="text-box">
                    <p>
                      <Link href="#">
                        <span className="icon-up-right-arrow"></span> Previous
                      </Link>
                    </p>
                    <h2>
                      <Link href="#">Air Transport</Link>
                    </h2>
                  </div>
                </div>

                <div className="single-box style2">
                  <div className="text-box">
                    <p>
                      <Link href="#">
                        Next <span className="icon-up-right-arrow"></span>
                      </Link>
                    </p>
                    <h2>
                      <Link href="#">Read Transport</Link>
                    </h2>
                  </div>
                  <div className="icon-box">
                    <span className="icon-ready-to-go-your-goods fs"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Services Details Page Content--> */}

          {/* <!--Start Project Details Sidebar--> */}
          <div className="col-xl-4">
            <ProjectInfoCard />
          </div>
          {/* <!--End Project Details Sidebar--> */}
        </div>
      </div>
      <div
        className={`popup-video ${popup ? "popup" : "popdown"}`}
        onClick={closePopup}
      >
        <div className={`video-wrapper ${isActive ? "active" : ""}`}>
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
          <button className="mfp-close" onClick={closePopup}>
            ×
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
