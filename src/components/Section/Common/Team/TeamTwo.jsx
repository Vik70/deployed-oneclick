'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import TeamCardThree from "~/components/Ui/Cards/TeamCardThree";

const TeamTwo = ({bgColor}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./db/teamData.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <section className="team-three team-three--about padding" style={{backgroundColor: `${bgColor}`}} id="blog-cta">
        <div className="team-three__shape1">
            <img src="/img/shape/team-v3-shape1.png" alt="" />
        </div>
        <div className="container">
            <div className="team-three__top">
                <div className="sec-title-style3">
                    <div className="sub-title">
                        <div className="icon">
                            <img src="/img/icon/title-marker-4.png" alt="" />
                        </div>
                        <h5>Team</h5>
                    </div>
                    <h2>Meet Our Staff</h2>
                </div>

                <div className="btn-box">
                    <Link className="thm-btn" href="team">
                        <span className="txt" style={{ textDecoration: 'none' }}>Become a Member</span>
                    </Link>
                </div>
            </div>

            <div className="row">
                {data?.slice(0, 4).map((item, index) => (
                    <TeamCardThree item={item} key={index}></TeamCardThree>
                ))}
            </div>
        </div>
    </section>
    );
};

export default TeamTwo;