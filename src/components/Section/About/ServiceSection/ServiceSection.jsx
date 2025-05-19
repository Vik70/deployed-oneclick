"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ServiceCardFive from "~/components/Ui/Cards/ServiceCardFive";
import Link from "next/link";
import data from '~/public/db/serviceDataSix.json'

const ServiceSection = () => {
  return (
    <section className="services-three padding">
      <div
        className="services-three__bg"
        style={{ backgroundColor: "#e6f2ff" }}
      ></div>
      <div className="container">
        <div className="services-three__top">
          <div className="sec-title-style3">
            <div className="sub-title">
              <div className="icon">
              </div>
              <h5>Our Services</h5>
            </div>
            <h2>
              We Provide all Kinds of <br /> Transport and Handling Services
            </h2>
          </div>

          <div className="btn-box">
            <Link className="thm-btn" href="services">
              <span className="txt">View All Services</span>
            </Link>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            el: "#services-three__pagination",
            type: "bullets",
            clickable: true,
          }}
          navigation={{
            nextEl: "#team-one__swiper-button-next",
            prevEl: "#team-one__swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="thm-swiper__slider swiper-container mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            375: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <div className="swiper-wrapper">
            {data.map((service, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <ServiceCardFive service={service} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      {/* <!-- If we need pagination --> */}
      <div className="swiper-pagination" id="services-three__pagination"></div>
    </section>
  );
};

export default ServiceSection;