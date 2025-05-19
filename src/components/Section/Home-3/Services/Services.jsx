"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServiceCardFour from "~/components/Ui/Cards/ServiceCardFour";

const Services = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./db/serviceDataFour.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div>
            {/* Start Services Thre */}
            <section className="services-three padding">
                <div
                    className="services-three__bg"
                    style={{ backgroundImage: "url(/img/background/services-v3-bg.jpg)" }}
                ></div>
                <div className="container">
                    <div className="services-three__top">
                        <div className="sec-title-style3">
                            <div className="sub-title">
                                <div className="icon">
                                    <img src="/img/icon/title-marker.png" alt="" />
                                </div>
                                <h5>Our Services</h5>
                            </div>
                            <h2>
                                We Provide all Kinds of <br />
                                Logistics Service
                            </h2>
                        </div>

                        <div className="btn-box">
                            <Link className="thm-btn" href="services">
                                <span className="txt">View All Services</span>
                            </Link>
                        </div>
                    </div>

                    <Swiper
                        className="thm-swiper__slider swiper-container"
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        pagination={{
                            el: "#services-three__pagination",
                            type: "bullets",
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: "#team-one__swiper-button-next",
                            prevEl: "#team-one__swiper-button-prev",
                        }}
                        autoplay={{
                            delay: 5000,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            375: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            575: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <div className="swiper-wrapper">
                            {data?.map((item, index) => (
                                <SwiperSlide className="swiper-slide" key={index}>
                                    <ServiceCardFour item={item} />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                    {/* If we need navigation buttons */}
                    <div className="swiper-pagination" id="services-three__pagination"></div>
                </div>
            </section>
            {/* End Services Thre */}
        </div>
    );
};

export default Services;