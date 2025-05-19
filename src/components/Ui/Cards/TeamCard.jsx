import Link from "next/link";

const TeamCard = ({item}) => {
  return (
    <div className="team-one__single">
      <div className="team-one__single-img">
        <div className="inner">
          <img src={item?.img} alt="" />
          <div className="social-links">
            <Link href="#">
              <span className="icon-facebook"></span>
            </Link>
            <Link href="#">
              <span className="icon-twitter"></span>
            </Link>
            <Link href="#">
              <span className="icon-instagram"></span>
            </Link>
            <Link href="#">
              <span className="icon-linkedin"></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="team-one__single-content">
        <h3>
          <Link href="team-details">{item?.name}</Link>
        </h3>
        <p>{item?.position}</p>
      </div>
    </div>
  );
};

export default TeamCard;