
const ContentCard = ({image, title, description}) => {
  return (
    <div className="inner">
      <div className="icon-box">
        <img
          src={image}
          alt="#"
        />
      </div>
      <div className="text-box">
        <h4>{title}</h4>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
