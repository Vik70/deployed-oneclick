import Link from "next/link";


const BlogCardThree = ({item}) => {
    return (
        <div className="blog-two__single">
        <div className="blog-two__single-img">
          <div className="overlay-img__outer">
            <div className="name">
              <p>{item.author}</p>
            </div>
            <div className="overlay-img">
              <img src={item.image1} alt="#" />
            </div>
          </div>
          <div className="inner">
            <img src={item.image2} alt="#" />
          </div>
        </div>
        <div className="blog-two__single-content">
          <h2>
            <Link href={item.link}>{item.title}</Link>
          </h2>
          <ul className="meta-box">
            <li>
              <Link href="#">{item.category}</Link>
            </li>
            <li>-</li>
            <li>{item.date}</li>
          </ul>
          <div className="btn-box">
            <Link href={item.link}>
              Read More <span className="icon-right-arrow-5"></span>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BlogCardThree;