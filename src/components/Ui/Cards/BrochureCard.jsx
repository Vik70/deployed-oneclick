import Link from "next/link";


const BrochureCard = () => {
  return (
    <div
      className="sidebar__single sidebar__brochure wow fadeInUp"
      data-wow-delay=".3s"
    >
      <div className="title-box">
        <h2>Brochure</h2>
      </div>
      <div className="sidebar__brochure-box">
        <div className="sidebar__brochure-single active">
          <div className="left-content">
            <div className="icon">
              <img src="/img/icon/sidebar-icon1.png" alt="" />
            </div>
            <div className="text-box">
              <h4>Service Brochure</h4>
              <ul>
                <li>
                  <p>PDF</p>
                </li>
                <li>
                  <p>79 MB</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="btn-box">
            <a href="/documents/service-brochure.pdf" target="_blank" rel="noopener noreferrer" download>
              <span className="icon-right-arrow-5"></span>
            </a>
          </div>
        </div>

        <div className="sidebar__brochure-single">
          <div className="left-content">
            <div className="icon">
              <img src="/img/icon/sidebar-icon2.png" alt="" />
            </div>
            <div className="text-box">
              <h4>Company Profile</h4>
              <ul>
                <li>
                  <p>PDF</p>
                </li>
                <li>
                  <p>25 MB</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="btn-box">
            <a href="/documents/company-profile.pdf" target="_blank" rel="noopener noreferrer" download>
              <span className="icon-right-arrow-5"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureCard;
