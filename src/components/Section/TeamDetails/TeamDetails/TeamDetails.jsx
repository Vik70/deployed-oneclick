import Link from "next/link";

const TeamDetails = () => {
    const successRate = 80;
    const successRateTwo = 90;
    const successRateThree = 95;
    return (
        <section className="team-details padding" >
            <div className="container">
                <div className="team-details__top">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="team-details__top-img">
                                <img src="/img/team/team-details-img1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="team-details__top-content">
                                <div className="team-details__top-content-progress">
                                    <div className="team-details__top-content-progress-single">
                                        <div className="title">
                                            <h4>Success Rate 80%</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner count-bar-one" style={{ width: `${successRate}%` }}>
                                                <div className="count-text">{successRate}%</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team-details__top-content-progress-single">
                                        <div className="title">
                                            <h4>Complete Work - 90%</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner count-bar-two" style={{ width: `${successRateTwo}%` }}>
                                                <div className="count-text">{successRateTwo}%</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team-details__top-content-progress-single mb0">
                                        <div className="title">
                                            <h4>Satisfied Client - 95%</h4>
                                        </div>
                                        <div className="bar">
                                            <div className="bar-inner count-bar-three" style={{ width: `${successRateThree}%` }}>
                                                <div className="count-text">{successRateThree}%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="team-details__top-content-bottom " >
                                    <div className="team-details__top-content-contact-info">
                                        <ul>
                                            <li>
                                                <div className="text-box">
                                                    <p>Name</p>
                                                    <h3>Jennifer Rivera</h3>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="text-box">
                                                    <p>Position</p>
                                                    <h3>Senior Worker</h3>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="text-box">
                                                    <p>Experience</p>
                                                    <h3>20 Years</h3>
                                                </div>
                                            </li>
                                        </ul>

                                        <ul>
                                            <li>
                                                <div className="text-box">
                                                    <p>Email</p>
                                                    <h3><Link href="mailto:yourmail@email.com">jennifer12@gmail.com</Link>
                                                    </h3>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="text-box">
                                                    <p>Phone</p>
                                                    <h3><Link href="tel:123456789">+70 264 566 579</Link></h3>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="text-box">
                                                    <p>Address</p>
                                                    <h3>Jones Street, New York</h3>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="team-details__top-content-social-links">
                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                        <Link href="#"><span className="icon-twitter"></span></Link>
                                        <Link href="#"><span className="icon-instagram"></span></Link>
                                        <Link href="#"><span className="icon-linkedin"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="team-details__bottom margin-top">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="team-details__bottom-content">
                                <h2>Summary</h2>
                                <h4>Hello There, Established fact that a reader will be distracted more-or-less normal
                                    distribution of letters</h4>
                                <p>It is a long established fact that a reader will be distracted more-or-less normal
                                    distribution of letters, as opposed to using content here content here, making it
                                    look readable English packages and web page editors now use Lorem of Ipsum as their
                                    default model.</p>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="team-details__bottom-form">
                                <div className="title-box">
                                    <h2>Contact Us</h2>
                                </div>

                                <form id="contact-form" action="/inc/mail.php" method="POST">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="contact-page__input-box">
                                                <input type="text" placeholder="Full Name" name="name" required />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="contact-page__input-box">
                                                <input type="email" placeholder="Email" name="email" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="contact-page__input-box">
                                                <input type="number" placeholder="Mobile" name="number" />
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="contact-page__input-box">
                                                <input type="text" placeholder="Company" name="company" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div className="contact-page__input-box">
                                                <textarea name="message" placeholder="Messege"></textarea>
                                            </div>
                                            <div className="contact-page__btn">
                                                <button type="submit" className="thm-btn"
                                                    data-loading-text="Please wait...">
                                                    <span className="txt">Sand Massage</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <p className="ajax-response mb-0"></p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeamDetails;