import Link from "next/link";

const TestimonialCard = ({ item }) => {
  return (
    <div className="testimonials-one__single" style={{ height: 'auto', minHeight: '350px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div className="icon-box">
          <span className="icon-quote11"></span>
        </div>
        <div className="border-left"></div>
        <div className="testimonials-one__single-top">
          {/* <div className="img-box">
            <img src={item?.image} alt="" />
          </div> */}

          <div className="title-box">
            <h2 style={{ fontSize: '1.2em', marginBottom: '10px' }}>{item?.author}</h2>
            <p style={{ fontSize: '0.9em', color: '#666' }}>{item?.position} {item?.company && `| ${item?.company}`}</p>
          </div>
        </div>

        <div className="testimonials-one__single-inner">
          <div className="content-box">
            <div className="content-box-top">
              <div className="text-box">
                <h3 style={{ fontSize: '0.9em', lineHeight: '1.4em' }}>{item?.text}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
