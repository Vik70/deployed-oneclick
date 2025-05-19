"use client";
import data from '~/public/db/serviceData.json'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import ServiceCard from "~/components/Ui/Cards/ServiceCard";

const Service = () => {

  return (
    <section className="service-one padding-bottom">
      <div className="container">
        <div className="service-one__top">
          <div className="sec-title">
            <div className="sub-title">
              <h5>
                <span className="icon-right-arrow-1"></span> Our Services
              </h5>
            </div>
            <h2>
              Fast and professional <br />
              services
            </h2>
          </div>

          <div className="btn-box">
            <Link className="thm-btn" href="services">
              <span className="txt">View All Services</span>
              <i className="icon-right-arrow"></i>
            </Link>
          </div>
        </div>
        <Swiper
          className="thm-swiper__slider swiper-container"
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          pagination={{
            el: "#service-one__pagination",
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
                <ServiceCard item={item} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="swiper-pagination" id="service-one__pagination"></div>
      </div>
    </section>
  );
};

export default Service;
