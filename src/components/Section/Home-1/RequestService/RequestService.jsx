"use client";
import { useState } from "react";
import Link from "next/link";
import Select from 'react-select';

const options = [
  { value: 'AirFreight', label: 'Air Freight' },
  { value: 'AirFreight2', label: 'Air Freight' },
  { value: 'AirFreight3', label: 'Air Freight' },
  { value: 'AirFreight4', label: 'Air Freight' },
];
const options2 = [
  { value: 'Value1', label: 'Value 1' },
  { value: 'Value2', label: 'Value 2' },
  { value: 'Value3', label: 'Value 3' },
  { value: 'Value4', label: 'Value 4' },
];
const options3 = [
  { value: 'AirFreight', label: 'Air Freight' },
  { value: 'AirFreight2', label: 'Air Freight' },
  { value: 'AirFreight3', label: 'Air Freight' },
  { value: 'AirFreight4', label: 'Air Freight' },
];
const options4 = [
  { value: 'Value1', label: 'Value 1' },
  { value: 'Value2', label: 'Value 2' },
  { value: 'Value3', label: 'Value 3' },
  { value: 'Value4', label: 'Value 4' },
];

const RequestService = () => {
  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [selected3, setSelected3] = useState(null);
  const [selected4, setSelected4] = useState(null);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };
  const handleChange2 = (selectedOption2) => {
    setSelected2(selectedOption2);
  };
  const handleChange3 = (selectedOption3) => {
    setSelected3(selectedOption3);
  };
  const handleChange4 = (selectedOption4) => {
    setSelected4(selectedOption4);
  };

  const [activeBtn, setActiveBtn] = useState("quote");


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
  
  const quoteBtnHandler = () => {
    setActiveBtn("quote");
    const tab = document.querySelector('.tab');
    if (tab) {
      tab.classList.add('fade-right');
      setTimeout(() => {
        tab.classList.remove('fade-right');
      }, 500);
    } else {
      console.error('Tab element not found');
    }
  }
  const trackBtnHandler = () => {
    setActiveBtn("track");
    const tabTwo = document.querySelector('.tab');
    if (tabTwo) {
      tabTwo.classList.add('fade-right');
      setTimeout(() => {
        tabTwo.classList.remove('fade-right');
      }, 500);
    } else {
      console.error('Tab element not found');
    }
  }

  return (
    <section className={`request-services-one padding ${popup ? 'zindex-50' : 'zindex-1'}`}>
      <style jsx>{`
      .zindex-50 {
        z-index: 50;
      }
      .zindex-1 {
        z-index: 3;
      }
    `}</style>
      <div
        className="request-services-one__bg"
        style={{
          backgroundImage: "url(/img/background/request-services-v1-bg.jpg)",
        }}
      ></div>
      <div className="shape1 float-bob-y">
        <img src="/img/shape/request-services-v1-shape1.png" alt="" />
      </div>
      <div className="container">
        <div className="request-services-one__top">
          <div className="sec-title">
            <div className="sub-title">
              <h5>
                <span className="icon-right-arrow-1"></span> Request Services
              </h5>
            </div>
            <h2>Get a Free Freight Quote</h2>
          </div>

          <div className="text-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              gravida risus commodo viverra maecenas.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8">
            <div className="request-services-one__form-box">
              <div className="request-services-one__form-tab tabs-box">
                <ul className="tab-buttons clearfix list-unstyled">
                  <li data-tab="#quote" className={`tab-btn ${activeBtn === "quote" ? "active-btn" : ""}`} onClick={quoteBtnHandler} >
                    <span>Request A Quote</span>
                  </li>
                  <li data-tab="#track" className={`tab-btn ${activeBtn === "track" ? "active-btn" : ""}`} onClick={trackBtnHandler} >
                    <span>Track & Trace</span>
                  </li>
                </ul>

                <div className="tabs-content">
                  {(() => {
                    if (activeBtn === "quote") {
                      return (
                        <div className={`tab ${activeBtn === "quote" ? "active-tab": ""}`} id="quote">
                          <div className="request-services-one__single-tab">
                            <form
                              id="contact-form"
                              className="default-form2 contact-form-validated request-services-one__form"
                            >
                              <div className="request-services-one__form-top">
                                <div className="title-box">
                                  <h3>General Information:</h3>
                                </div>
                                <div className="row">
                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Full Name</label>
                                      <input
                                        type="text"
                                        name="name"
                                        value=""
                                        placeholder="Ronald Richards"
                                        required=""
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Phone Number</label>
                                      <input
                                        type="text"
                                        placeholder="+1256 456 7890"
                                        name="phone"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Email Address</label>
                                      <input
                                        type="email"
                                        name="email"
                                        value=""
                                        placeholder="ronald@gmail.com"
                                        required=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Freight Type</label>
                                      <div className="select-box value-option extra-select-box" id="select-box-one">
                                        <Select
                                          options={options}
                                          value={selected}
                                          onChange={handleChange}
                                          styles={{
                                            control: (provided, state) => ({
                                              ...provided,
                                              width: '100%',
                                              height: '50px',
                                              fontSize: '16px',
                                              fontWeight: 500,
                                              fontStyle: 'normal',
                                              paddingLeft: '10px',
                                              paddingRight: '10px',
                                              borderRadius: '4px',
                                              transition: 'all 500ms ease',
                                              outline: 'none',
                                              backgroundColor: '#fff',
                                              color: '#000',
                                              color: state.isSelected ? '#000' : state.isFocused ? '#000' : '#000',
                                            }),
                                            option: (provided, state) => ({
                                              ...provided,
                                              display: 'block',
                                              width: '100%',
                                              float: 'none',
                                              borderRight: 'none',
                                              color: '#000',
                                              color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : '#fff',
                                              fontWeight: 500,
                                              lineHeight: '24px', // Set the height of options
                                              listStyle: 'none',
                                              minHeight: '35px',
                                              outline: 'none',
                                              paddingLeft: '18px',
                                              paddingRight: '29px',
                                              textAlign: 'left',
                                              cursor: 'pointer',
                                              transition: 'all 0.2s',
                                              backgroundColor: state.isSelected ? '#0D4250' : state.isFocused ? '#0D4250' : '#186265',

                                            }),

                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Departure City</label>
                                      <input
                                        type="text"
                                        placeholder="New York"
                                        name="city"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Delivery City</label>
                                      <input
                                        type="text"
                                        placeholder="Las Angle"
                                        name="city2"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="request-services-one__form-bottom">
                                <div className="title-box">
                                  <h3>Dimensions of Departure:</h3>
                                </div>

                                <div className="row">
                                  <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="input-box">
                                      <label>Incoterms</label>
                                      <div className="select-box value-option extra-select-box" id="select-box-one">
                                        <Select
                                          options={options2}
                                          value={selected2}
                                          onChange={handleChange2}
                                          styles={{
                                            control: (provided, state) => ({
                                              ...provided,
                                              width: '100%',
                                              height: '50px',
                                              fontSize: '16px',
                                              fontWeight: 500,
                                              fontStyle: 'normal',
                                              paddingLeft: '10px',
                                              paddingRight: '10px',
                                              borderRadius: '4px',
                                              transition: 'all 500ms ease',
                                              outline: 'none',
                                              backgroundColor: '#fff',
                                              color: '#000',
                                              color: state.isSelected ? '#000' : state.isFocused ? '#000' : '#000',
                                            }),
                                            option: (provided, state) => ({
                                              ...provided,
                                              display: 'block',
                                              width: '100%',
                                              float: 'none',
                                              borderRight: 'none',
                                              color: '#000',
                                              color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : '#fff',
                                              fontWeight: 500,
                                              lineHeight: '24px', // Set the height of options
                                              listStyle: 'none',
                                              minHeight: '35px',
                                              outline: 'none',
                                              paddingLeft: '18px',
                                              paddingRight: '29px',
                                              textAlign: 'left',
                                              cursor: 'pointer',
                                              transition: 'all 0.2s',
                                              backgroundColor: state.isSelected ? '#0D4250' : state.isFocused ? '#0D4250' : '#186265',
                                            })
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="input-box">
                                      <label>Height</label>
                                      <input
                                        type="number"
                                        placeholder="3"
                                        name="height"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="input-box">
                                      <label>Width</label>
                                      <input
                                        type="number"
                                        placeholder="3"
                                        name="width"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="input-box">
                                      <label>Length</label>
                                      <input
                                        type="number"
                                        placeholder="4"
                                        name="length"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="request-services-one__form-bottom-tag">
                                  <div className="title">
                                    <h3>Extra services:</h3>
                                  </div>

                                  <div className="tag-box">
                                    <div className="single-tags">
                                      <input
                                        type="checkbox"
                                        name="express-delivery"
                                        id="tag_1"
                                      />
                                      <label for="tag_1">
                                        <span></span>Express Delivery
                                      </label>
                                    </div>

                                    <div className="single-tags">
                                      <input
                                        type="checkbox"
                                        name="express-delivery"
                                        id="tag_2"
                                      />
                                      <label for="tag_2">
                                        <span></span>Insurance
                                      </label>
                                    </div>

                                    <div className="single-tags">
                                      <input
                                        type="checkbox"
                                        name="express-delivery"
                                        id="tag_3"
                                      />
                                      <label for="tag_3">
                                        <span></span>Packaging
                                      </label>
                                    </div>

                                    <div className="single-tags">
                                      <input
                                        type="checkbox"
                                        name="express-delivery"
                                        id="tag_4"
                                      />
                                      <label for="tag_4">
                                        <span></span>Fragile
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                  <div className="request-services-one__form-btn">
                                    <button
                                      className="thm-btn"
                                      type="submit"
                                      data-loading-text="Please wait..."
                                    >
                                      <span className="txt">Submit Now</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      )
                    } else if (activeBtn === "track") {
                      return (
                        <div className={`tab ${activeBtn === "track" ? "active-tab": ""}`} id="track">
                          <div className="request-services-one__single-tab">
                            <form
                              id="contact-form"
                              className="default-form2 contact-form-validated request-services-one__form"
                            >
                              <div className="request-services-one__form-top">
                                <div className="title-box">
                                  <h3>General Information:</h3>
                                </div>
                                <div className="row">
                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Full Name</label>
                                      <input
                                        type="text"
                                        name="name"
                                        value=""
                                        placeholder="Ronald Richards"
                                        required=""
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Phone Number</label>
                                      <input
                                        type="text"
                                        placeholder="+1256 456 7890"
                                        name="phone"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Email Address</label>
                                      <input
                                        type="email"
                                        name="email"
                                        value=""
                                        placeholder="ronald@gmail.com"
                                        required=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Freight Type</label>
                                      <div className="select-box value-option extra-select-box" id="select-box-one">
                                        <Select
                                          options={options}
                                          value={selected}
                                          onChange={handleChange}
                                          styles={{
                                            control: (provided, state) => ({
                                              ...provided,
                                              width: '100%',
                                              height: '50px',
                                              fontSize: '16px',
                                              fontWeight: 500,
                                              fontStyle: 'normal',
                                              paddingLeft: '10px',
                                              paddingRight: '10px',
                                              borderRadius: '4px',
                                              transition: 'all 500ms ease',
                                              outline: 'none',
                                              backgroundColor: '#fff',
                                              color: '#000',
                                              color: state.isSelected ? '#000' : state.isFocused ? '#000' : '#000',
                                            }),
                                            option: (provided, state) => ({
                                              ...provided,
                                              display: 'block',
                                              width: '100%',
                                              float: 'none',
                                              borderRight: 'none',
                                              color: '#000',
                                              color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : '#fff',
                                              fontWeight: 500,
                                              lineHeight: '24px', // Set the height of options
                                              listStyle: 'none',
                                              minHeight: '35px',
                                              outline: 'none',
                                              paddingLeft: '18px',
                                              paddingRight: '29px',
                                              textAlign: 'left',
                                              cursor: 'pointer',
                                              transition: 'all 0.2s',
                                              backgroundColor: state.isSelected ? '#0D4250' : state.isFocused ? '#0D4250' : '#186265',

                                            }),

                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Departure City</label>
                                      <input
                                        type="text"
                                        placeholder="New York"
                                        name="city"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                      <label>Delivery City</label>
                                      <input
                                        type="text"
                                        placeholder="Las Angle"
                                        name="city2"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="request-services-one__form-bottom">
                                <div className="title-box">
                                  <h3>Dimensions of Departure:</h3>
                                </div>

                                <div className="row">
                                  <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="input-box">
                                      <label>Incoterms</label>
                                      <div className="select-box value-option extra-select-box" id="select-box-one">
                                        <Select
                                          options={options2}
                                          value={selected2}
                                          onChange={handleChange2}
                                          styles={{
                                            control: (provided, state) => ({
                                              ...provided,
                                              width: '100%',
                                              height: '50px',
                                              fontSize: '16px',
                                              fontWeight: 500,
                                              fontStyle: 'normal',
                                              paddingLeft: '10px',
                                              paddingRight: '10px',
                                              borderRadius: '4px',
                                              transition: 'all 500ms ease',
                                              outline: 'none',
                                              backgroundColor: '#fff',
                                              color: '#000',
                                              color: state.isSelected ? '#000' : state.isFocused ? '#000' : '#000',
                                            }),
                                            option: (provided, state) => ({
                                              ...provided,
                                              display: 'block',
                                              width: '100%',
                                              float: 'none',
                                              borderRight: 'none',
                                              color: '#000',
                                              color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : '#fff',
                                              fontWeight: 500,
                                              lineHeight: '24px', // Set the height of options
                                              listStyle: 'none',
                                              minHeight: '35px',
                                              outline: 'none',
                                              paddingLeft: '18px',
                                              paddingRight: '29px',
                                              textAlign: 'left',
                                              cursor: 'pointer',
                                              transition: 'all 0.2s',
                                              backgroundColor: state.isSelected ? '#0D4250' : state.isFocused ? '#0D4250' : '#186265',
                                            })
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="input-box">
                                      <label>Height</label>
                                      <input
                                        type="number"
                                        placeholder="3"
                                        name="height"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="input-box">
                                      <label>Width</label>
                                      <input
                                        type="number"
                                        placeholder="3"
                                        name="width"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-xl-3 col-lg-3 col-md-3">
                                    <div className="input-box">
                                      <label>Length</label>
                                      <input
                                        type="number"
                                        placeholder="4"
                                        name="length"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="request-services-one__form-bottom-tag">
                                  <div className="title">
                                    <h3>Extra services:</h3>
                                  </div>

                                  <div className="tag-box">
                                    <div className="single-tags">
                                      <input
                                        type="checkbox"
                                        name="express-delivery"
                                        id="tag_1"
                                      />
                                      <label for="tag_1">
                                        <span></span>Express Delivery
                                      </label>
                                    </div>

                                    <div className="single-tags">
                                      <input
                                        type="checkbox"
                                        name="express-delivery"
                                        id="tag_2"
                                      />
                                      <label for="tag_2">
                                        <span></span>Insurance
                                      </label>
                                    </div>

                                    <div className="single-tags">
                                      <input
                                        type="checkbox"
                                        name="express-delivery"
                                        id="tag_3"
                                      />
                                      <label for="tag_3">
                                        <span></span>Packaging
                                      </label>
                                    </div>

                                    <div className="single-tags">
                                      <input
                                        type="checkbox"
                                        name="express-delivery"
                                        id="tag_4"
                                      />
                                      <label for="tag_4">
                                        <span></span>Fragile
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                  <div className="request-services-one__form-btn">
                                    <button
                                      className="thm-btn"
                                      type="submit"
                                      data-loading-text="Please wait..."
                                    >
                                      <span className="txt">Submit Now</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      )
                    }
                  })()}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="request-services-one__content">
              <div className="request-services-one__content-img">
                <div className="inner">
                  <img
                    src="/img/resource/request-services-v1-img1.jpg"
                    alt=""
                  />
                  <div className="request-services-one__video">
                    <a
                      className="request-services-one__video-icon video-popup"
                      onClick={openPopup}
                    >
                      <span className="txt icon-play-button-arrowhead"></span>
                    </a>
                    <div className="title">
                      <h3>
                        <a>Watch Now</a>
                      </h3>
                    </div>
                  </div>
                  <div className="text-box">
                    <h3>
                      How to <br />
                      Transport <br />
                      your Product
                    </h3>
                  </div>
                </div>
              </div>

              <ul className="request-services-one__content-list">
                <li>
                  <div className="icon-box">
                    <span className="icon-global-network"></span>
                  </div>

                  <div className="text-box">
                    <h3>Fast Worldwide Delivery</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-enter-product-details"></span>
                  </div>

                  <div className="text-box">
                    <h3>Safe And Secure Delivery</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
              </ul>
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

export default RequestService;
