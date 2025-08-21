import Link from "next/link";

const ServiceCard = ({ item }) => {
  const briefDescription = (() => {
    const text = item?.description || "";
    const parts = text.split(/\.\s+/);
    if (parts.length <= 2) return text;
    return parts.slice(0, 2).join('. ') + '...';
  })();

  return (
    <div className="service-one__single" style={{ height: '100%' }}>
      <div className="service-one__single-img" style={{ height: 260, overflow: 'hidden' }}>
        <div className="inner" style={{ height: '100%' }}>
          <img src={item?.image} alt="#" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div className="overlay-icon">
            <img src={item?.icon} alt="#" />
          </div>
        </div>
      </div>
      <div className="service-one__single-content" style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 190 }}>
          <h3>
            <Link href={item?.link}>{item?.title}</Link>
          </h3>
          <p style={{ marginBottom: 'auto' }}>{briefDescription}</p>
          <div className="btn-box">
            <Link href={item.link}>
              Read More <span className="icon-right-arrow"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
