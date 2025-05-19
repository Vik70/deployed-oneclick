"use client"
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function PostCardTwo({ title, category, date, thumbnail, full, }) {
    return (
        <div className='col-xl-4 col-lg-4 wow fadeInLeft data-wow-delay="0ms"
        data-wow-duration="1500ms"'>
            
                <div className="blog-two__single">
                    <div className="blog-two__single-content">
                        <h2>
                            <Link href="#">
                                {title}
                            </Link>
                        </h2>
                        <ul className="meta-box">
                            <li><Link href="#">{category}</Link></li>
                            <li>-</li>
                            <li>{date}</li>
                        </ul>

                        <div className="btn-box">
                            <Link href="#"
                            >Read More <span className="icon-right-arrow-5"></span></Link>
                        </div>
                    </div>
                    <div className="blog-two__single-img">
                        <div className="overlay-img">
                            <img src={thumbnail} alt="#" />
                        </div>
                        <div className="inner">
                            <img src={full} alt="#" />
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div >

    )
}
