/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link'
import React from 'react'

export default function Pricing() {
    return (
        <section className="pricing-one padding">
            <div
                className="pricing-one__bg"
                style={{
                    backgroundImage: "url(/img/background/pricing-v1-bg.jpg)"
                }}
            ></div>
            <div className="container">
                <div className="sec-title-two text-center">
                    <div className="sub-title">
                        <h5>Pricing</h5>
                    </div>
                    <h2>Our Best Pricing Plan</h2>
                </div>

                <div className="row">
                    {/* <!--Start Pricing One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="pricing-one__single text-center">
                            <div
                                className="pricing-one__single-bg"
                                style={{
                                    backgroundImage: 'url(/img/resource/pricing-v1-single-bg.jpg)'
                                }}
                            ></div>
                            <div className="table-header">
                                <div className="img-box">
                                    <img src="/img/resource/pricing-v1-img1.jpg" alt="" />
                                </div>
                            </div>

                            <div className="table-content">
                                <div className="table-content__top">
                                    <h3>Roade Freight</h3>
                                    <h2>$39 <span>/ 256kg</span></h2>
                                </div>

                                <ul>
                                    <li>
                                        <p><span className="icon-check"></span>Single Truck</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-check"></span>Full Insurance</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-check"></span>500 Km</p>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="icon-check"></span>Real-time rate shiping
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="table-footer">
                                <div className="btn-box">
                                    <Link className="thm-btn" href="contact">
                                        <span className="txt">Get a Quote</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Pricing One Single--> */}

                    {/* <!--Start Pricing One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                        <div className="pricing-one__single text-center">
                            <div
                                className="pricing-one__single-bg"
                                style={{
                                    backgroundImage: 'url(/img/resource/pricing-v1-single-bg.jpg)'
                                }}

                            ></div>
                            <div className="table-header">
                                <div className="img-box">
                                    <img src="/img/resource/pricing-v1-img2.jpg" alt="" />
                                </div>
                            </div>

                            <div className="table-content">
                                <div className="table-content__top">
                                    <h3>Air Freight</h3>
                                    <h2>$70 <span>/ 300kg</span></h2>
                                </div>

                                <ul>
                                    <li>
                                        <p><span className="icon-check"></span>Single Truck</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-check"></span>Full Insurance</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-check"></span>500 Km</p>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="icon-check"></span>Real-time rate shiping
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="table-footer">
                                <div className="btn-box">
                                    <Link className="thm-btn" href="contact">
                                        <span className="txt">Get a Quote</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Pricing One Single--> */}

                    {/* <!--Start Pricing One Single--> */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                        <div className="pricing-one__single text-center">
                            <div
                                className="pricing-one__single-bg"
                                style={{
                                    backgroundImage: 'url(/img/resource/pricing-v1-single-bg.jpg)'
                                }}

                            ></div>
                            <div className="table-header">
                                <div className="img-box">
                                    <img src="/img/resource/pricing-v1-img3.jpg" alt="" />
                                </div>
                            </div>

                            <div className="table-content">
                                <div className="table-content__top">
                                    <h3>Cargo Transport</h3>
                                    <h2>$120 <span>/ 500kg</span></h2>
                                </div>

                                <ul>
                                    <li>
                                        <p><span className="icon-check"></span>Single Truck</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-check"></span>Full Insurance</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-check"></span>500 Km</p>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="icon-check"></span>Real-time rate shiping
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="table-footer">
                                <div className="btn-box">
                                    <Link className="thm-btn" href="contact">
                                        <span className="txt">Get a Quote</span>
                                        <i className="icon-right-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Pricing One Single--> */}
                </div>
            </div>
        </section >
    )
}
