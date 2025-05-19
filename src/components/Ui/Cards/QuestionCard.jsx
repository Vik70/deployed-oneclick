import Link from "next/link";

const QuestionCard = () => {
  return (
    <div
      className="sidebar__single sidebar__contact wow fadeInUp"
      data-wow-delay=".4s"
    >
      <div
        className="sidebar__contact-bg"
        style={{
          backgroundImage: "url(/img/service/services-details-img3.jpg)",
        }}
      ></div>
      <div className="sidebar__contact-box">
        <div className="title">
          <h2>Any Question?</h2>
        </div>

        <div className="sidebar__contact-box-bottom">
          <div className="icon-box">
            <span className="icon-out-call"></span>
          </div>

          <div className="text-box">
            <p>Call Us Now</p>
            <h2>
              <Link href="tel:123456789">+70 264 566 579</Link>
            </h2>
          </div>
        </div>
      </div>
      {/* <!--End Sidebar Single--> */}
    </div>
  );
};

export default QuestionCard;
