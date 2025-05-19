'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCardFour from "~/components/Ui/Cards/BlogCardFour";
import data from '~/public/db/blogDataFour.json'
const Blog = () => {

    return (
        <div>
            <section className="blog-two blog-two--three blog-two--three--blog padding" id="blog-cta">
                <div className="container">
                    <div className="row">
                        {data?.map((item, index) => (
                            <BlogCardFour item={item} key={index}></BlogCardFour>
                        ))}
                    </div>
                    <ul className="styled-pagination text-center clearfix">
                        <li><Link href="#">1</Link></li>
                        <li><Link href="#">2</Link></li>
                        <li><Link href="#">3</Link></li>
                        <li className="arrow next active"><Link href="#"><span className="icon-right-arrow1"></span></Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Blog;