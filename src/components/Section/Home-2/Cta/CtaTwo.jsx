import Link from "next/link";

const CtaTwo = () => {
    return (
        <section className="cta-two">
            <div className="container">
                <div className="cta-two__inner" style={{ backgroundColor: "#ff5e15" }}>
                    <div className="shape1">
                        <img src="/img/shape/cta-v2-shape1.png" alt="" />
                    </div>
                    <div className="shape2">
                        <img src="/img/shape/cta-v2-shape2.png" alt="" />
                    </div>
                    <div className="shape3 float-bob-x">
                        <img src="/img/shape/cta-v2-shape3.png" alt="" />
                    </div>
                    <div className="cta-two__inner-box">
                        <div className="title-box">
                            <p>GEt in touch</p>
                            <h2>
                                Looking for the best logistics <br />
                                transport services
                            </h2>
                        </div>

                        <div className="btn-box">
                            <Link className="thm-btn" href="contact">
                                <span className="txt">Request a Quote</span>
                                <i className="icon-right-arrow"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaTwo;