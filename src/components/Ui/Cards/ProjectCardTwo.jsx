import Link from "next/link";
const ProjectCard = ({ item }) => {
    return (
        <div className="project-three__single">
            <div className="project-three__single-img">
                <div className="inner">
                    <img src={item.imageUrl} alt={item.title} />
                    <div className="overlay-content">
                        <div className="overlay-icon"><span className="icon-road-transport"></span></div>
                        <div className="icon-box">
                            <Link href={item.link}><span className="icon-right-arrow-5"></span></Link>
                        </div>
                        <div className="text-box">
                            <p>{item.category}</p>
                            <h2><Link href={item.link}>{item.title}</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;