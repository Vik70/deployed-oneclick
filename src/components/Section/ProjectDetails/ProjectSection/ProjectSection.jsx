/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import ProjectCardTwo from "~/components/Ui/Cards/ProjectCardTwo";

const ProjectSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./db/projectDataTwo.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <section className="project-two project-two--project-details padding" id="blog-cta">
        <div className="container">
            <div className="sec-title-style3 text-center">
                <div className="sub-title center">
                    <div className="icon">
                        <img src="/img/icon/title-marker-4.png" alt=""/>
                    </div>
                    <h5>Recent Project</h5>
                </div>
                <h2>Related Projects</h2>
            </div>

            <Swiper   
                spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            el: "#project-details__pagination",
            type: "bullets",
            clickable: true
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
                    {projects.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
               <ProjectCardTwo item={item}/>
              </SwiperSlide>
            ))}
                     
                    </div>
                </Swiper>
            {/* <!-- If we need navigation buttons --> */}
            <div className="swiper-pagination" id="project-details__pagination"></div>
        </div>
    </section>
    );
};

export default ProjectSection;