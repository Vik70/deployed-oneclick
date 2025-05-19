import Link from "next/link";


const CircleText = () => {
    return (
        <div className="about-one__img-icon-box">
            <div className="circleWrap1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXhtml="http://www.w3.org/1999/xhtml"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width=""
                    height=""
                    viewBox="0 0 10 1000"
                    preserveAspectRatio="xMinYMin"
                >
                    <defs>
                        <path id="textPath" d="M 250 500 A 250,250 0 1 1 250 500.0001" />
                    </defs>
                    <text className="circle-text1" x="0" y="0" textAnchor="middle">
                        <textPath xlinkHref="#textPath" startOffset="50%" fill="#ffd550">
                            Award Winning Company - Since 1980 -
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className="read-more" id="read-more">
                <Link href="about">
                    Read <br />
                    More
                </Link>
            </div>
        </div>
    );
};

export default CircleText;