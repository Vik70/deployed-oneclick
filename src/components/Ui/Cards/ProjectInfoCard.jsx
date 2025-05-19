

const ProjectInfoCard = () => {
    return (
        <div className="project-details__sidebar">
        <div className="project-details__sidebar-img">
            <img src="/img/project/project-details-img2.jpg" alt=""/>
        </div>

        <div className="project-details__sidebar-project-info">
            <div className="title">
                <h2>Project Info</h2>
            </div>
            <ul>
                <li>
                    <div className="title-box">
                        <p>Client <span>:</span></p>
                    </div>
                    <div className="text-box">
                        <p>Rebecca Tylor</p>
                    </div>
                </li>

                <li>
                    <div className="title-box">
                        <p>Category <span>:</span></p>
                    </div>
                    <div className="text-box">
                        <p>Ocean Transport</p>
                    </div>
                </li>

                <li>
                    <div className="title-box">
                        <p>Location <span>:</span></p>
                    </div>
                    <div className="text-box">
                        <p>New York to London</p>
                    </div>
                </li>

                <li>
                    <div className="title-box">
                        <p>Date <span>:</span></p>
                    </div>
                    <div className="text-box">
                        <p>12 November, 2023</p>
                    </div>
                </li>

                <li>
                    <div className="title-box">
                        <p>Status <span>:</span></p>
                    </div>
                    <div className="text-box">
                        <p>Completed</p>
                    </div>
                </li>

                <li>
                    <div className="title-box">
                        <p>Tags <span>:</span></p>
                    </div>
                    <div className="text-box">
                        <p>Best Delivery</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default ProjectInfoCard;