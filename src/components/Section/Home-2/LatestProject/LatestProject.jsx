/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";

export default function LatestProject() {
  return (
    <section className="project-two padding">
      <div className="container">
        <div className="project-two__top">
          <div className="sec-title-two">
            <div className="sub-title">
              <h5>Latest Project</h5>
            </div>
            <h2>Transporting Across The World</h2>
          </div>

          <div className="btn-box">
            <Link className="thm-btn" href="projects">
              <span className="txt">View All Project</span>
              <i className="icon-right-arrow"></i>
            </Link>
          </div>
        </div>

        <div className="row">
          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-6 col-lg-6 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms">
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img src="/img/project/project-v2-img1.jpg" alt="" />
                  <div className="btn-box">
                    <Link href="project-details"
                    ><span className="icon-right-arrow-5"></span></Link>
                  </div>
                  <div className="overlay-content">
                    <p>Ocean Freight</p>
                    <h2>
                      <Link href="project-details">Transport for Product</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}
          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-3 col-lg-3 wow fadeInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms">
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img src="/img/project/project-v2-img2.jpg" alt="" />
                  <div className="btn-box">
                    <Link href="project-details"
                    ><span className="icon-right-arrow-5"></span></Link>
                  </div>
                  <div className="overlay-content">
                    <p>Ocean Freight</p>
                    <h2>
                      <Link href="project-details">Transport for Product</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}

          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-3 col-lg-3 wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms">
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img src="/img/project/project-v2-img3.jpg" alt="" />
                  <div className="btn-box">
                    <Link href="project-details"
                    ><span className="icon-right-arrow-5"></span></Link>
                  </div>
                  <div className="overlay-content">
                    <p>Ocean Freight</p>
                    <h2>
                      <Link href="project-details">Transport for Product</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}

          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-3 col-lg-3 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms">
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img src="/img/project/project-v2-img4.jpg" alt="" />
                  <div className="btn-box">
                    <Link href="project-details"
                    ><span className="icon-right-arrow-5"></span></Link>
                  </div>
                  <div className="overlay-content">
                    <p>Ocean Freight</p>
                    <h2>
                      <Link href="project-details">Transport for Product</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}

          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-3 col-lg-3 wow fadeInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms">
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img src="/img/project/project-v2-img5.jpg" alt="" />
                  <div className="btn-box">
                    <Link href="project-details"
                    ><span className="icon-right-arrow-5"></span></Link>
                  </div>
                  <div className="overlay-content">
                    <p>Ocean Freight</p>
                    <h2>
                      <Link href="project-details">Transport for Product</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}

          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-6 col-lg-6 wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms">
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img src="/img/project/project-v2-img6.jpg" alt="" />
                  <div className="btn-box">
                    <Link href="project-details"
                    ><span className="icon-right-arrow-5"></span></Link>
                  </div>
                  <div className="overlay-content">
                    <p>Ocean Freight</p>
                    <h2>
                      <Link href="project-details">Transport for Product</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}
        </div>
      </div>
    </section>
  )
}
