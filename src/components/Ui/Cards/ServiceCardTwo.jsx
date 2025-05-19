import Link from "next/link";

const ServiceCardTwo = ({item}) => {
  return (
    <div className="choose-us-one__single">
      <div className="choose-us-one__single-overlay-bg"></div>
      <div className="content-box">
        <div className="title-box">
          <div className="icon-box">
            <span className={item?.icon}></span>
          </div>
          <h3>
            <Link href="about">{item?.title}</Link>
          </h3>
        </div>
        <div className="text-box">
          <p>
          {item?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardTwo;
