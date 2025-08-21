import Link from "next/link";
const ServiceCardSix = ({ item }) => {
    const briefDescription = (() => {
        const text = item?.description || "";
        const parts = text.split(/\.\s+/);
        if (parts.length <= 2) return text;
        return parts.slice(0, 2).join('. ') + '...';
    })();
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="services-three__single" style={{ height: '100%' }}>
                <div className="services-three__single-img" style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                    <div className="inner" style={{ height: '100%' }}>
                        <img src={item?.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                <div className="services-three__single-content" style={{ display: 'flex' }}>
                    <div className="services-three__single-content-inner" style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 190, width: '100%' }}>
                        <h2><Link href={item?.link}>{item?.title}</Link></h2>
                        <p style={{ marginBottom: 'auto' }}>{briefDescription}</p>
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