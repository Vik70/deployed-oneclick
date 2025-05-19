import Link from "next/link";

const BlogCardFour = ({ item }) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="blog-two__single">
                <div className="blog-two__single-img">
                    <div className="overlay-img__outer">
                        <div className="name">
                            <p>{item?.name}</p>
                        </div>
                        <div className="overlay-img">
                            <img src={item?.img1} alt="#" />
                        </div>
                    </div>
                    <div className="inner">
                        <img src={item?.img2} alt="#" />
                    </div>
                </div>

                <div className="blog-two__single-content">
                    <h2><Link href={item?.link}>{item?.title}</Link></h2>
                    <ul className="meta-box">
                        <li><Link href="#">{item?.category}</Link></li>
                        <li>-</li>
                        <li>{item?.date}</li>
                    </ul>

                    <div className="btn-box">
                        <Link href={item?.link}>Read More <span className="icon-right-arrow-5"></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardFour;