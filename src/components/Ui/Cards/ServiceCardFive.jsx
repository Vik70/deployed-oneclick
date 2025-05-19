import Link from "next/link";

const ServiceCardFive = ({ service }) => {
    return (
        <div className="services-three__single">
        <div className="services-three__single-img">
          <div className="inner">
            <img src={service.image} alt="" />
            <div className="icon-box">
              <span className={service.iconClass}></span>
            </div>
          </div>
        </div>
  
        <div className="services-three__single-content">
          <div className="services-three__single-content-inner">
            <h2>
              <Link href={service.link}>{service.title}</Link>
            </h2>
            <p>{service.description}</p>
            <div className="count-box">{service.count}</div>
            <div className="btn-box">
              <Link href={service.link}>
                Read More <i className="icon-right-arrow-5"></i>
              </Link>
              <div className="number-box">{service.number}</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCardFive;