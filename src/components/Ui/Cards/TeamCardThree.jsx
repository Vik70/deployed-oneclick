'use client'
import Link from "next/link";
import { useEffect } from 'react';
import 'wowjs/css/libs/animate.css';

const TeamCardThree = ({ item }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('wowjs').then(WOW => {
                const wow = new WOW.WOW();
                wow.init();
            });
        }
    }, []);
    return (
        <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
        >
            <div className="team-three__single">
                <div className="team-three__single-img">
                    <img src={item?.img} alt="" />
                </div>
                <div className="team-three__single-content text-center">
                    <h3><Link href={item?.link}>{item?.name}</Link></h3>
                    <p>{item?.position}</p>
                    <div className="social-links">
                        <Link href={item?.social1?.link}><span className={item?.social1?.icon}></span></Link>
                        <Link href={item?.social2?.link}><span className={item?.social2?.icon}></span></Link>
                        <Link href={item?.social3?.link}><span className={item?.social3?.icon}></span></Link>
                        <Link href={item?.social4?.link}><span className={item?.social4?.icon}></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCardThree;