'use client'
import { useEffect } from 'react';
import 'wowjs/css/libs/animate.css';

import Link from "next/link";

const LatestPostCardTwo= () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('wowjs').then(WOW => {
                const wow = new WOW.WOW();
                wow.init();
            });
        }
    }, []);


    return (
        <div className="sidebar__single sidebar__latest-post wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div className="title-box">
            <h2>Latest Post</h2>
        </div>
        <ul className="sidebar__latest-post-list">
            <li>
                <div className="img-box">
                    <img src="/img/blog/sidebar-img1.jpg" alt=""/>
                </div>

                <div className="text-box">
                    <p>Air Freight - Jun 13, 2023</p>
                    <h3><Link href="blog-details">Advanced Service by <br/> Rail Transport</Link></h3>
                </div>
            </li>

            <li>
                <div className="img-box">
                    <img src="/img/blog/sidebar-img2.jpg" alt=""/>
                </div>

                <div className="text-box">
                    <p>Air Freight - Jun 13, 2023</p>
                    <h3><Link href="blog-details">A New Normal That <br/> Has Evolved</Link></h3>
                </div>
            </li>

            <li>
                <div className="img-box">
                    <img src="/img/blog/sidebar-img3.jpg" alt=""/>
                </div>

                <div className="text-box">
                    <p>Air Freight - Jun 13, 2023</p>
                    <h3><Link href="blog-details">How technology can <br/> help redraw supply</Link></h3>
                </div>
            </li>

            <li>
                <div className="img-box">
                    <img src="/img/blog/sidebar-img4.jpg" alt=""/>
                </div>

                <div className="text-box">
                    <p>Air Freight - Jun 13, 2023</p>
                    <h3><Link href="blog-details">Advanced Service by <br/> Rail Transport</Link></h3>
                </div>
            </li>
        </ul>
    </div>
    );
};

export default LatestPostCardTwo;