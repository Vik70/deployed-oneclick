'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCardFour from "~/components/Ui/Cards/ProjectCardFour";

const Project = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./db/projectDataFour.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            {/* Start Project Thre */}
            <section className="project-three padding">
                <div className="container">
                    <div className="project-three__top">
                        <div className="sec-title-style3">
                            <div className="sub-title">
                                <div className="icon">
                                    <img src="/img/icon/title-marker-4.png" alt="" />
                                </div>
                                <h5>Latest Project</h5>
                            </div>
                            <h2>
                                Transporting Across <br />
                                The World
                            </h2>
                        </div>

                        <div className="btn-box">
                            <Link className="thm-btn" href="projects">
                                <span className="txt">View All Project</span>
                            </Link>
                        </div>
                    </div>

                    <Swiper
                        spaceBetween={50}
                        centeredSlides={true}
                        loop={true}
                        loopAdditionalSlides={1}
                        autoplay={{
                            delay: 2500,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        slidesPerView={3}
                        className="thm-swiper__slider swiper-container"
                        speed={1400}
                        pagination={{
                            el: "#project-three__pagination",
                            type: "bullets",
                            clickable: true
                        }}
                        navigation={{
                            nextEl: "#team-one__swiper-button-next",
                            prevEl: "#team-one__swiper-button-prev"
                        }}
                        breakpoints={{
                            0: {
                                spaceBetween: 24,
                                slidesPerView: 1
                            },
                            375: {
                                spaceBetween: 24,
                                slidesPerView: 1
                            },
                            575: {
                                spaceBetween: 24,
                                slidesPerView: 1
                            },
                            768: {
                                spaceBetween: 24,
                                slidesPerView: 1
                            },
                            992: {
                                spaceBetween: 24,
                                slidesPerView: 1
                            },
                            1200: {
                                spaceBetween: 24,
                                slidesPerView: 1
                            }
                        }}
                    >
                        {data?.map((item, index) => (
                            <SwiperSlide className="swiper-slide" key={index}>
                                <ProjectCardFour item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* If we need navigation buttons */}
                    <div className="swiper-pagination" id="project-three__pagination"></div>
                </div>
            </section >
            {/* End Project Thre */}
        </div>
    );
};

export default Project;
