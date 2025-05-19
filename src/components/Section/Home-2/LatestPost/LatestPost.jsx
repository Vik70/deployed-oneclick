import Link from "next/link";
import LatestPostCard from "~/components/Ui/Cards/LatestPostCard";


import posts from '~/public/db/blogsDataTwo.json'

const LatestPost = () => {
    return (
        <section className="blog-two blog-two-padding">
            <div
                className="blog-two__pattern"
                style={{ backgroundImage: 'url(/img/pattern/blog-v2-pattern.jpg)' }}
            ></div>
            <div className="container">
                <div className="blog-two__top">
                    <div className="sec-title-two">
                        <div className="sub-title">
                            <h5>LATEST POST</h5>
                        </div>
                        <h2>Get the latest news & blog</h2>
                    </div>

                    <div className="btn-box">
                        <Link className="thm-btn" href="blog">
                            <span className="txt">View All Post</span>
                            <i className="icon-right-arrow"></i>
                        </Link>
                    </div>
                </div>

                <div className="row">

                    {
                        posts?.map((item, idx) => <LatestPostCard key={idx} item={item}></LatestPostCard>)
                    }

                </div>
            </div>
        </section>
    );
};

export default LatestPost;