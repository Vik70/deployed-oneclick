"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";
import Select from 'react-select';
const options = [
    { value: 'EN1', label: 'EN' },
    { value: 'EN2', label: 'FR' },
    { value: 'EN3', label: 'GER' },
    { value: 'EN4', label: 'BAN' },
];



const HeaderFour = () => {
    const initialSelected = options.find(option => option.label === 'EN');

    const [selected, setSelected] = useState(initialSelected);
    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
    };
    const [mobileMenu, setMobileMenu] = useState(false);
    const [home, setHome] = useState(false);
    const [service, setService] = useState(false);
    const [page, setPage] = useState(false);
    const [blog, setBlog] = useState(false);
    const [isOverlayActive, setIsOverlayActive] = useState(false);
  
    const mobileMenuOpen = () => {
      setMobileMenu(true);
      setIsOverlayActive(true);
      document.body.classList.add('disable-scroll');
    };
  
    const mobileMenuClose = () => {
      setMobileMenu(false);
      setIsOverlayActive(false);
      document.body.classList.remove('disable-scroll');
    };
    const serviceHandler = () => {
        setService(!service)
    }
    const pageHandler = () => {
        setPage(!page)
    }
    const [currentPath, setCurrentPath] = useState(null);

    // Get the current pathname using usePathname hook
    const pathname = usePathname();

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    const [scrollClassName, setScrollClassName] = useState("");
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrollClassName("sticky-menu");
            } else {
                setScrollClassName("");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    // Search Popup 
    const [isActive, setIsActive] = useState(false);

    const togglePopup = () => {
        setIsActive(!isActive);
        document.body.classList.toggle('locked');
    };
    function preloader() {
        // Implementation of the preloader function
    }
    if (typeof window !== 'undefined') {
        window.onload = () => {
            preloader();
        };
    }


    return (
        <header className="main-header main-header-two style4">
            <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
                <div className="main-header-two__outer">
                    <div className="logo-box-two">
                        <Link href="/"><img src="/img/logo/ochmainlogo1.png" alt="Logo" /></Link>
                    </div>
                    <div className="menu-area__inner">
                        <div className="mobile-nav-toggler" onClick={mobileMenuOpen}><i className="fas fa-bars"></i></div>
                        <div className="menu-wrap">
                            <nav className="menu-nav">
                                <div className="main-header-two__inner">
                                    <div className="main-header-two__top">
                                        <div className="main-header-two__top-pattern"
                                            style={{ backgroundImage: "url(/img/pattern/header-v2-pattern.png)" }} >
                                        </div>

                                        <div className="main-header-two__top-inner">
                                            <div className="main-header-two__top-left">
                                                <div className="header-contact-info">
                                                    <ul>
                                                        <li>
                                                            <div className="icon-box"><span className="icon-pin"></span>
                                                            </div>
                                                            <p>Unit 6 Mercury Centre, Feltham Trading Estate, TW14 0RN </p>
                                                        </li>
                                                        <li>
                                                            <div className="icon-box"><span className="icon-paper-plane"></span>
                                                            </div>
                                                            <p><Link href="mailto:info@oneclickhandling.co.uk">info@oneclickhandling.co.uk</Link>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="main-header-two__top-right">
                                                <div className="inner">
                                                <div className="header-social-links">
                                                <ul>
                                                    <li>
                                                    <a href="https://www.facebook.com/profile.php?id=61576271162489&mibextid=wwXIfr&rdid=5yUkloCWWodi5SQA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16A4vZDQk6%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer">
                                                        <span className="icon-facebook"></span>
                                                    </a>
                                                    </li>

                                                    <li>
                                                    <a href="https://www.instagram.com/oneclickhandling" target="_blank" rel="noopener noreferrer">
                                                        <span className="icon-instagram"></span>
                                                    </a>
                                                    </li>
                                                    <li>
                                                    <a href="https://www.linkedin.com/company/oneclickhandling" target="_blank" rel="noopener noreferrer">
                                                        <span className="icon-linkedin"></span>
                                                    </a>
                                                    </li>
                                                </ul>
                                                </div>


                                                    <div className="btn-box">
                                                        <Link href="contact">Get a Free Quote <span
                                                            className="icon-right-arrow"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="main-header-two__bottom">
                                        <div className="main-header-two__bottom-left">
                                            <div className="navbar-wrap main-menu">
                                                <ul className="navigation">
                                                    <li ><Link href="/">Home</Link>
                                                        
                                                    </li>
                                                    <Navlink
                                                        className=""
                                                        activeClasses="active"
                                                        text="About"
                                                        href="/about"
                                                        liClassName=""
                                                    />

                                                    <li className={currentPath === "/services" || currentPath === "/pick-and-pack" || currentPath === "/pharmaceutical" || currentPath === "/aog" || currentPath === "/time-critical-deliveries" || currentPath === "/on-board-courier" || currentPath === "/etsf" || currentPath === "/x-ray-screening" || currentPath === "/warehousing" ? "active menu-item-has-children" : "menu-item-has-children"}>
                                                        <Link href="/services">Services</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link href="/x-ray-screening" className={currentPath === "/x-ray-screening" ? "active" : ""}>X-Ray Screening</Link></li>
                                                            <li><Link href="/time-critical-deliveries" className={currentPath === "/time-critical-deliveries" ? "active" : ""}>Time Critical Deliveries</Link></li>
                                                            <li><Link href="/etsf" className={currentPath === "/etsf" ? "active" : ""}>ETSF</Link></li>
                                                            <li><Link href="/pick-and-pack" className={currentPath === "/pick-and-pack" ? "active" : ""}>Pick and Pack</Link></li>
                                                            <li><Link href="/pharmaceutical" className={currentPath === "/pharmaceutical" ? "active" : ""}>Pharmaceutical</Link></li>
                                                            <li><Link href="/aog" className={currentPath === "/aog" ? "active" : ""}>AOG (Aircraft on Ground)</Link></li>
                                                            <li><Link href="/on-board-courier" className={currentPath === "/on-board-courier" ? "active" : ""}>On Board Courier</Link></li>
                                                            <li><Link href="/warehousing" className={currentPath === "/warehousing" ? "active" : ""}>Warehousing</Link></li>
                                                        </ul>
                                                    </li>
                                                    <Navlink
                                                        className=""
                                                        activeClasses="active"
                                                        text="Contact"
                                                        href="/contact"
                                                        liClassName=""
                                                    />

                                                </ul>
                                            </div>
                                        </div>


                                        <div className="main-header-two__bottom-right">
                                            {/* <div className="search-box">
                                                <Link href="#" className="main-menu__search search-toggler icon-magnifying-glass" onClick={togglePopup}></Link>
                                            </div> */}

                                            {/* <div className="main-header__language-switcher">
                                                <div className="select-box clearfix" id='select-box-home-two'>
                                                    <Select
                                                        className="selectmenu wide"
                                                        options={options}
                                                        value={selected}
                                                        onChange={handleChange}
                                                        styles={{
                                                            control: (provided, state) => ({
                                                                ...provided,
                                                                width: '100%',
                                                                height: '50px',
                                                                fontSize: '16px',
                                                                fontWeight: 500,
                                                                fontStyle: 'normal',
                                                                // paddingLeft: '5px',
                                                                // paddingRight: '0px',
                                                                borderRadius: '4px',
                                                                transition: 'all 500ms ease',
                                                                outline: 'none',
                                                                backgroundColor: '#fff',
                                                                color: '#fff'
                                                            }),
                                                            option: (provided, state) => ({
                                                                ...provided,
                                                                display: 'block',
                                                                width: '100%',
                                                                float: 'none',
                                                                borderRight: 'none',
                                                                color: '#ffffff',
                                                                fontWeight: 500,
                                                                lineHeight: '24px', // Set the height of options
                                                                listStyle: 'none',
                                                                minHeight: '35px',
                                                                outline: 'none',
                                                                // paddingLeft: '18px',
                                                                // paddingRight: '29px',
                                                                textAlign: 'left',
                                                                cursor: 'pointer',
                                                                transition: 'all 0.2s',
                                                                backgroundColor: state.isSelected ? '#121213' : state.isFocused ? '#121213' : '#FF5E15',
                                                            })
                                                        }}
                                                    />
                                                </div>

                                            </div> */}

                                            <div className="contact-box">
                                                <div className="icon-box">
                                                    <span className="icon-out-call"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link href="tel:0333 404 0298">0333 404 0298</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                    {/* <!-- Mobile Menu  --> */}
                    <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
                        <nav className="menu-box">
                            <div className={`close-btn ${mobileMenu ? "rotate" : ""}`} onClick={mobileMenuClose}><i className="fas fa-times"></i></div>
                            <div className="nav-logo">
                                <Link href="/"><img src="/img/logo/ochmainlogo1.png" alt="OCH Logo" /></Link>
                            </div>
                            <div className="menu-outer">
                                <ul className="navigation">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li className="menu-item-has-children">
                                        <Link href="/services">Services</Link>
                                        <ul className="sub-menu">
                                            <li><Link href="/pick-and-pack">Pick and Pack</Link></li>
                                            <li><Link href="/pharmaceutical">Pharmaceutical</Link></li>
                                            <li><Link href="/aog">AOG (Aircraft on Ground)</Link></li>
                                            <li><Link href="/time-critical-deliveries">Time Critical Deliveries</Link></li>
                                            <li><Link href="/on-board-courier">On Board Courier</Link></li>
                                            <li><Link href="/etsf">ETSF</Link></li>
                                            <li><Link href="/x-ray-screening">X-Ray Screening</Link></li>
                                            <li><Link href="/warehousing">Warehousing</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className={` ${mobileMenu ? "menu-backdrop" : ""}`} onClick={mobileMenuClose}></div>
                    {isOverlayActive && <div className="overlay" onClick={mobileMenuClose}></div>}
                    {/* <!-- End Mobile Menu --> */}
                </div>
            </div>
            <div className={`search-popup ${isActive ? 'active' : ''}`} id='home-two'>
                <div className="search-popup__overlay search-toggler" onClick={togglePopup}>
                    <div className="search-popup__close-icon">
                        <span className="icon-plus"></span>
                    </div>
                </div>
                <div className="search-popup__content">
                    <form action="#">
                        <label htmlFor="search" className="sr-only">search here</label>
                        <input type="text" id="search" placeholder="Search Here..." />
                        <button type="submit" aria-label="search submit" className="btn-box">
                            <i className="icon-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default HeaderFour;