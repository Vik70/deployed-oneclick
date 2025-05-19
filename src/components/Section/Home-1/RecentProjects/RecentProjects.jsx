"use client";
import data from '~/public/db/projectsData.json'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import ProjectCard from "~/components/Ui/Cards/ProjectCard";

const RecentProjects = () => {

  return (
    <section className="project-one padding">
      <div
        className="project-one__bg"
        style={{ backgroundImage: "url(/img/bg/project-v1-bg.jpg)" }}
      ></div>
      <div className="shape1">
        <img src="/img/shape/project-v1-shape1.png" alt="" />
      </div>
      <div className="shape2">
        <img src="/img/shape/project-v1-shape2.png" alt="" />
      </div>
      <div className="container">
        <div className="project-one__top">
          <div className="sec-title">
            <div className="sub-title">
              <h5>
                <span className="icon-right-arrow-1"></span> Recent Project
              </h5>
            </div>
            <h2>
              Transporting Across <br />
              The World
            </h2>
          </div>

          <div className="btn-box">
            <Link className="thm-btn" href="projects">
              <span className="txt">View All Project</span>
              <i className="icon-right-arrow"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="auto-container">
        <div className="project-one__bottom">
          <Swiper
            className="thm-swiper__slider swiper-container"
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            pagination={{
              el: "#project-one__pagination",
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
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <div className="swiper-wrapper">
              {data?.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <ProjectCard item={item} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="swiper-pagination" id="project-one__pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
