"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    const [mobileMenu, setMobileMenu] = useState(false);
    const [home, setHome] = useState(false);
    const [service, setService] = useState(false);
    const [page, setPage] = useState(false);
    const [blog, setBlog] = useState(false);
    const [scrollClassName, setScrollClassName] = useState("");
    const [isOverlayActive, setIsOverlayActive] = useState(false);
    const [isActive, setIsActive] = useState(false);
  
    const mobileMenuOpen = () => {
      setMobileMenu(true);
    };
  
    const mobileMenuClose = () => {
      setMobileMenu(false);
    };
  
    const serviceHandler = () => {
      setService(!service);
    };
  
    const pageHandler = () => {
      setPage(!page);
    };
  
    useEffect(() => {
      // Remove disable-scroll class when component mounts
      document.body.classList.remove('disable-scroll');
    }, []);
  
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
  
    const togglePopup = () => {
      setIsActive(!isActive);
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
        <header className="main-header main-header-one">
            <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
                <div className="main-header-one__outer">
                    <div className="logo-box-one">
                        <div
                            className="logo-box-one__bg"
                            style={{
                                backgroundImage: "url(/img/pattern/logo-box-one-pattern.png)"
                            }}
                        ></div>
                        <Link href="/"><img src="/img/logo/ochmainlogo1.png" alt="Logo" /></Link>
                    </div>
                    <div className="main-header-one__right">
                        <div className="container">
                            <div className="menu-area__inner">
                                <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
                                    <i className="fas fa-bars"></i>
                                </div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="main-header-one__inner">
                                            <div className="main-header-one__top">
                                                <div
                                                    className="main-header-one__top-pattern"
                                                    style={{
                                                        backgroundImage: "url(/img/pattern/header-pattern.png)"
                                                    }}
                                                ></div>
                                                <div className="main-header-one__top-inner">
                                                    <div className="main-header-one__top-left">
                                                        <div className="header-contact-info">
                                                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                                                <li style={{ display: 'flex', alignItems: 'center', minWidth: 'fit-content' }}>
                                                                    <div className="icon-box">
                                                                        <span className="icon-pin"></span>
                                                                    </div>
                                                                    <p style={{ margin: 0 }}>Unit 6 Mercury Centre, Feltham Trading Estate, TW14 0RN </p>
                                                                </li>
                                                                <li style={{ display: 'flex', alignItems: 'center', minWidth: 'fit-content' }}>
                                                                    <div className="icon-box">
                                                                        <span className="icon-paper-plane"></span>
                                                                    </div>
                                                                    <p style={{ margin: 0 }}>
                                                                        <Link href="mailto:operations@oneclickhandling.co.uk">operations@oneclickhandling.co.uk</Link>
                                                                    </p>
                                                                </li>
                                                                <li style={{ display: 'flex', alignItems: 'center', minWidth: 'fit-content', whiteSpace: 'nowrap' }}>
                                                                    <div className="icon-box">
                                                                        <span className="icon-out-call"></span>
                                                                    </div>
                                                                    <p style={{ margin: 0 }}>
                                                                        <Link href="tel:0333 404 0298">0333 404 0298</Link>
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="main-header-one__top-right">
                                                        <div className="inner">
                                                            <div className="header-social-links">
                                                                <ul>
                                                                    <li>
                                                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#"><span className="icon-twitter"></span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#"><span className="icon-instagram"></span></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="#"><span className="icon-linkedin"></span></Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="main-header-one__bottom">
                                                <div className="main-header-one__bottom-left">
                                                    <div className="navbar-wrap main-menu">
                                                        <ul className="navigation">
                                                            <li>
                                                                <Link href="/" onClick={mobileMenuClose}>Home</Link>
                                                            
                                                            </li>
                                                            <li><Link href="/about" onClick={mobileMenuClose}>About</Link></li>
                                                            <li className="menu-item-has-children">
                                                                <Link href="#">Services</Link>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        <Link href="/services" onClick={mobileMenuClose}>Services</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/pick-and-pack" onClick={mobileMenuClose}>Pick and Pack</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/pharmaceutical" onClick={mobileMenuClose}>Pharmaceutical</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/aog" onClick={mobileMenuClose}>AOG (Aircraft on Ground)</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/time-critical-deliveries" onClick={mobileMenuClose}>Time Critical Deliveries</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/on-board-courier" onClick={mobileMenuClose}>On Board Courier</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/etsf" onClick={mobileMenuClose}>ETSF</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/x-ray-screening" onClick={mobileMenuClose}>X-Ray Screening</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link href="/warehousing" onClick={mobileMenuClose}>Warehousing</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li><Link href="/contact" onClick={mobileMenuClose}>Contact</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="main-header-one__bottom-right">
                                                    <div className="search-box">
                                                        <Link href="#" className="main-menu__search search-toggler icon-magnifying-glass" onClick={togglePopup}></Link>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link className="thm-btn" href="contact">
                                                            <span className="txt">Get Free Quote</span>
                                                            <i className="icon-right-arrow"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            {/* <!-- Mobile Menu  --> */}
                            <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`} style={{ backgroundColor: "#333" }}>
                                <nav className="menu-box">
                                    <div className={`close-btn ${mobileMenu ? "rotate" : ""}`} onClick={mobileMenuClose}><i className="fas fa-times"></i></div>
                                    <div className="nav-logo">
                                        <Link href="/"><img src="/img/logo/ochmainlogo1.png" alt="OCH Logo" /></Link>
                                    </div>
                                    <div className="menu-outer">
                                        <ul className="navigation">
                                            <li><Link href="/" onClick={mobileMenuClose}>Home</Link></li>
                                            <li><Link href="/about" onClick={mobileMenuClose}>About</Link></li>
                                            <li className="menu-item-has-children">
                                                <Link href="#">Services</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="/services" onClick={mobileMenuClose}>Services</Link></li>
                                                    <li><Link href="/pick-and-pack" onClick={mobileMenuClose}>Pick and Pack</Link></li>
                                                    <li><Link href="/pharmaceutical" onClick={mobileMenuClose}>Pharmaceutical</Link></li>
                                                    <li><Link href="/aog" onClick={mobileMenuClose}>AOG (Aircraft on Ground)</Link></li>
                                                    <li><Link href="/time-critical-deliveries" onClick={mobileMenuClose}>Time Critical Deliveries</Link></li>
                                                    <li><Link href="/on-board-courier" onClick={mobileMenuClose}>On Board Courier</Link></li>
                                                    <li><Link href="/etsf" onClick={mobileMenuClose}>ETSF</Link></li>
                                                    <li><Link href="/x-ray-screening" onClick={mobileMenuClose}>X-Ray Screening</Link></li>
                                                    <li><Link href="/warehousing" onClick={mobileMenuClose}>Warehousing</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact" onClick={mobileMenuClose}>Contact</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className={` ${mobileMenu ? "menu-backdrop" : ""}`} onClick={mobileMenuClose}></div>
                            {isOverlayActive && <div className="overlay" onClick={mobileMenuClose}></div>}
              
                        </div>
                    </div>
                </div>
            </div>
            <div className={`search-popup ${isActive ? 'active' : ''}`} id='home-one'>
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

export default Header;