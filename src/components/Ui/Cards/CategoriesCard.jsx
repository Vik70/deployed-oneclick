import Link from "next/link";

const CategoriesCard = () => {
    return (
        <div className="sidebar__single sidebar__services wow fadeInUp" data-wow-delay=".3s">
            <div className="title-box">
                <h2>Categories</h2>
            </div>
            <ul className="sidebar__services-list">
                <li><Link href="road-transport">Road Transport <span className="icon-right-arrow-5"></span></Link></li>
                <li><Link href="air-transport">Air Transport <span className="icon-right-arrow-5"></span></Link></li>
                <li><Link href="cargo-transport">Cargo Transport <span className="icon-right-arrow-5"></span></Link></li>
                <li><Link href="ocean-freight">Ocean Freight <span className="icon-right-arrow-5"></span></Link></li>
                <li><Link href="rail-transport">Rail Transport <span className="icon-right-arrow-5"></span></Link></li>
                <li><Link href="warehousing">Warehousing <span className="icon-right-arrow-5"></span></Link></li>
            </ul>
        </div>
    );
};

export default CategoriesCard;