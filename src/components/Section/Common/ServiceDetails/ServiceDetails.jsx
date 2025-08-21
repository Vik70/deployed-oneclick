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

  // New services order and labels for previous/next navigation
  const servicesOrder = [
    "/security-screening",
    "/uk-eu-transport",
    "/white-glove-service",
    "/etsf",
    "/warehousing",
    "/pick-and-pack",
    "/temperature-controlled-storage-transportation",
  ];
  const servicesLabels = {
    "/security-screening": "Security Screening (Coming Soon)",
    "/uk-eu-transport": "UK & EU Transport",
    "/white-glove-service": "White Glove Service",
    "/etsf": "ETSF (Coming Soon)",
    "/warehousing": "Warehousing & Storage",
    "/pick-and-pack": "Pick & Pack",
    "/temperature-controlled-storage-transportation": "Temperature Controlled Storage & Transportation",
  };
  const currentKey = transportType === "temperature-controlled" ? "temperature-controlled-storage-transportation" : transportType;
  const currentPathForOrder = `/${currentKey}`;
  const currentIdx = Math.max(servicesOrder.indexOf(currentPathForOrder), 0);
  const prevPath = servicesOrder[(currentIdx - 1 + servicesOrder.length) % servicesOrder.length];
  const nextPath = servicesOrder[(currentIdx + 1) % servicesOrder.length];
  const prevLabel = servicesLabels[prevPath];
  const nextLabel = servicesLabels[nextPath];

  return (
    <section className="services-details-page padding" id="blog-cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="services-details-page__content">
              <div className="services-details-page__content-img1" style={{ height: 380, overflow: 'hidden' }}>
                <img src={(() => {
                  switch(transportType) {
                    case "security-screening":
                      return "/img/service/service_screening.png";
                    case "uk-eu-transport":
                      return "/img/service/uk_eu_transport.webp";
                    case "white-glove-service":
                      return "/img/service/white_glove.png";
                    case "etsf":
                      return "/img/service/etsf.png";
                    case "warehousing":
                      return "/img/service/warehousing_storage.jpg";
                    case "pick-and-pack":
                      return "/img/service/pick_and_pack.png";
                    case "temperature-controlled":
                      return "/img/service/temp_controlled.png";
                    default:
                      return thumbnailOne;
                  }
                })()} alt="#" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
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
                      <Link href={prevPath}>
                        <span className="icon-up-right-arrow"></span> Previous
                      </Link>
                    </p>
                    <h2>
                      <Link href={prevPath}>{prevLabel}</Link>
                    </h2>
                  </div>
                </div>

                <div className="single-box style2">
                  <div className="text-box">
                    <p>
                      <Link href={nextPath}>
                        Next <span className="icon-up-right-arrow"></span>
                      </Link>
                    </p>
                    <h2>
                      <Link href={nextPath}>{nextLabel}</Link>
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
                    <Link className={`${transportType === "security-screening" ? "active" : ""}`} href="/security-screening">
                      Security Screening (Coming Soon)
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${transportType === "uk-eu-transport" ? "active" : ""}`} href="/uk-eu-transport">
                      UK & EU Transport
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${transportType === "white-glove-service" ? "active" : ""}`} href="/white-glove-service">
                      White Glove Service
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${transportType === "etsf" ? "active" : ""}`} href="/etsf">
                      ETSF (Coming Soon)
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${transportType === "warehousing" ? "active" : ""}`} href="/warehousing">
                      Warehousing & Storage
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${transportType === "pick-and-pack" ? "active" : ""}`} href="/pick-and-pack">
                      Pick & Pack
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </li>
                  <li>
                    <Link className={`${transportType === "temperature-controlled" ? "active" : ""}`} href="/temperature-controlled-storage-transportation">
                      Temperature Controlled Storage & Transportation
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
