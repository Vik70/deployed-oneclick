/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TeamCardTwo from '~/components/Ui/Cards/TeamCardTwo';
import data from '~/public/db/teamDataFour.json';

const Teams = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };
  return (
    <section className="team-two padding">
      <div
        className="team-two__bg"
        style={{ backgroundImage: "url(/img/background/team-v2-bg.jpg)" }}
      ></div>
      <div className="container">
        <div className="sec-title-two">
          <div className="sub-title">
            <h5>Our Stuff</h5>
          </div>
          <h2>Meet With Expert Team</h2>
        </div>

        <Swiper
          className="swiper-container team-two__slider"
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: "#team-two__swiper-button-next",
            prevEl: "#team-two__swiper-button-prev",
          }}
          modules={[Autoplay, Pagination, Navigation]}
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
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          <div className="swiper-wrapper">
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <TeamCardTwo item={item} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="team-two__wrap">
          <div className="swiper-counter">
            <div id="current4">{currentSlide + 1}</div>
            <div id="total4">{data?.length}</div>
          </div>
        </div>
        <div className="swiper-nav-style1">
          <div className="swiper-button-prev" id="team-two__swiper-button-next"
            style={{ marginRight: '20px' }}
          >
            <i className="icon-left-arrow-5" aria-hidden="true"></i>
          </div>
          <div className="swiper-button-next" id="team-two__swiper-button-prev">
            <i className="icon-right-arrow-5" aria-hidden="true"></i>
          </div>
        </div>
        <div className="team-two__bottom">
          <div className="text-box">
            <p>We’re Experience. Become a team member!</p>
          </div>
          <div className="btn-box">
            <Link className="thm-btn" href="contact">
              <span className="txt">Join Our Team</span>
              <i className="icon-right-arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Teams;