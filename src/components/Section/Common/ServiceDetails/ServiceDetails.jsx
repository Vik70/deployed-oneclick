/* eslint-disable react/no-unescaped-entities */

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BrochureCard from "~/components/Ui/Cards/BrochureCard";
import QuestionCard from "~/components/Ui/Cards/QuestionCard";

const ServiceDetails = ({ title, transportType, thumbnailOne, thumbnailTwo }) => {
  const [serviceDetails, setServiceDetails] = useState(null);
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch('/db/serviceDetails.json');
        const data = await response.json();
        setServiceDetails(data[transportType]);
      } catch (error) {
        console.error('Error fetching service details:', error);
      }
    };

    fetchServiceDetails();
  }, [transportType]);

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

  if (!serviceDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section className="services-details-page padding" id="blog-cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="services-details-page__content">
              <div className="services-details-page__content-img1">
                <img src={(() => {
                  switch(transportType) {
                    case "pick-and-pack":
                      return "/img/service/pandp.png";
                    case "pharmaceutical":
                      return "/img/service/pharm.png";
                    case "aog":
                      return "/img/service/aog.png";
                    case "time-critical-deliveries":
                      return "/img/service/tcd.png";
                    case "on-board-courier":
                      return "/img/service/obc.png";
                    case "etsf":
                      return "/img/service/etsf.png";
                    case "x-ray-screening":
                      return "/img/service/xray.png";
                    case "warehousing":
                      return "/img/service/warehouse.png";
                    default:
                      return thumbnailOne;
                  }
                })()} alt="#" />
              </div>

              <div className="services-details-page__content-text1">
                <div className="top-text">
                  <div className="icon">
                    {(() => {
                      if (transportType === "road") {
                        return <span className="icon-road-transport mt"></span>;
                      } else if (transportType === "air") {
                        return <span className="icon-air-transport mt"></span>;
                      } else if (transportType === "cargo") {
                        return <span className="icon-experience mt"></span>;
                      } else if (transportType === "ocean") {
                        return <span className="icon-ocean-freight1 mt"></span>;
                      } else if (transportType === "rail") {
                        return (
                          <span className="icon-ready-to-go-your-goods mt"></span>
                        );
                      } else if (transportType === "warehousing") {
                        return <span className="icon-warehousing"></span>;
                      } else {
                        return <span className="icon-road-transport mt"></span>;
                      }
                    })()}
                  </div>

                  <div className="title">
                    <h2>{serviceDetails.title}</h2>
                  </div>
                </div>
                <p>{serviceDetails.description}</p>
              </div>

              <div className="services-details-page__content-text2">
                <div className="title-box">
                  <h2>Benefits</h2>
                </div>
                <div className="row">
                  {serviceDetails.benefits.map((benefit, index) => (
                    <div key={index} className="col-xl-4 col-lg-4 col-md-4">
                      <div className="services-details-page__content-text2-single text-center">
                        <div className="icon-box">
                          <span className="icon-checked-2"></span>
                        </div>
                        <div className="text">
                          <h4>{benefit}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="services-details-page__content-text3">
                <div className="title-box">
                  <h2>How it Works</h2>
                </div>
                <div className="services-details-page__content-text3-img">
                  <div className="shape1">
                    <img src="/img/shape/services-details-shape1.png" alt="" />
                  </div>
                  <div className="inner">
                    <img src={thumbnailTwo} alt="#" />
                    <div className="services-details-page__content-text3-img-video">
                      <a className="video-btn video-popup" onClick={openPopup}>
                        <span className="txt">Play</span>
                      </a>
                    </div>
                  </div>
                </div>
                <ul className="services-details-page__content-text3-list">
                  {serviceDetails.howItWorks.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div> */}

              <div className="services-details-page__pagination margin-top">
                <div className="single-box">
                  <div className="icon-box">
                    <span className="icon-warehousing"></span>
                  </div>
                  <div className="text-box">
                    <p>
                      <Link href={(() => {
                        switch(transportType) {
                          case "pick-and-pack":
                            return "/warehousing";
                          case "pharmaceutical":
                            return "/pick-and-pack";
                          case "aog":
                            return "/pharmaceutical";
                          case "time-critical-deliveries":
                            return "/aog";
                          case "on-board-courier":
                            return "/time-critical-deliveries";
                          case "etsf":
                            return "/on-board-courier";
                          case "x-ray-screening":
                            return "/etsf";
                          case "warehousing":
                            return "/x-ray-screening";
                          default:
                            return "/warehousing";
                        }
                      })()}>
                        <span className="icon-up-right-arrow"></span> Previous
                      </Link>
                    </p>
                    <h2>
                      <Link href={(() => {
                        switch(transportType) {
                          case "pick-and-pack":
                            return "/warehousing";
                          case "pharmaceutical":
                            return "/pick-and-pack";
                          case "aog":
                            return "/pharmaceutical";
                          case "time-critical-deliveries":
                            return "/aog";
                          case "on-board-courier":
                            return "/time-critical-deliveries";
                          case "etsf":
                            return "/on-board-courier";
                          case "x-ray-screening":
                            return "/etsf";
                          case "warehousing":
                            return "/x-ray-screening";
                          default:
                            return "/warehousing";
                        }
                      })()}>
                        {(() => {
                          switch(transportType) {
                            case "pick-and-pack":
                              return "Warehousing";
                            case "pharmaceutical":
                              return "Pick and Pack";
                            case "aog":
                              return "Pharmaceutical";
                            case "time-critical-deliveries":
                              return "AOG";
                            case "on-board-courier":
                              return "Time Critical Deliveries";
                            case "etsf":
                              return "On Board Courier";
                            case "x-ray-screening":
                              return "ETSF";
                            case "warehousing":
                              return "X-Ray Screening";
                            default:
                              return "Warehousing";
                          }
                        })()}
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="single-box style2">
                  <div className="text-box">
                    <p>
                      <Link href={(() => {
                        switch(transportType) {
                          case "pick-and-pack":
                            return "/pharmaceutical";
                          case "pharmaceutical":
                            return "/aog";
                          case "aog":
                            return "/time-critical-deliveries";
                          case "time-critical-deliveries":
                            return "/on-board-courier";
                          case "on-board-courier":
                            return "/etsf";
                          case "etsf":
                            return "/x-ray-screening";
                          case "x-ray-screening":
                            return "/warehousing";
                          case "warehousing":
                            return "/pick-and-pack";
                          default:
                            return "/pick-and-pack";
                        }
                      })()}>
                        Next <span className="icon-up-right-arrow"></span>
                      </Link>
                    </p>
                    <h2>
                      <Link href={(() => {
                        switch(transportType) {
                          case "pick-and-pack":
                            return "/pharmaceutical";
                          case "pharmaceutical":
                            return "/aog";
                          case "aog":
                            return "/time-critical-deliveries";
                          case "time-critical-deliveries":
                            return "/on-board-courier";
                          case "on-board-courier":
                            return "/etsf";
                          case "etsf":
                            return "/x-ray-screening";
                          case "x-ray-screening":
                            return "/warehousing";
                          case "warehousing":
                            return "/pick-and-pack";
                          default:
                            return "/pick-and-pack";
                        }
                      })()}>
                        {(() => {
                          switch(transportType) {
                            case "pick-and-pack":
                              return "Pharmaceutical";
                            case "pharmaceutical":
                              return "AOG";
                            case "aog":
                              return "Time Critical Deliveries";
                            case "time-critical-deliveries":
                              return "On Board Courier";
                            case "on-board-courier":
                              return "ETSF";
                            case "etsf":
                              return "X-Ray Screening";
                            case "x-ray-screening":
                              return "Warehousing";
                            case "warehousing":
                              return "Pick and Pack";
                            default:
                              return "Pick and Pack";
                          }
                        })()}
                      </Link>
                    </h2>
                  </div>
                  <div className="icon-box">
                    <span className="icon-warehousing fs"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="sidebar">
              {/* <div
                className="sidebar__single sidebar__search wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="title-box">
                  <h2>Search</h2>
                </div>
                <form action="#" className="sidebar__search-form">
                  <input type="search" placeholder="Search Here..." />
                  <button type="submit">
                    <i className="icon-magnifying-glass"></i>
                  </button>
                </form>
              </div> */}
              <div
                className="sidebar__single sidebar__services wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="title-box">
                  <h2>Services List</h2>
                </div>
                <ul className="sidebar__services-list">
                  <li>
                    <Link
                      className={`${transportType === "pick-and-pack" ? "active" : ""}`}
                      href="pick-and-pack"
                    >
                      Pick and Pack
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "pharmaceutical" ? "active" : ""}`}
                      href="pharmaceutical"
                    >
                      Pharmaceutical
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "aog" ? "active" : ""}`}
                      href="aog"
                    >
                      AOG (Aircraft on Ground)
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "time-critical-deliveries" ? "active" : ""}`}
                      href="time-critical-deliveries"
                    >
                      Time Critical Deliveries
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "on-board-courier" ? "active" : ""}`}
                      href="on-board-courier"
                    >
                      On Board Courier
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "etsf" ? "active" : ""}`}
                      href="etsf"
                    >
                      ETSF
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "x-ray-screening" ? "active" : ""}`}
                      href="x-ray-screening"
                    >
                      X-Ray Screening
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${transportType === "warehousing" ? "active" : ""}`}
                      href="warehousing"
                    >
                      Warehousing
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <!--End Sidebar Single--> */}
              <BrochureCard />
              {/* <QuestionCard /> */}
            </div>
          </div>
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

export default ServiceDetails;
