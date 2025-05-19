import Link from "next/link";

const BlogCard = ({ item }) => {
  return (
    <div className="blog-one__single">
      <div className="blog-one__single-img">
        <div className="inner">
          <img src={item?.image} alt="#" />
          <div className="text-box">{item?.category}</div>
        </div>
      </div>
      <div className="blog-one__single-content">
        <h2>
          <Link href="blog-details">{item?.title}</Link>
        </h2>
        <ul className="meta-box">
          <li>
            <Link href="blog">By {item?.author}</Link>
          </li>
          <li>-</li>
          <li>{item?.date}</li>
        </ul>
      </div>
    </div>
  );
};

export default BlogCard;
