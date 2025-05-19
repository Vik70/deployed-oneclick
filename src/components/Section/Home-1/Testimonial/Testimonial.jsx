"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from '~/public/db/testimonialData.json'
import TestimonialCard from "~/components/Ui/Cards/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="testimonials-one padding">
      <div className="testimonials-one__pattern">
        <img src="/img/pattern/testimonials-v1-pattern.png" alt="" />
      </div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>
              <span className="icon-right-arrow-1"></span> Testimonials
            </h5>
          </div>
          <h2>What Clients Say</h2>
        </div>

        <Swiper
          className="thm-swiper__slider swiper-container"
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          pagination={{
            el: "#testimonials-one__pagination",
            type: "bullets",
            clickable: true,
          }}
          navigation={{
            nextEl: "#team-one__swiper-button-next",
            prevEl: "#team-one__swiper-button-prev",
          }}
          autoplay={{
            delay: 7500,
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
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
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
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div
          className="swiper-pagination"
          id="testimonials-one__pagination"
        ></div>
      </div>
    </section>
  );
};

export default Testimonial;
