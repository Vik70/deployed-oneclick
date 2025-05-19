"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BlogCardThree from "~/components/Ui/Cards/BlogCardThree";
import data from '~/public/db/blogDataThree.json'

const BlogSection = () => {


  return (
    <section className="blog-two blog-two--three padding">
      <div
        className="blog-two--three__bg"
        style={{ backgroundImage: "url(/img/background/blog-v3-bg.jpg)" }}
      ></div>
      <div className="container">
        <div className="sec-title-style3 text-center">
          <div className="sub-title center">
            <div className="icon">
              <img src="/img/icon/title-marker-2.png" alt="" />
            </div>
            <h5>LATEST POST</h5>
          </div>
          <h2>Get the latest news blog</h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            el: "#blog-two--three__pagination",
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
            {data.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
               <BlogCardThree item={item}/>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        {/* <!-- If we need navigation buttons --> */}
        <div
          className="swiper-pagination"
          id="blog-two--three__pagination"
        ></div>
      </div>
    </section>
  );
};

export default BlogSection;