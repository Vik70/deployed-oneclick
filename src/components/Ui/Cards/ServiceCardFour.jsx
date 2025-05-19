import Link from "next/link";

const ServiceCardFour = ({item}) => {
    return (
        <div className="services-three__single">
            <div className="services-three__single-img">
                <div className="inner">
                    <img
                        src={item?.image}
                        alt=""
                    />
                    <div className="icon-box">
                        <span className={item?.iconClass}></span>
                    </div>
                </div>
            </div>

            <div className="services-three__single-content">
                <div className="services-three__single-content-inner">
                    <h2><Link href={item?.link}>{item?.title}</Link></h2>
                    <p>
                        {item?.description}
                    </p>
                    <div className="count-box">{item?.count}</div>
                    <div className="btn-box">
              <Link href={item.link}>
                Read More <i className="icon-right-arrow-5"></i>
              </Link>
              <div className="number-box">{item.count}</div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardFour;