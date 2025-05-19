'use client'
import { useEffect } from 'react';
import 'wowjs/css/libs/animate.css';

import Link from "next/link";

const LatestPostCard = ({ item }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('wowjs').then(WOW => {
                const wow = new WOW.WOW();
                wow.init();
            });
        }
    }, []);


    return (
        <div
            className="col-xl-4 col-lg-4 wow fadeInLeft"
            data-wow-delay={"0ms"}
            data-wow-duration={"1500ms"}
        >
            <div className="blog-two__single">
                <div className="blog-two__single-content">
                    <h2>
                        <Link href="blog-details"
                        >{item?.title}</Link>
                    </h2>
                    <ul className="meta-box">
                        <li><Link href="blog">{item?.meta?.category}</Link></li>
                        <li>-</li>
                        <li>{item?.meta?.date}</li>
                    </ul>

                    <div className="btn-box">
                        <Link href="blog-details"
                        >Read More <span className="icon-right-arrow-5"></span></Link>
                    </div>
                </div>

                <div className="blog-two__single-img">
                    <div className="overlay-img">
                        <img src={item?.image} alt="#" />
                    </div>
                    <div className="inner">
                        <img src={item?.thumbnail} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestPostCard;