"use client";
import Link from "next/link";
import { useState } from "react";
import CategoriesCard from "~/components/Ui/Cards/CategoriesCard";
import LatestPostCardTwo from "~/components/Ui/Cards/LatestPostCardTwo";
import SearchCard from "~/components/Ui/Cards/SearchCard";
import TagsCard from "~/components/Ui/Cards/TagsCard";

const BlogDetails = () => {
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
        <section className="blog-details padding"id="blog-cta">
            <div className="container">
                <div className="row">
                    {/* Start Blog Standard Page Content */}
                    <div className="col-xl-8">
                        <div className="blog-details__content">

                            {/* Start Blog Standard Page Single */}
                            <div className="blog-standard-page__single">
                                <div className="blog-standard-page__single-img">
                                    <img src="/img/blog/blog-details-img1.jpg" alt="" />
                                </div>
                                <div className="blog-standard-page__single-content">
                                    <ul className="meta-box">
                                        <li><Link href="blog"><i className="icon-user1"></i> By admin</Link></li>
                                        <li><Link href="blog"><i className="icon-date"></i> March 27, 2023</Link></li>
                                        <li><Link href="blog-details"><i className="icon-comments"></i> 03 Comments</Link></li>
                                        <li><Link href="blog"><i className="icon-tag"></i> Air Freight</Link></li>
                                    </ul>
                                    <h2><Link href="blog-details">Advanced Service Functions by <br /> Ocean Transport</Link></h2>

                                    <p>Packages and web page editors now use Lorem Ipsum as their default model
                                        textlayout. The point of using are Ipsum is that it has a more-or-less normal
                                        distribution of letterng It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at its layout. The
                                        point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                        letters, as opposed to using Content here, content here, making it look like
                                        readable English. packages and web page editors now use Lorem Ipsum as their
                                        default model.</p>


                                    <div className="blog-details__content-text1 text-center">
                                        <div className="big-icon">
                                            <span className="icon-quote11"></span>
                                        </div>
                                        <p>“Readable and Packages editors now use Lorem Ipsum as their default <br />
                                            model textlayout point of using the some is that it has a more”</p>
                                        <div className="author-box">
                                            <div className="icon-box">
                                                <span className="icon-user1"></span>
                                            </div>
                                            <div className="text-box">
                                                <p>Rebecca Tylor</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-details__content-text2">
                                        <div className="title-box">
                                            <h2>Safest Logistics Solutions Provider <br /> With Integrity</h2>
                                            <p>Readable and Packages editors now use Lorem Ipsum as their default model
                                                textlayout. The point of using the some is that it has a more-or-less
                                                normal distribution of letters as opposed to using.</p>
                                        </div>

                                        <div className="blog-details__content-text2-img">
                                            <div className="shape1"><img src="/img/shape/blog-details-shape1.png"
                                                alt="" /></div>
                                            <img src="/img/blog/blog-details-img2.jpg" alt="" />
                                            <div className="video-btn">
                                                <a
                                                    className="video-one__video-btn video-popup"
                                                    onClick={openPopup}
                                                    >
                                                    <span className="txt">Play</span>
                                                </a>
                                            </div>
                                        </div>
                                        <p className="text1">Packages and web page editors now use Lorem Ipsum as their
                                            default model textlayout. The point of using are Ipsum is that it has a
                                            more-or-less normal distribution of letterng.</p>
                                    </div>

                                    <div className="blog-details__tag-share">
                                        <div className="blog-details__tag-share-tag">
                                            <div className="title">
                                                <h3>Tags:</h3>
                                            </div>

                                            <ul>
                                                <li><Link href="#">Transport</Link></li>
                                                <li><Link href="#">Logistic</Link></li>
                                                <li><Link href="#">Air</Link></li>
                                            </ul>
                                        </div>

                                        <div className="blog-details__tag-share-share">
                                            <div className="title">
                                                <h3>Share:</h3>
                                            </div>
                                            <div className="social-links">
                                                <Link href="#"><span className="icon-facebook"></span></Link>
                                                <Link href="#"><span className="icon-twitter"></span></Link>
                                                <Link href="#"><span className="icon-instagram"></span></Link>
                                                <Link href="#"><span className="icon-linkedin"></span></Link>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="comment-one">
                                        <div className="title-box">
                                            <h2>Comments (02)</h2>
                                        </div>

                                        <div className="comment-one__single">
                                            <div className="comment-one__single-inner">
                                                <div className="comment-one__single-top">
                                                    <div className="author-box">
                                                        <div className="img-box">
                                                            <img src="/img/blog/blog-details-img3.jpg" alt="" />
                                                        </div>

                                                        <div className="title">
                                                            <h3>Jhon Smith</h3>
                                                        </div>
                                                    </div>

                                                    <div className="date-box">
                                                        <p><span className="icon-date"></span> 21April, 2023 - 08:30am</p>
                                                    </div>
                                                </div>

                                                <div className="comment-one__single-bottom">
                                                    <p>Packages and web page editors now use Lorem Ipsum as their
                                                        default model textlayout point of using are Ipsum is that it has
                                                        normal Packages.</p>
                                                    <div className="btn-box">
                                                        <Link href="#"><span className="icon-reply-arrow"></span> Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-one__single ml50">
                                            <div className="comment-one__single-inner">
                                                <div className="comment-one__single-top">
                                                    <div className="author-box">
                                                        <div className="img-box">
                                                            <img src="/img/blog/blog-details-img4.jpg" alt="" />
                                                        </div>

                                                        <div className="title">
                                                            <h3>Jhon Smith</h3>
                                                        </div>
                                                    </div>

                                                    <div className="date-box">
                                                        <p><span className="icon-date"></span> 21April, 2023 - 08:30am</p>
                                                    </div>
                                                </div>

                                                <div className="comment-one__single-bottom">
                                                    <p>The point of using Lorem Ipsum is that it has a more-or-less
                                                        normal distribution of letters opposed to using. <span
                                                            className="icon1"><img
                                                                src="/img/icon/blog-details-icon1.png"
                                                                alt="" /></span> <span className="icon2"><img
                                                                    src="/img/icon/blog-details-icon2.png"
                                                                    alt="" /></span></p>
                                                    <div className="btn-box">
                                                        <Link href="#"><span className="icon-reply-arrow"></span> Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="blog-details__form">
                                        <div className="title-box">
                                            <h2>Lave a Reply</h2>
                                        </div>
                                        <form id="contact-form" action="/inc/sendemail.php"
                                            className="contact-page__form contact-form-validated">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input type="text" placeholder="Name" name="name" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input type="email" placeholder="Email" name="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input type="text" placeholder="Phone" name="phone" />
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <input type="text" placeholder="Subject" name="subject" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <div className="contact-page__input-box">
                                                        <textarea name="message"
                                                            placeholder="Wright your massage"></textarea>
                                                    </div>
                                                    <div className="contact-page__btn">
                                                        <button type="submit" className="thm-btn">
                                                            <span className="txt">Sand Massage</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Standard Page Single */}
                        </div>
                    </div>
                    {/* End Blog Standard Page Content */}

                    {/* Start Sidebar */}
                    <div className="col-xl-4">
                        <div className="sidebar">
                            <SearchCard />
                            <LatestPostCardTwo/>
                            <CategoriesCard />
                            <TagsCard />
                        </div>
                    </div>
                </div>
                {/* End Sidebar */}
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

export default BlogDetails;