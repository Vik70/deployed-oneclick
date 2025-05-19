import Link from "next/link";
import CircleTextThree from "~/components/Ui/Components/CircleTextThree";

const AboutSection = () => {
    return (
        <section className="about-three padding">
            <div className="container">
                <div className="row">
                    {/* <!--Start About Three Img--> */}
                    <div className="col-xl-6">
                        <div className="about-three__img">
                            <div className="shape1">
                                <img src="/img/shape/about-v3-shape1.png" alt="" />
                            </div>
                            <div
                                className="about-three__img1 wow fadeInLeft"
                                data-wow-delay=".1s"
                            >
                                <img src="/img/about/about3.png" alt="About One Click Handling" />
                            </div>
                            <div
                                className="about-three__img2 wow fadeInRight"
                                data-wow-delay=".1s"
                            >
                                <img src="/img/about/about2.png" alt="Our Logistics Team" />
                            </div>
                            <CircleTextThree />
                        </div>
                    </div>
                    {/* <!--End About Three Img--> */}

                    {/* <!--Start About Three Content--> */}
                    <div className="col-xl-6">
                        <div className="about-three__content">
                            <div className="sec-title-style3">
                                <div className="sub-title">
                                    <div className="icon">
                                        
                                    </div>
                                    <h5>About Company</h5>
                                </div>
                                <h2>
                                    One Click Handling, <br />
                                    The Best Transport and Handling partner

                                </h2>
                            </div>
                            <div className="about-three__content-text">
                              
                            <p>
  Our mission is to support your logistic needs by offering a one-stop solution for businesses of all sizes. Whether you need overnight courier services, specialised pharmaceutical transport, temperature controlled storage or express deliveries, our dedicated team of experts will customise a solution that works for you. At One Click Handling, we measure our success by your satisfaction and we strive to exceed your expectations at every milestone of your supply chain.
</p>

                            </div>

                            <ul className="about-three__content-list">
                                

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-enter-product-details"></span>
                                    </div>
                                    <div className="text-box">
                                        <h3>Safe And Secure Delivery</h3>
                                        <p>
                                        We follow strict safety protocols at every step of the handling process. From secure surveillance at our storage sites to thorough checks on all transport partners, your cargo is protected with care, attention, and accountability from start to finish.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div className="about-three__content-bottom">


                                <div className="author-box">
                                    <div className="img-box">
                                        <img
                                            src="/img/about/Support.png"
                                            alt="Contact One Click Handling"
                                        />
                                    </div>
                                    <div className="text-box">
                                        <p>Need Help?</p>
                                        <h3>
                                            <Link href="tel:0333 404 0298">0333 404 0298</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End About Three Content--> */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
