/* eslint-disable @next/next/no-assign-module-variable */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";

const Fact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [AnimatedNumbers, setAnimatedNumbers] = useState(null);
  useEffect(() => {
      const handleScroll = () => {
          const section = document.getElementById("fact-one");
          if (section) {
              const rect = section.getBoundingClientRect();
              const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
              setIsVisible(isVisible);
          }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  useEffect(() => {
      // Dynamically import AnimatedNumbers component only on the client side
      const fetchComponent = async () => {
          const module = await import("react-animated-numbers");
          setAnimatedNumbers(() => module.default);
      };

      fetchComponent();

  }, []);
  return (
    <section className="fact-counter-one padding-bottom" id="fact-one">
      <div className="container">
        <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="fact-counter-one__single">
                <div className="inner">
                  <h2 className="count d-flex">
                    <span className="odometer" >
                      {isVisible && <AnimatedNumbers
                        animateToNumber={35} transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.9,
                        })} ></AnimatedNumbers>}
                    </span>
                    <span className="plus">
                      +
                    </span>
                  </h2>
                  <div className="text">
                    <p>Years Of Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="fact-counter-one__single">
                <div className="inner">
                  <h2 className="count">
                    <span className="odometer">
                      {isVisible && <AnimatedNumbers
                        animateToNumber={3560} transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.9,
                        })} ></AnimatedNumbers>}
                    </span>
                  </h2>
                  <div className="text">
                    <p>Delivered Packages</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="fact-counter-one__single">
                <div className="inner">
                  <h2 className="count">
                    <span className="odometer">
                      {isVisible && <AnimatedNumbers
                        animateToNumber={2364} transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.9,
                        })} ></AnimatedNumbers>}
                    </span>
                  </h2>
                  <div className="text">
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="fact-counter-one__single">
                <div className="inner">
                  <h2 className="count d-flex">
                    <span className="odometer">
                      {isVisible && <AnimatedNumbers
                        animateToNumber={356} transitions={(index) => ({
                          type: "spring",
                          duration: index + 0.9,
                        })} ></AnimatedNumbers>}
                    </span>
                    <span className="plus">+</span>
                  </h2>
                  <div className="text">
                    <p>Owned Vehicles</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Fact;
