/* eslint-disable @next/next/no-img-element */
"use client"
const CircleTextThree = () => {
    return (
        <div className="about-three__img-icon-box circle-three">
            <div className="round-text circleWrap3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXhtml="http://www.w3.org/1999/xhtml"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="10cm"
                    height="10cm"
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="xmlnsxhtml"
                >
                    <defs>
                        <path id="textPath" d="M 250 500 A 250,250 0 1 1 250 500.0001" />
                    </defs>
                    <text className="circle-text3" x="0" y="0" textAnchor="middle">
                        <textPath xlinkHref="#textPath" startOffset="50%">
                            Trusted Transport & Handling Company
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className="icon hello">
                <img src="/img/logo/ochcircle.png" alt="" />
            </div>
        </div>
    );
};

export default CircleTextThree;