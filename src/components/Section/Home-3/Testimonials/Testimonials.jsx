/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';


const Testimonials = () => {
    return (
        <div>
           
            <section className="testimonials-three padding">
                <div
                    className="testimonials-three__bg"
                    style={{ backgroundImage: 'url(/img/background/testimonials-v3-bg.jpg)' }}
                ></div>
                <div className="container">
                    <div className="sec-title-style3 text-center">
                        <div className="sub-title center">
                            <div className="icon">
                                <img src="/img/icon/title-marker.png" alt="" />
                            </div>
                            <h5>Testimonials</h5>
                        </div>
                        <h2>Saying People About Our Services</h2>
                    </div>
                    <div className="row">
                       
                        <div
                            className="col-xl-6 wow fadeInLeft"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="testimonials-three__img">
                                <img
                                    src="/img/testimonial/testimonials-v3-img1.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                       

                       
                        <div className="col-xl-6">
                            <div className="testimonials-three__content-box">

                                <Swiper className="testimonials-three__content homethree_testimonial"
                                    direction={'horizontal'}
                                    slidesPerView={1}
                                    loop={true}
                                    spaceBetween={30}
                                    mousewheel={true}
                                    onDurationChange={7000}
                                    pagination={{
                                        clickable: true,
                                        renderBullet: function (index, className) {
                                            let imageSrc = "";
                                            // Assign different image sources based on the index
                                            switch (index) {
                                                case 0:
                                                    imageSrc = "/img/testimonial/testimonials-v3-img2.jpg";
                                                    break;
                                                case 1:
                                                    imageSrc = "/img/testimonial/testimonials-v3-img3.jpg";
                                                    break;
                                                case 2:
                                                    imageSrc = "/img/testimonial/testimonials-v3-img4.jpg";
                                                    break;
                                                case 3:
                                                    imageSrc = "/img/testimonial/testimonials-v3-img5.jpg";
                                                    break;
                                                // Add more cases for additional images
                                                default:
                                                    // Use a default image if needed
                                                    imageSrc = "/img/default.jpg";
                                                    break;
                                            }
                                            return '<span class="' + className + '"><img src="' + imageSrc + '" alt="Bullet ' + (index + 1) + '"></span>';
                                        },
                                    }}
                                    modules={[Mousewheel, Pagination, Navigation]}
                                    navigation={{
                                        nextEl: "#testimonials-three__swiper-button-next",
                                        prevEl: "#testimonials-three__swiper-button-prev",
                                    }}
                                >
                                    <div
                                        className="swiper-container"
                                        id="testimonials-three__carousel"
                                    >
                                        <div className="swiper-wrapper">
                                           
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonials-three__content-single">
                                                    <div className="testimonials-three__content-single-top">
                                                        <div className="text">
                                                            <h3>“Cargo Transport”</h3>
                                                        </div>
                                                        <div className="rating-box">
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="testimonials-three__content-single-bottom"
                                                    >
                                                        <p>
                                                            Many desktop publishing packages and web page
                                                            editors now use lorem Ipsum as their default model
                                                            text, and a search for 'lorem ipsum' will uncover
                                                            many web sites.
                                                        </p>
                                                        <h3>
                                                            Helen Wilmore / <span>Satisfied Customer</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                           

                                           
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonials-three__content-single">
                                                    <div className="testimonials-three__content-single-top">
                                                        <div className="text">
                                                            <h3>“Cargo Transport”</h3>
                                                        </div>
                                                        <div className="rating-box">
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="testimonials-three__content-single-bottom"
                                                    >
                                                        <p>
                                                            Many desktop publishing packages and web page
                                                            editors now use lorem Ipsum as their default model
                                                            text, and a search for 'lorem ipsum' will uncover
                                                            many web sites.
                                                        </p>
                                                        <h3>
                                                            Helen Wilmore / <span>Satisfied Customer</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                           

                                           
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonials-three__content-single">
                                                    <div className="testimonials-three__content-single-top">
                                                        <div className="text">
                                                            <h3>“Cargo Transport”</h3>
                                                        </div>
                                                        <div className="rating-box">
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="testimonials-three__content-single-bottom"
                                                    >
                                                        <p>
                                                            Many desktop publishing packages and web page
                                                            editors now use lorem Ipsum as their default model
                                                            text, and a search for 'lorem ipsum' will uncover
                                                            many web sites.
                                                        </p>
                                                        <h3>
                                                            Helen Wilmore / <span>Satisfied Customer</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                           

                                           
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonials-three__content-single">
                                                    <div className="testimonials-three__content-single-top">
                                                        <div className="text">
                                                            <h3>“Cargo Transport”</h3>
                                                        </div>
                                                        <div className="rating-box">
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                            <Link href="#"><i className="icon-star"></i></Link>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="testimonials-three__content-single-bottom"
                                                    >
                                                        <p>
                                                            Many desktop publishing packages and web page
                                                            editors now use lorem Ipsum as their default model
                                                            text, and a search for 'lorem ipsum' will uncover
                                                            many web sites.
                                                        </p>
                                                        <h3>
                                                            Helen Wilmore / <span>Satisfied Customer</span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                           
                             
                                           
                                        </div>
                                    </div>

                                    <div className="testimonials-three__nav">
                                        <div
                                            className="swiper-button-prev"
                                            id="testimonials-three__swiper-button-next"
                                        >
                                            <i className="icon-left-arrow" aria-hidden="true"></i>
                                        </div>
                                        <div
                                            className="swiper-button-next"
                                            id="testimonials-three__swiper-button-prev"
                                        >
                                            <i className="icon-right-arrow1" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
           
        </div>
    );
};

export default Testimonials;