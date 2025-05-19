import Link from "next/link";

const ProjectCard = ({ item }) => {
  return (
    <div className="project-one__single">
      <div className="project-one__single-overlay-bg"></div>
      <div className="project-one__single-img">
        <div className="inner">
          <img src={item?.image} alt="#" />
        </div>
        <div className="overlay-box">
          <span>{item?.number}</span>
        </div>
      </div>
      <div className="project-one__single-content">
        <span className="categories">{item?.category}</span>
        <h3>
          <Link href="project-details">{item?.title}</Link>
        </h3>
        <div className="project-one__single-content-bottom">
          <div className="text-box">
            <p>{item?.description}</p>
          </div>
          <div className="btn-box">
            <Link className="thm-btn" href="project-details">
              <span className="txt">View Details</span>
              <i className="icon-right-arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
