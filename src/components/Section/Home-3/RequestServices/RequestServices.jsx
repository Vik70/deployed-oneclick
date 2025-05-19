'use client'
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'AirFreight', label: 'Air Freight' },
    { value: 'AirFreight2', label: 'Air Freight' },
    { value: 'AirFreight3', label: 'Air Freight' },
];
const options2 = [
    { value: 'Value1', label: 'Value 1' },
    { value: 'Value2', label: 'Value 1' },
    { value: 'Value3', label: 'Value 1' },
];

const RequestServices = () => {
    const [activeBtn, setActiveBtn] = useState("quote");
    const [selected, setSelected] = useState(null);
    const [selected2, setSelected2] = useState(null);

    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
    };
    const handleChange2 = (selectedOption2) => {
        setSelected2(selectedOption2);
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
        <section className="request-services-one request-services-one--two padding">
            <div
                className="request-services-one--two__bg"
                style={{ backgroundImage: "url(/img/background/request-services-v2-bg.jpg)" }}>
            </div>
            <div className="shape2">
                <img src="/img/shape/request-services-v2-shape1.png" alt="" />
            </div>
            <div className="shape3">
                <img src="/img/shape/request-services-v2-shape2.png" alt="" />
            </div>
            <div className="request-services-one--two__img1 float-bob-y">
                <img src="/img/resource/request-services-v2-img1.png" alt="" />
            </div>

            <div className="container">
                <div className="sec-title-style3 text-center">
                    <div className="sub-title center">
                        <div className="icon">
                            <img src="/img/icon/title-marker-2.png" alt="" />
                        </div>
                        <h5>Request Services</h5>
                    </div>
                    <h2>Get Free Freight Quote</h2>
                </div>

                <div className="row">
                    <div className="col-xl-11">
                        <div className="request-services-one__form-box">
                            <div className="request-services-one__form-tab tabs-box">
                                <ul className="tab-buttons clearfix list-unstyled">
                                    <li data-tab="#quote" className={`tab-btn ${activeBtn === "quote" ? "active-btn" : ""}`} onClick={quoteBtnHandler}>
                                        <span>Request A Quote</span>
                                    </li>
                                    <li data-tab="#track" className={`tab-btn ${activeBtn === "track" ? "active-btn" : ""}`} onClick={trackBtnHandler}>
                                        <span>Track & Trace</span>
                                    </li>
                                </ul>

                                <div className="tabs-content">
                                    {(() => {
                                        if (activeBtn === "quote") {
                                            return (
                                                <div className={`tab ${activeBtn === "quote" ? "active-tab" : ""}`} id="quote">
                                                    <div className="request-services-one__single-tab">
                                                        <form
                                                            id="contact-form2"
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
                                                                            <div className="select-box">
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
                                                                                            backgroundColor: 'transparent',
                                                                                            color: '#fff'
                                                                                        }),
                                                                                        option: (provided, state) => ({
                                                                                            ...provided,
                                                                                            display: 'block',
                                                                                            width: '100%',
                                                                                            float: 'none',
                                                                                            borderRight: 'none',
                                                                                            color: '#ffffff',
                                                                                            color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : '#000',
                                                                                            fontWeight: 500,
                                                                                            lineHeight: '40px',
                                                                                            listStyle: 'none',
                                                                                            minHeight: '40px',
                                                                                            outline: 'none',
                                                                                            paddingLeft: '18px',
                                                                                            paddingRight: '29px',
                                                                                            textAlign: 'left',
                                                                                            cursor: 'pointer',
                                                                                            transition: 'all 0.2s',
                                                                                            backgroundColor: state.isSelected ? '#000' : state.isFocused ? '#121213' : '#FFD550',
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
                                                                            <div className="select-box value-option">
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
                                                                                            backgroundColor: 'transparent',
                                                                                            color: '#fff'
                                                                                        }),
                                                                                        option: (provided, state) => ({
                                                                                            ...provided,
                                                                                            display: 'block',
                                                                                            width: '100%',
                                                                                            float: 'none',
                                                                                            borderRight: 'none',
                                                                                            color: '#ffffff',
                                                                                            color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : '#000',
                                                                                            fontWeight: 500,
                                                                                            lineHeight: '40px',
                                                                                            listStyle: 'none',
                                                                                            minHeight: '40px',
                                                                                            outline: 'none',
                                                                                            paddingLeft: '18px',
                                                                                            paddingRight: '29px',
                                                                                            textAlign: 'left',
                                                                                            cursor: 'pointer',
                                                                                            transition: 'all 0.2s',
                                                                                            backgroundColor: state.isSelected ? '#000' : state.isFocused ? '#121213' : '#FFD550',
                                                                                        }),
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
                                                                            <label for="tag_1"
                                                                            ><span></span>Express Delivery</label>
                                                                        </div>

                                                                        <div className="single-tags">
                                                                            <input
                                                                                type="checkbox"
                                                                                name="express-delivery"
                                                                                id="tag_2"
                                                                            />
                                                                            <label for="tag_2"><span></span>Insurance</label>
                                                                        </div>

                                                                        <div className="single-tags">
                                                                            <input
                                                                                type="checkbox"
                                                                                name="express-delivery"
                                                                                id="tag_3"
                                                                            />
                                                                            <label for="tag_3"
                                                                            ><span></span>Packaging</label>
                                                                        </div>

                                                                        <div className="single-tags">
                                                                            <input
                                                                                type="checkbox"
                                                                                name="express-delivery"
                                                                                id="tag_4"
                                                                            />
                                                                            <label for="tag_4"
                                                                            ><span></span>Fragile</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                                    <div className="request-services-one__form-btn">
                                                                        <button
                                                                            className="thm-btn submit-btn-extra"
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
                                                <div className={`tab ${activeBtn === "track" ? "active-tab" : ""}`} id="track">
                                                    <div className="request-services-one__single-tab">
                                                        <form
                                                            id="contact-form2"
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
                                                                            <div className="select-box">
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
                                                                                            backgroundColor: 'transparent',
                                                                                            color: '#fff'
                                                                                        }),
                                                                                        option: (provided, state) => ({
                                                                                            ...provided,
                                                                                            display: 'block',
                                                                                            width: '100%',
                                                                                            float: 'none',
                                                                                            borderRight: 'none',
                                                                                            color: '#ffffff',
                                                                                            color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : '#000',
                                                                                            fontWeight: 500,
                                                                                            lineHeight: '40px',
                                                                                            listStyle: 'none',
                                                                                            minHeight: '40px',
                                                                                            outline: 'none',
                                                                                            paddingLeft: '18px',
                                                                                            paddingRight: '29px',
                                                                                            textAlign: 'left',
                                                                                            cursor: 'pointer',
                                                                                            transition: 'all 0.2s',
                                                                                            backgroundColor: state.isSelected ? '#000' : state.isFocused ? '#121213' : '#FFD550',
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
                                                                            <div className="select-box value-option">
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
                                                                                            backgroundColor: 'transparent',
                                                                                            color: '#fff'
                                                                                        }),
                                                                                        option: (provided, state) => ({
                                                                                            ...provided,
                                                                                            display: 'block',
                                                                                            width: '100%',
                                                                                            float: 'none',
                                                                                            borderRight: 'none',
                                                                                            color: '#ffffff',
                                                                                            color: state.isSelected ? '#fff' : state.isFocused ? '#fff' : '#000',
                                                                                            fontWeight: 500,
                                                                                            lineHeight: '40px',
                                                                                            listStyle: 'none',
                                                                                            minHeight: '40px',
                                                                                            outline: 'none',
                                                                                            paddingLeft: '18px',
                                                                                            paddingRight: '29px',
                                                                                            textAlign: 'left',
                                                                                            cursor: 'pointer',
                                                                                            transition: 'all 0.2s',
                                                                                            backgroundColor: state.isSelected ? '#000' : state.isFocused ? '#121213' : '#FFD550',
                                                                                        }),
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
                                                                            <label for="tag_1"
                                                                            ><span></span>Express Delivery</label>
                                                                        </div>

                                                                        <div className="single-tags">
                                                                            <input
                                                                                type="checkbox"
                                                                                name="express-delivery"
                                                                                id="tag_2"
                                                                            />
                                                                            <label for="tag_2"><span></span>Insurance</label>
                                                                        </div>

                                                                        <div className="single-tags">
                                                                            <input
                                                                                type="checkbox"
                                                                                name="express-delivery"
                                                                                id="tag_3"
                                                                            />
                                                                            <label for="tag_3"
                                                                            ><span></span>Packaging</label>
                                                                        </div>

                                                                        <div className="single-tags">
                                                                            <input
                                                                                type="checkbox"
                                                                                name="express-delivery"
                                                                                id="tag_4"
                                                                            />
                                                                            <label for="tag_4"
                                                                            ><span></span>Fragile</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                                    <div className="request-services-one__form-btn">
                                                                        <button
                                                                            className="thm-btn submit-btn-extra"
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
                </div>
            </div >
        </section >
    );
};

export default RequestServices;