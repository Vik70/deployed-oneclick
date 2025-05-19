import Link from "next/link";

const TeamCardTwo = ({ item }) => {
    return (
        <div className="team-two__single">
            <div
                className="team-two__single-bg"
                style={{ backgroundImage: `url(${item?.bgImage})` }}
            ></div>
            <div className="team-two__single-img">
                <div className="inner">
                    <img src={item?.image} alt="" />
                    <div className="social-links">
                        <Link href={item?.socialLinks?.facebook} className="fb"
                        ><span className="icon-facebook"></span></Link>
                        <Link href={item?.socialLinks?.twitter} className="tw"
                        ><span className="icon-twitter"></span></Link>
                        <Link href={item?.socialLinks?.instagram} className="ins"
                        ><span className="icon-instagram"></span></Link>
                        <Link href={item?.socialLinks?.linkedin} className="lin"
                        ><span className="icon-linkedin"></span ></Link>
                    </div>
                </div>
            </div>
            <div className="team-two__single-content text-center">
                <h3><Link href="team-details">{item?.name}</Link></h3>
                <p>{item?.position}</p>
            </div>
            <div className="team-two__single-number">
                <ul className="team-two__single-number-box clearfix">
                    <li className="icon-box">
                        <Link href="#"><span className="icon-out-call"></span></Link>
                        <ul className="team-two__single-number-text">
                            <li>
                                <p><Link href="tel:123456789">+70 264 566 579</Link></p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TeamCardTwo;