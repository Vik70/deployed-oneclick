"use client";

import { useState } from "react";
import Link from "next/link";
import CategoriesCard from "~/components/Ui/Cards/CategoriesCard";
import SearchCard from "~/components/Ui/Cards/SearchCard";
import TagsCard from "~/components/Ui/Cards/TagsCard";
import LatestPostCardTwo from "~/components/Ui/Cards/LatestPostCardTwo";

const BlogStandard = () => {
    const [popup, setPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const openPopup = () => {
      setPopup(true);
      const iframe = document.getElementById("youtube-video");
      if (iframe) {
        iframe.src = "https://www.youtube.com/embed/6mkoGSqTqFI?si=2kJDQsAvj9HLTUCe";
      }
      setIsActive(true);
      document.body.classList.add('disable-scroll');
    };
    const closePopup = () => {
      setPopup(false);
      const iframe = document.getElementById("youtube-video");
      if (iframe) {
        iframe.src = "";
      }
      setIsActive(false);
      document.body.classList.remove('disable-scroll');
    };
    return (
        <section className="blog-standard-page padding" id="blog-cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="blog-standard-page__content">
                            <div className="blog-standard-page__single">
                                <div className="blog-standard-page__single-img">
                                    <img src="/img/blog/blog-standard-img1.jpg" alt="" />
                                    <div className="logo-box">
                                        <img src="/img/blog/blog-standard-page-logo1.png" alt="" />
                                    </div>
                                </div>

                                <div className="blog-standard-page__single-content">
                                    <ul className="meta-box">
                                        <li><Link href="blog"><i className="icon-user1"></i> By admin</Link></li>
                                        <li><Link href="blog"><i className="icon-date"></i> November 13, 2023</Link></li>
                                        <li><Link href="blog-details"><i className="icon-comments"></i> 02 Comments</Link></li>
                                        <li><Link href="blog"><i className="icon-tag"></i> Rail Transport</Link></li>
                                    </ul>
                                    <h2><Link href="blog-details">Rail Transport Service Functions by <br /> Translo
                                        Logister</Link></h2>
                                    <p>Packages and web page editors now use Lorem Ipsum as their default model
                                        textlayout. The point of using are Ipsum is that it has a more-or-less normal
                                        distribution of letterng...</p>
                                    <div className="btn-box">
                                        <Link  className="thm-btn" href="blog-details">
                                            <span className="txt">Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={`blog-standard-page__single ${popup ? 'zindex-50' : 'zindex-1'}`}>
                                            <style jsx>{`
                                            .zindex-50 {
                                                z-index: 999;
                                            }
                                            .zindex-1 {
                                                z-index: 3;
                                            }
                                            `}</style>
                                <div className="blog-standard-page__single-img">
                                    <img src="/img/blog/blog-standard-img2.jpg" alt="" />
                                    <div className="logo-box">
                                        <img src="/img/blog/blog-standard-page-logo2.png" alt="" />
                                    </div>
                                    <div className="video-btn">
                                        <a
                                            className="video-one__video-btn video-popup"
                                            onClick={openPopup}
                                        >
                                            <span className="txt">Play</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="blog-standard-page__single-content">
                                    <ul className="meta-box">
                                        <li><Link href="blog"><i className="icon-user1"></i> By admin</Link></li>
                                        <li><Link href="blog"><i className="icon-date"></i> March 27, 2023</Link></li>
                                        <li><Link href="blog-details"><i className="icon-comments"></i> 03 Comments</Link></li>
                                        <li><Link href="blog"><i className="icon-tag"></i> Air Freight</Link></li>
                                    </ul>
                                    <h2><Link href="blog-details">Advanced Service Functions by <br /> Rail Transport
                                        Service</Link></h2>
                                    <p>Packages and web page editors now use Lorem Ipsum as their default model
                                        textlayout. The point of using are Ipsum is that it has a more-or-less normal
                                        distribution of letterng...</p>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="blog-details">
                                            <span className="txt">Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-standard-page__single">
                                <div className="blog-standard-page__single-content">
                                    <div className="logo-box">
                                        <img src="/img/blog/blog-standard-page-logo3.png" alt="" />
                                    </div>
                                    <ul className="meta-box style2">
                                        <li><Link href="blog"><i className="icon-user1"></i> By admin</Link></li>
                                        <li><Link href="blog"><i className="icon-date"></i> April 30, 2023</Link></li>
                                        <li><Link href="blog-details"><i className="icon-comments"></i> 06 Comments</Link></li>
                                        <li><Link href="blog"><i className="icon-tag"></i> Logistic</Link></li>
                                    </ul>
                                    <h2><Link href="blog-details">Advanced Service Functions by <br /> Road Fraight</Link>
                                    </h2>
                                    <p>Packages and web page editors now use Lorem Ipsum as their default model
                                        textlayout. The point of using are Ipsum is that it has a more-or-less normal
                                        distribution of letterng...</p>
                                    <div className="btn-box">
                                        <Link  className="thm-btn" href="blog-details">
                                            <span className="txt">Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-standard-page__single">
                                <div className="blog-standard-page__single-img">
                                    <img src="/img/blog/blog-standard-img3.jpg" alt="" />
                                    <div className="logo-box">
                                        <img src="/img/blog/blog-standard-page-logo2.png" alt="" />
                                    </div>
                                </div>

                                <div className="blog-standard-page__single-content">
                                    <ul className="meta-box">
                                        <li><Link href="blog"><i className="icon-user1"></i> By admin</Link></li>
                                        <li><Link href="blog"><i className="icon-date"></i> February 28, 2023</Link></li>
                                        <li><Link href="blog-details"><i className="icon-comments"></i> 04 Comments</Link></li>
                                        <li><Link href="blog"><i className="icon-tag"></i> Ocean </Link></li>
                                    </ul>
                                    <h2><Link href="blog-details">Ocean Freight Service Functions <br /> by Translo</Link>
                                    </h2>
                                    <p>Packages and web page editors now use Lorem Ipsum as their default model
                                        textlayout. The point of using are Ipsum is that it has a more-or-less normal
                                        distribution of letterng...</p>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="blog-details">
                                            <span className="txt">Read More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <ul className="styled-pagination text-center clearfix">
                                <li><Link href="#">1</Link></li>
                                <li><Link href="#">2</Link></li>
                                <li><Link href="#">3</Link></li>
                                <li className="arrow next active"><Link href="#"><span className="icon-right-arrow1"></span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="sidebar">
                            <SearchCard />
                            <LatestPostCardTwo/>
                            <CategoriesCard />
                            <TagsCard />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`popup-video ${popup ? "popup" : "popdown"}`}
                onClick={closePopup}
            >
                <div className={`video-wrapper ${isActive ? 'active' : ''}`}>
                    <iframe
                        id="youtube-video"
                        className="video"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/6mkoGSqTqFI?si=2kJDQsAvj9HLTUCe"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <button className="mfp-close" onClick={closePopup}>×
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogStandard;