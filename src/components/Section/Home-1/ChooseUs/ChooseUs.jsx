"use client";
import ServiceCardTwo from "~/components/Ui/Cards/ServiceCardTwo";
import data from '~/public/db/serviceDataTwo.json'

const ChooseUs = () => {

  return (
    <section className="choose-us-one padding">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>
              <span className="icon-right-arrow-1"></span> Why Choose Us
            </h5>
          </div>
          <h2>Some reasons to choose us</h2>
        </div>
        <div className="row">
          {data?.map((item, index) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".1s"
              key={index}
            >
              <ServiceCardTwo item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
