import ContentCard from "~/components/Ui/Cards/ContentCard";
import CircleText1 from "~/components/Ui/Components/CircleText";
const About = () => {
  return (
    <div className="about-one padding">
      <div className="about-one__big-title">OCH </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="about-one__img clearfix">
              <div className="shape1 float-bob-x">
                <img src="/img/shape/about-v1-shape1.png" alt="" />
              </div>
              <div className="inner clearfix">
              <img src="/img/about/about1.png" alt="" />

              </div>
              {/* <div className="btn-box">
                <CircleText1 />
              </div> */}
            </div>
          </div>

          <div className="col-xl-7">
            <div className="about-one__content">
              <div className="about-one__content-top">
                <div className="sec-title">
                  <div className="sub-title">
                    <h5>
                      <span className="icon-right-arrow-1"></span> About Company
                    </h5>
                  </div>
                  <h2>
                    Digital & Trusted Transport <br />
                    and Handling Company
                  </h2>
                </div>

                <div className="text">
                <p>
                  At One Click Handling, we combine advanced technology with decades of industry expertise to deliver seamless, reliable and secure transport solutions. Our commitment is to ensure your goods are handled with precision from origin to destination – on time, every time.
                </p>
                </div>
              </div>

              <div className="about-one__content-features">
                <ul>
                  <li
                    className="wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <ContentCard 
                      image="/img/icon/about/worldwide-delivery.png" 
                      title="Fast Delivery" 
                      description="Transportation solutions tailored to meet your timelines. With our efficient network and strategic partners, we guarantee swift, hassle-free transport." 
                    />
                  </li>

                  <li
                    className="wow fadeInRight"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <ContentCard image="/img/icon/about/secure-delivery.png" title="Safe And Secure Delivery" description="Security is at the core of everything we do. From careful handling to real-time tracking, we protect your cargo at every stage, ensuring peace of mind and complete transparency." />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;