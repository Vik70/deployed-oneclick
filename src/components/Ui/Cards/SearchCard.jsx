import Link from "next/link";

const SearchCard = () => {
    return (
        <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
            <div className="title-box">
                <h2>Search</h2>
            </div>
            <form action="#" className="sidebar__search-form">
                <input type="search" placeholder="Search Here..." />
                <button type="submit"><i className="icon-magnifying-glass"></i></button>
            </form>
        </div>
    );
};

export default SearchCard;