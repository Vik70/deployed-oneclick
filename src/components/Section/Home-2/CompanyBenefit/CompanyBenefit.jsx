/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'FreightType1', label: 'Freight Type' },
  { value: 'FreightType2', label: 'Freight Type 1' },
  { value: 'FreightType3', label: 'Freight Type 2' },
  { value: 'FreightType4', label: 'Freight Type 3' },
];

const options2 = [
  { value: 'Load1', label: 'Load' },
  { value: 'Load2', label: 'Load 2' },
  { value: 'Load3', label: 'Load 3' },
  { value: 'Load4', label: 'Load 4' },
];

export default function CompanyBenefit() {
  const [distance, setDistance] = useState(50);
  const [isImproved, setIsImproved] = useState(false);
  const [isSlidToSide, setIsSlidToSide] = useState(false);
  const initialSelected = options.find(option => option.label === 'Freight Type');
  const initialSelected2 = options2.find(option => option.label === 'Load');

    const [selected, setSelected] = useState(initialSelected);
    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
    };

    const [selected2, setSelected2] = useState(initialSelected2);
    const handleChange2 = (selectedOption2) => {
        setSelected2(selectedOption2);
    };
  useEffect(() => {
    setIsImproved(distance > 50);
    setIsSlidToSide(distance !== 50 && distance !== 500);
  }, [distance]);

  // Function to handle range slider change
  const handleRangeChange = (e) => {
    const newDistance = parseInt(e.target.value);
    setDistance(newDistance); // Update the distance value
  };



  return (
    <section className="company-benefit-one padding">
      <div
        className={`company-benefit-one__img wow fadeInRight ${isImproved ? 'improved-bg' : ''}`}
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
        style={{
          backgroundImage: "url(/img/resource/company-benefit-v1-img1.jpg)"
        }}
      ></div>
      <div className="container">
        <div className="row">
          {/* <!--Start Company Benefit One Content--> */}
          <div className="col-xl-6">
            <div className="company-benefit-one__content">
              <div className="sec-title-two">
                <div className="sub-title">
                  <h5>Company Benefit</h5>
                </div>
                <h2>Why do You Like Translo?</h2>
              </div>

              <div className="company-benefit-one__content-text">
                <p>
                  More than a supplier, we work as a true partner and
                  accompany you with recommendations, based on your mobility
                  data, so that you can reduce your costs,
                </p>
              </div>

              <ul className="company-benefit-one__content-list">
                <li
                  className="wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="shape1">
                    <img
                      src="/img/shape/company-benefit-v1-shape1.png"
                      alt=""
                    />
                  </div>
                  <div className="icon-box">
                    <span className="icon-right-time-delivery-1"></span>
                  </div>

                  <div className="content-box">
                    <h3>Right Time Delivery</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt.
                    </p>
                  </div>
                </li>

                <li
                  className="wow fadeInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <div className="shape1">
                    <img
                      src="/img/shape/company-benefit-v1-shape1.png"
                      alt=""
                    />
                  </div>
                  <div className="icon-box">
                    <span className="icon-online-support"></span>
                  </div>

                  <div className="content-box">
                    <h3>24/7 Online Support</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt.
                    </p>
                  </div>
                </li>

                <li
                  className="wow fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="shape1">
                    <img
                      src="/img/shape/company-benefit-v1-shape1.png"
                      alt=""
                    />
                  </div>
                  <div className="icon-box">
                    <span className="icon-safe-package"></span>
                  </div>

                  <div className="content-box">
                    <h3>Safe Package</h3>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--End Company Benefit One Content--> */}

          {/* <!--Start Company Benefit One Form--> */}
          <div className="col-xl-6">
            <div className="company-benefit-one__form">
              <div className="title-box">
                <h2>Request Quick Quote</h2>
              </div>

              <form  >
                <div className="company-benefit-one__distance-box">
                  <div className="title">
                    <h3>Distance:</h3>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    value={distance}
                    onChange={handleRangeChange}
                    className="slider rangeSlider"
                    id="rangeSlider1"
                    style={{
                      background: `linear-gradient(to right, #FFD550 ${((distance - 50) / 450) * 100}%, white 0)`
                    }}
                  />

                  <div className="form-group">
                    <div className="inner">
                      <p><span id="min-value-rangeslider">50</span>km</p>
                      <span>-</span>
                      <p><span id="max-value-rangeslider">{distance}</span>km</p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="username"
                        placeholder="Full Name"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required=""
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">

                      <div className="select-box value-option" id='select-box-home-two'>
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
                              paddingLeft: '5px',
                              paddingRight: '0px',
                              borderRadius: '4px',
                              transition: 'all 500ms ease',
                              outline: 'none',
                              backgroundColor: '#fff',
                              color: '#fff'
                            }),
                            option: (provided, state) => ({
                              ...provided,
                              display: 'block',
                              width: '100%',
                              float: 'none',
                              borderRight: 'none',
                              color: '#ffffff',
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
                              backgroundColor: state.isSelected ? '#121213' : state.isFocused ? '#121213' : '#FF5E15',
                            })
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      
                      <div className="select-box value-option" id='select-box-home-two'>
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
                              paddingLeft: '5px',
                              paddingRight: '0px',
                              borderRadius: '4px',
                              transition: 'all 500ms ease',
                              outline: 'none',
                              backgroundColor: '#fff',
                              color: '#fff'
                            }),
                            option: (provided, state) => ({
                              ...provided,
                              display: 'block',
                              width: '100%',
                              float: 'none',
                              borderRight: 'none',
                              color: '#ffffff',
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
                              backgroundColor: state.isSelected ? '#121213' : state.isFocused ? '#121213' : '#FF5E15',
                            })
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="form-group">
                      <textarea placeholder="Write your message"></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12">
                    <div className="button-box">
                      <button
                        className="thm-btn"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span className="txt">Send Request</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!--End Company Benefit One Form--> */}
        </div>
      </div>
    </section>
  );
}