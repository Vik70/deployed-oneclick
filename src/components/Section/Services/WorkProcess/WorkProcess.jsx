'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import 'wowjs/css/libs/animate.css';

const WorkProcess = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('wowjs').then(WOW => {
                const wow = new WOW.WOW();
                wow.init();
            });
        }
    }, []);

    return (
        <div>
            {/* Start Work process Tw */}
            <section className="work-process-two padding">
                <div className="work-process-two__bg"
                    style={{ backgroundImage: 'url(/img/background/work-process-v2-bg.jpg)' }}></div>
                <div className="container">
                    <div className="sec-title-style3 text-center">
                        <div className="sub-title center">
                            <div className="icon">
                                <img src="/img/icon/title-marker.png" alt="" />
                            </div>
                            <h5>work process</h5>
                        </div>
                        <h2>Easy 3 Working Step</h2>
                    </div>
                    <div className="row">
                        {/* Start Work process Two Singl */}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay={"0ms"} data-wow-duration={"1500ms"}>
                            <div className="work-process-two__single">
                                <div className="shape1"><img src="/img/shape/work-process-v2-shape1.png" alt="" /></div>
                                <div className="work-process-two__single-icon">
                                    <div className="inner">
                                        <span className="icon-enter-product-details"></span>
                                    </div>
                                </div>

                                <div className="work-process-two__single-text">
                                    <h3>Step - 1 </h3>
                                    <h2><Link href="#">Enter Product Details</Link></h2>
                                    <p>Once you place your order via mail or fax our field staff will collect the documents
                                        and consignments from.</p>
                                </div>
                            </div>
                        </div>
                        {/* End Work process Two Singl */}

                        {/* Start Work process Two Singl */}
                        <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay={"200ms"} data-wow-duration={"1500ms"}>
                            <div className="work-process-two__single">
                                <div className="shape1"><img src="/img/shape/work-process-v2-shape1.png" alt="" /></div>
                                <div className="work-process-two__single-icon">
                                    <div className="inner">
                                        <span className="icon-pay-your-service-tag"></span>
                                    </div>
                                </div>

                                <div className="work-process-two__single-text">
                                    <h3>Step - 2 </h3>
                                    <h2><Link href="#">Pay Your Service Tag</Link></h2>
                                    <p>Once you place your order via mail or fax our field staff will collect the documents
                                        and consignments from.</p>
                                </div>
                            </div>
                        </div>
                        {/* End Work process Two Singl */}

                        {/* Start Work process Two Singl */}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay={"400ms"} data-wow-duration={"1500ms"}>
                            <div className="work-process-two__single">
                                <div className="work-process-two__single-icon">
                                    <div className="inner">
                                        <span className="icon-road-transport t5"></span>
                                    </div>
                                </div>

                                <div className="work-process-two__single-text">
                                    <h3>Step - 3 </h3>
                                    <h2><Link href="#">Ready To Go Your Goods</Link></h2>
                                    <p>Once you place your order via mail or fax our field staff will collect the documents
                                        and consignments from.</p>
                                </div>
                            </div>
                        </div>
                        {/* End Work process Two Singl */}
                    </div>
                </div>
            </section>
            {/* End Work process Tw */}
        </div>
    );
};

export default WorkProcess;