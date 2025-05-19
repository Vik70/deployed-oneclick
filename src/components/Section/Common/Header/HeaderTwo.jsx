// import "~/assets/css/color-1.css";
"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'EN1', label: 'EN' },
    { value: 'EN2', label: 'FR' },
    { value: 'EN3', label: 'GER' },
    { value: 'EN4', label: 'BAN' },
];


const HeaderTwo = () => {
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
    const initialSelected = options.find(option => option.label === 'EN');

    const [selected, setSelected] = useState(initialSelected);
    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
    };
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
        <header className="main-header main-header-two">
            <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
                <div className="main-header-two__outer">
                    <div className="logo-box-two">
                        <Link href="/"><img src="/img/resource/logo-4.png" alt="Logo" /></Link>
                    </div>
                    <div className="menu-area__inner">
                        <div className="mobile-nav-toggler" onClick={mobileMenuOpen}><i className="fas fa-bars"></i></div>
                        <div className="menu-wrap">
                            <nav className="menu-nav">
                                <div className="main-header-two__inner">
                                    <div className="main-header-two__top">
                                        <div
                                            className="main-header-two__top-pattern"
                                            style={{ backgroundImage: "url(/img/pattern/header-v2-pattern.png)" }}>

                                        </div>

                                        <div className="main-header-two__top-inner">
                                            <div className="main-header-two__top-left">
                                                <div className="header-contact-info">
                                                    <ul>
                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-pin"></span>
                                                            </div>
                                                            <p>Hounslow</p>
                                                        </li>
                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-paper-plane"></span>
                                                            </div>
                                                            <p>
                                                                <Link href="mailto:yourmail@email.com">operations@oneclickhandling.co.uk</Link>
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
                                                                <Link href="#"
                                                                ><span className="icon-facebook"></span></Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" ><span className="icon-twitter"></span></Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#"
                                                                ><span className="icon-instagram"></span></Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#"
                                                                ><span className="icon-linkedin"></span ></Link>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="btn-box">
                                                        <Link href="contact">Get a Free Quote
                                                            <span className="icon-right-arrow"></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="main-header-two__bottom">
                                        <div className="main-header-two__bottom-left">
                                            <div className="navbar-wrap main-menu">
                                                <ul className="navigation">
                                                    <li className="active menu-item-has-children">
                                                        <Link href="#">Home</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link href="/">Home One</Link></li>
                                                            <li><Link href="home-2">Home Two</Link></li>
                                                            <li><Link href="home-3">Home Three</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="about">About</Link></li>
                                                    <li className="menu-item-has-children">
                                                        <Link href="#">Services</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link href="services">Services</Link></li>
                                                            <li>
                                                                <Link href="road-transport"
                                                                >Road Transport</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="air-transport">Air Transport</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="cargo-transport"
                                                                >Cargo Transport</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="ocean-freight">Ocean Freight</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="rail-transport"
                                                                >Rail Transport</Link>
                                                            </li>
                                                            <li>
                                                                <Link href="warehousing">Warehousing</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="main-header-two__bottom-right" id='header-en-container'>
                                            <div className="search-box">
                                                <Link href="#" className="main-menu__search search-toggler icon-magnifying-glass" onClick={togglePopup}></Link>
                                            </div>

                                            <div className="main-header__language-switcher">
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

                                            </div>

                                            <div className="contact-box">
                                                <div className="icon-box">
                                                    <span className="icon-out-call"></span>
                                                </div>
                                                <div className="text">
                                                    <p><Link href="tel:123456789">+70 264 566 579</Link></p>
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
                            <div className={`close-btn ${mobileMenu ? "rotate" : ""}`} onClick={mobileMenuClose} ><i className="fas fa-times"></i></div>
                            <div className="nav-logo">
                                <Link href="/"><img src="/img/resource/mobile-menu-logo3.png" /></Link>
                            </div>
                            <div className="menu-outer">
                                <ul className="navigation">
                                    <li className="active menu-item-has-children">
                                        <Link href="#">Home</Link>
                                        <ul className={`sub-menu ${home ? "sub-menu-visible test" : "sub-menu-hidden"}`}
                                            style={{ zIndex: `${home ? "0" : ""}` }}
                                        >
                                            <li style={{ borderTop: `${home ? "1px solid #0000001a" : "1px solid #0000001a"}` }}><Link href="/">Home One</Link></li>
                                            <li style={{ borderTop: `${home ? "1px solid #0000001a" : "1px solid #0000001a"}` }}><Link href="home-2">Home Two</Link></li>
                                            <li style={{ borderTop: `${home ? "1px solid #0000001a" : "1px solid #0000001a"}` }}><Link href="home-3">Home Three</Link></li>
                                        </ul>
                                        <div className="dropdown-btn" onClick={() => setHome(!home)}><span className="fas fa-angle-down"></span></div></li>
                                    <li style={{ marginTop: `${home ? "0px" : "-134px"}`, zIndex: `${home ? "999" : ""}`, transition: "0.3s linear" }}><Link href="about">About</Link></li>
                                    <li className="menu-item-has-children">
                                        <Link href="#">Services</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link href="services">Services</Link>
                                            </li>
                                            <li>
                                                <Link href="road-transport">Road Transport</Link>
                                            </li>
                                            <li>
                                                <Link href="air-transport">Air Transport</Link>
                                            </li>
                                            <li>
                                                <Link href="cargo-transport">Cargo Transport</Link>
                                            </li>
                                            <li>
                                                <Link href="ocean-freight">Ocean Freight</Link>
                                            </li>
                                            <li>
                                                <Link href="rail-transport">Rail Transport</Link>
                                            </li>
                                            <li>
                                                <Link href="warehousing">Warehousing</Link>
                                            </li>
                                        </ul>
                                        <div className="dropdown-btn" onClick={serviceHandler}><span className="fas fa-angle-down"></span></div>
                                        {/* onClick={()=>setService(!service)} */}
                                    </li>
                                    <li className="menu-item-has-children"
                                        style={{ marginTop: `${service ? "0px" : "-314px"}`, zIndex: `${service ? "0" : "999"}`, transition: "0.3s linear" }}
                                    >
                                        <Link href="#">Pages</Link>
                                        <ul className="sub-menu">
                                            <li><Link href="team">Team</Link></li>
                                            <li>
                                                <Link href="team-details">Team Details</Link>
                                            </li>
                                            <li>
                                                <Link href="projects">Projects</Link>
                                            </li>
                                            <li>
                                                <Link href="project-details">Project Details</Link>
                                            </li>
                                            <li><Link href="error">404</Link></li>
                                        </ul>
                                        <div className="dropdown-btn" onClick={pageHandler}><span className="fas fa-angle-down"></span></div>
                                        {/* onClick={()=>setPage(!page)} */}
                                    </li>
                                    <li className="menu-item-has-children"
                                        style={{ marginTop: `${page ? "0px" : "-224px"}`, zIndex: `${page ? "0" : "99999"}`, transition: "0.3s linear" }}
                                    >
                                        <Link href="#">Blog</Link>
                                        <ul className="sub-menu" style={{ opacity: `${blog ? "1" : "0"}` }}>
                                            <li><Link href="blog">Blog</Link></li>
                                            <li>
                                                <Link href="blog-standard">Blog standard</Link>
                                            </li>
                                            <li>
                                                <Link href="blog-details">Blog Details</Link>
                                            </li>
                                        </ul>
                                        <div className="dropdown-btn" onClick={() => setBlog(!blog)}><span className="fas fa-angle-down"></span></div>
                                    </li>
                                    <li style={{ marginTop: `${blog ? "0px" : "-134px"}`, zIndex: `${blog ? "99999" : "99999"}`, transition: "0.3s linear" }}>
                                        <Link href="contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact-info" style={{ backgroundColor: "white", zIndex: "99999" }}>
                                <div className="icon-box" Name>
                                    <span className="icon-telephone-handle-silhouette"></span>
                                </div>
                                <p><Link href="tel:123456789">(629) 555-0129</Link></p>
                            </div>
                            <div className="social-links" style={{ backgroundColor: "white", zIndex: "99999" }}>
                                <ul className="clearfix list-wrap" style={{ backgroundColor: "white", zIndex: "99999" }}>
                                    <li>
                                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><i className="fab fa-youtube"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className={` ${mobileMenu ? "menu-backdrop" : ""}`} onClick={mobileMenuClose}></div>
                    {isOverlayActive && <div className="overlay" onClick={mobileMenuClose}></div>}
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

export default HeaderTwo;