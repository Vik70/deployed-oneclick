"use client";
import Link from "next/link";
import { useState } from "react";

const Video = () => {
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
    <section className={`video-one ${popup ? 'zindex-50' : 'zindex-1'}`}>
      <style jsx>{`
        .zindex-50 {
          z-index: 50;
        }
        .zindex-1 {
          z-index: 3;
        }
      `}</style>
      <div className="container">
        <div
          className="video-one__inner"
          style={{
            backgroundImage: "url(/img/background/video-v1-bg.jpg)",
          }}
        >
          <div className="video-one__video">
            <a
              className="video-one__video-btn video-popup"
              onClick={openPopup}
            >
              <span className="txt">Play</span>
            </a>
          </div>
          <div className="overlay-text">
            <h3>
              <a>Watch Our Intro</a>
            </h3>
            <div className="icon">
              <a>
                <span className="icon-right-arrow-2"></span>
              </a>
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
            src=""
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

export default Video;
