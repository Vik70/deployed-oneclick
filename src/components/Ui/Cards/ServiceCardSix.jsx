import Link from "next/link";
const ServiceCardSix = ({ item }) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="services-three__single">
                <div className="services-three__single-img" style={{ position: 'relative' }}>
                    <div className="inner">
                        <img src={item?.image} alt="" />
                        <div className="icon-box">
                            <span className={item?.icon}></span>
                        </div>
                        {(item?.title?.toLowerCase().includes('pharmaceutical') || item?.title?.toLowerCase().includes('e-commerce') || item?.title?.toLowerCase().includes('security screening') || item?.title?.toLowerCase().includes('etsf') || item?.title?.toLowerCase().includes('dangerous goods')) && (
                          <div style={{ position: 'absolute', top: 12, left: 12, background: '#FFD550', color: '#000', padding: '6px 10px', fontWeight: 700, fontSize: 12, borderRadius: 4 }}>
                            Coming soon
                          </div>
                        )}
                    </div>
                </div>
                <div className="services-three__single-content">
                    <div className="services-three__single-content-inner">
                        <h2><Link href={item?.link}>{item?.title}</Link></h2>
                        <p>{item?.description}</p>
                        <div className="count-box">{item?.count}</div>
                        <div className="btn-box">
                            <Link href={item?.link}>Read More <i className="icon-right-arrow-5"></i></Link>
                            <div className="number-box">{item?.count}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardSix;