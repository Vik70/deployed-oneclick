import Link from "next/link";

const ErrorSection = () => {
  return (
    <section className="error-page padding">
      <div
        className="error-page__bg"
        style={{
          backgroundImage: "url(/img/background/error-page-bg.jpg)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="error-page__wrapper text-center">
              <div className="error-page__content">
                <div className="shape1">
                  <img src="/img/shape/error-page-shape1.png" alt="" />
                </div>
                <h2>
                  4
                  <span>
                    <img src="/img/shape/error-page-shape2.png" alt="" />
                  </span>
                  4
                </h2>
                <h3>Opps! Page Not Found</h3>
                <p>
                  The point of using are Ipsum is that it has a more-or-less
                  normal distribution of
                  <br /> letterng It is a long established fact.
                </p>
                <div className="btn-box">
                  <Link className="thm-btn" href="/">
                    <span className="txt">Back to Homepage</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
