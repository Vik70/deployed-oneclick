import Link from "next/link";

const TagsCard = () => {
    return (
        <div className="sidebar__single sidebar__tag wow fadeInUp" data-wow-delay=".4s">
            <div className="title-box">
                <h2>Tags</h2>
            </div>
            <ul className="sidebar__tag-list">
                <li><Link href="blog">Logistic</Link></li>
                <li><Link href="blog">Transport</Link></li>
                <li><Link href="blog">Cargo</Link></li>
                <li><Link href="blog">Air Freight</Link></li>
                <li><Link href="blog">Services</Link></li>
                <li><Link href="blog">Business</Link></li>
                <li><Link href="blog">Ocean</Link></li>
                <li><Link href="blog">Rail</Link></li>
            </ul>
        </div>
    );
};

export default TagsCard;