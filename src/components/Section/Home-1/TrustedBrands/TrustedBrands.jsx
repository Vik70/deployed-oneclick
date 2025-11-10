"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef, useState } from "react";

const TrustedBrands = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Brand logos data
  const brands = [
    {
      name: "LIV Golf",
      logo: "/img/brands/liv-golf-logo.jpg",
    },
    {
      name: "CoreWeave",
      logo: "/img/brands/67782a9cb02bc934fae303cb_coreweave_share_v2.png",
    },
    {
      name: "DB Schenker",
      logo: "/img/brands/DB_Schenker_logo.svg.png",
    },
    {
      name: "DSV",
      logo: "/img/brands/kisspng-brand-logo-organization-product-design-logo-dsv-sport-sorgusuna-uygun-resimleri-bedava-in-5b748fba85f769.2624472915343656265487.png",
    },
    {
      name: "Supermicro",
      logo: "/img/brands/Supermicro.jpg",
    },
    {
      name: "NVIDIA",
      logo: "/img/brands/Logo-nvidia-transparent-PNG.png",
    },
    {
      name: "Sotheby's",
      logo: "/img/brands/Sothebys.png",
    },
    {
      name: "Merlin Edged",
      logo: "/img/brands/Merlin_Edged.png",
    },
  ];

  // Duplicate brands multiple times for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  // Fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Pause autoplay on hover
  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const sliderWrapper = document.querySelector(".trusted-brands__slider-wrapper");
    if (!sliderWrapper) return;

    const handleMouseEnter = () => {
      swiper.autoplay.stop();
    };

    const handleMouseLeave = () => {
      swiper.autoplay.start();
    };

    sliderWrapper.addEventListener("mouseenter", handleMouseEnter);
    sliderWrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      sliderWrapper.removeEventListener("mouseenter", handleMouseEnter);
      sliderWrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="trusted-brands padding"
      style={{
        backgroundColor: "#f9f9f9",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      <div className="container">
        <div className="sec-title text-center" style={{ marginBottom: "50px" }}>
          <div className="sub-title">
            <h5>
              <span className="icon-right-arrow-1"></span> Trusted Partners
            </h5>
          </div>
          <h2>Trusted by Industry Leaders</h2>
          <p style={{ marginTop: "15px", fontSize: "16px", color: "#666", maxWidth: "700px", margin: "15px auto 0" }}>
            Our partners include leading innovators across technology, logistics, and performance sectors worldwide.
          </p>
        </div>

        <div className="trusted-brands__slider-wrapper" style={{ position: "relative", overflow: "hidden", width: "100%" }}>
          <Swiper
            ref={swiperRef}
            className="trusted-brands__slider"
            spaceBetween={30}
            slidesPerView={7}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={3000}
            allowTouchMove={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 7,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
          >
            {duplicatedBrands.map((brand, index) => (
              <SwiperSlide key={`${brand.name}-${index}`}>
                <div
                  className="trusted-brands__item"
                  style={{
                    padding: "1.5rem",
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "120px",
                    transition: "all 0.4s ease",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      img.style.filter = "grayscale(0%)";
                      img.style.transition = "filter 0.4s ease";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) {
                      img.style.filter = "grayscale(100%)";
                      img.style.transition = "filter 0.4s ease";
                    }
                  }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                      maxWidth: "100%",
                      height: "70px",
                      width: "auto",
                      objectFit: "contain",
                      filter: "grayscale(100%)",
                      transition: "filter 0.4s ease",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;

