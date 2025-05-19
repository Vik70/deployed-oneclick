"use client";
import data from '~/public/db/teamData.json'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import TeamCard from "~/components/Ui/Cards/TeamCard";

const Team = () => {

  return (
    <section className="team-one padding">
      <div
        className="team-one__bg"
        style={{ backgroundImage: "url(/img/bg/team-v1-bg.jpg)" }}
      ></div>
      <div className="container">
        <div className="team-one__top">
          <div className="sec-title">
            <div className="sub-title">
              <h5>
                <span className="icon-right-arrow-1"></span> Our Workers
              </h5>
            </div>
            <h2>Meet with expert team</h2>
          </div>

          <div className="btn-box">
            <Link className="thm-btn" href="team">
              <span className="txt">View All Member</span>
              <i className="icon-right-arrow"></i>
            </Link>
          </div>
        </div>

        <div className="team-one__bottom">
          <Swiper
            className="thm-swiper__slider swiper-container"
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            pagination={{
              el: "#team-one__pagination",
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
                spaceBetween: 24,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <div className="swiper-wrapper">
              {data?.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <TeamCard item={item} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="swiper-pagination" id="team-one__pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
