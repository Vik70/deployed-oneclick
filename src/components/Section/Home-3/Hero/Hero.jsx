'use client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
const Hero = () => {
    return (
        <section className="main-slider main-slider-three">
            <Swiper
                className="swiper-container thm-swiper__slider"
                slidesPerView={1}
                loop={true}
                effect={'fade'}
                pagination={{
                    el: "#main-slider-pagination",
                    type: "bullets",
                    clickable: true
                }}
                navigation={{
                    nextEl: "#main-slider__swiper-button-next",
                    prevEl: "#main-slider__swiper-button-prev"
                }}
                autoplay={{
                    delay: 5000
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}

            >
                <div className="swiper-wrapper">
                    {/* Start Swiper Slide Single */}
                    <SwiperSlide className="swiper-slide">
                        <div
                            className="image-layer"
                            style={{ backgroundImage: 'url(/img/slider/slider-v3-img1.jpg)' }}
                        ></div>

                        <div className="container">
                            <div className="main-slider-three__single padding">
                                <div className="shape1">
                                    <img src="/img/shape/slider-v3-shape1.png" alt="" />
                                </div>
                                <div className="main-slider-three__content text-center">
                                    <div className="tagline-box">
                                        <div className="icon">
                                            <img src="/img/icon/title-marker.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <p>We are the leading</p>
                                        </div>
                                    </div>

                                    <div className="title-box">
                                        <h2>
                                            Fast and Safe <br />
                                            <span>Transport</span>
                                        </h2>
                                    </div>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="services">
                                            <span className="txt">Discover More</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bottom-text-box extra-responsive">
                                    <div className="border"></div>
                                    <div className="text">
                                        <p>Cargo Freight</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* End Swiper Slide Single */}

                    {/* Start Swiper Slide Single */}
                    <SwiperSlide className="swiper-slide">
                        <div
                            className="image-layer"
                            style={{ backgroundImage: 'url(/img/slider/slider-v3-img2.jpg)' }}
                        ></div>

                        <div className="container">
                            <div className="main-slider-three__single padding">
                                <div className="shape1">
                                    <img src="/img/shape/slider-v3-shape1.png" alt="" />
                                </div>
                                <div className="main-slider-three__content text-center">
                                    <div className="tagline-box">
                                        <div className="icon">
                                            <img src="/img/icon/title-marker.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <p>We are the leading</p>
                                        </div>
                                    </div>

                                    <div className="title-box">
                                        <h2>
                                            The Best Transport <br />
                                            <span>Company</span>
                                        </h2>
                                    </div>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="services">
                                            <span className="txt">Discover More</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bottom-text-box extra-responsive">
                                    <div className="border"></div>
                                    <div className="text">
                                        <p>Air Freight</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* End Swiper Slide Single */}

                    {/* Start Swiper Slide Single */}
                    <SwiperSlide className="swiper-slide">
                        <div
                            className="image-layer"
                            style={{ backgroundImage: 'url(/img/slider/slider-v3-img4.jpg)' }}
                        ></div>

                        <div className="container">
                            <div className="main-slider-three__single padding">
                                <div className="shape1">
                                    <img src="/img/shape/slider-v3-shape1.png" alt="" />
                                </div>
                                <div className="main-slider-three__content text-center">
                                    <div className="tagline-box">
                                        <div className="icon">
                                            <img src="/img/icon/title-marker.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <p>We are the leading</p>
                                        </div>
                                    </div>

                                    <div className="title-box">
                                        <h2>
                                            Fast and Safe <br />
                                            <span>Transport</span>
                                        </h2>
                                    </div>

                                    <div className="btn-box">
                                        <Link className="thm-btn" href="services">
                                            <span className="txt">Discover More</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bottom-text-box extra-responsive">
                                    <div className="border"></div>
                                    <div className="text">
                                        <p>Logistic Freight</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* End Swiper Slide Single */}
                </div>

                {/* If we need navigation buttons  */}
                <div className="swiper-pagination" id="main-slider-pagination"></div>

                <div className="main-slider__nav">
                    <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>

            </Swiper >
        </section >
    );
};

export default Hero;
