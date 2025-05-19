'use client';

import Link from "next/link";
import data from '~/public/db/teamData.json'
import TeamCardThree from "~/components/Ui/Cards/TeamCardThree";


const Team = () => {

    return (
        <section className="team-three padding"id="blog-cta">
            <div className="container">
                <div className="row">
                    {data?.map((item, index) => (
                        <TeamCardThree item={item} key={index}></TeamCardThree>
                    ))}
                </div>
                <div className="team-three--team__bottom" >
                    <div className="text-box">
                        <p>We’re Experience. Become a team member!</p>
                    </div>

                    <div className="btn-box">
                        <Link className="thm-btn" href="contact">
                            <span className="txt">Join Our Team</span> <i className="icon-right-arrow"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;