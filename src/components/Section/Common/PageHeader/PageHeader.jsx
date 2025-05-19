import Link from "next/link";

const PageHeader = ({
  title,
  bgImage="/img/background/contact.png"
}) => {
  return (
    <section className="page-header padding">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="container">
        <div className="page-header__inner text-center">
          <h2>{title}</h2>
          <ul className="thm-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span className="icon-right-arrow-5"></span>
            </li>
            <li>{title} {title==="404"? "page not found" : ""}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
