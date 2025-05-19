"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogCard from "~/components/Ui/Cards/BlogCard";
import Link from "next/link";
import data from '~/public/db/blogsData.json'

const Blog = () => {

  return (
    <section className="blog-one padding">
      <div
        className="blog-one__pattern"
        style={{ backgroundImage: "url(/img/pattern/blog-v1-pattern.jpg)" }}
      ></div>
      <div className="container">
        <div className="blog-one__top">
          <div className="sec-title">
            <div className="sub-title">
              <h5>
                <span className="icon-right-arrow-1"></span> LATEST POST
              </h5>
            </div>
            <h2>latest news & blog</h2>
          </div>
          <div className="btn-box">
            <Link className="thm-btn" href="blog">
              <span className="txt">View All Post</span>
              <i className="icon-right-arrow"></i>
            </Link>
          </div>
        </div>

        <div className="blog-one__bottom">
          <Swiper
            className="thm-swiper__slider swiper-container"
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            pagination={{
              el: "#blog-one__pagination",
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
                slidesPerView: 1,
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
                  <BlogCard item={item} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="swiper-pagination" id="blog-one__pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
