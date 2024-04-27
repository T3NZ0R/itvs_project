import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";

import styles from "@/styles/header.module.scss"
import Image from "next/image";

import Logo from '@/assets/icons/logo.svg';
import ArrowDown from '@/assets/icons/arrowDown.svg';
import Instagram from '@/assets/icons/instagram.svg';
import Facebook from '@/assets/icons/facebook2.svg';


const Header = () => {

    const {routesDropdown, routesMobile} = useSelector(state => state['routesReducer']);


    const [open, setOpen] = useState(false);
    const [startClosed, setStartClosed] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    const handleStartClose = () => {
        setStartClosed(true);
    }

    const [screenSize, getDimension] = useState(0);
    const setDimension = () => {
        getDimension(window.innerWidth,)
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])


    return (


        <header className={styles.headerMain}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerWebWrapper}>
                    <div className={styles.headerLogo}>
                        <Link href={"/"}>
                            <Image src={Logo} alt="logo" />
                        </Link>
                    </div>
                    <div className={styles.headerHamburgerMenu} onClick={() => {
                        handleOpen();
                        handleStartClose();
                    }}>
                        <div
                            className={`${open && styles.headerHamburgerMenuLineTopOpened} ${styles.headerHamburgerMenuLineTop}`}></div>
                        <div
                            className={`${open && styles.headerHamburgerMenuLineCenterOpened} ${styles.headerHamburgerMenuLineCenter}`}></div>
                        <div
                            className={`${open && styles.headerHamburgerMenuLineBottomOpened} ${styles.headerHamburgerMenuLineBottom}`}></div>
                    </div>
                    <div className={styles.headerLinksWrapper}>
                        <div className={styles.headerPagesLinks}>
                            <Link href={"/"} className={styles.headerPageLink}>Головна</Link>
                            <div className={styles.headerDropdown}>
                                <div className={styles.headerDropdownTitle}>
                                    <Image className={styles.arrowDown} src={ArrowDown} alt="arrowDown" />
                                    <h3 className={styles.headerDropdownLink}>Про кафедру</h3>
                                </div>
                                <div className={styles.headerDropdownContent}>
                                    {routesDropdown.map((route, index) =>
                                        <React.Fragment key={route.title}>
                                            <Link className={styles.headerDropdownContentLink}
                                                  href={{
                                                      pathname: '/about-us',
                                                      query: {tab: route.query}
                                                  }}>{route.title}</Link>
                                            {index < routesDropdown.length - 1 &&
                                                <div className={styles.headerDropdownDivider}></div>}
                                        </React.Fragment>)
                                    }
                                </div>
                            </div>
                            <Link href={"/events-and-news"} className={styles.headerPageLink}>Події та новини </Link>
                            <Link href={"/department-staff"} className={styles.headerPageLink}>Колектив</Link>
                            <Link href={"/contact-us"} className={styles.headerPageLink}>Контакти</Link>
                        </div>
                        <div className={styles.headerSocialWrapper}>
                            <Link href={"https://www.facebook.com/ITVSDepartment"} target={"_blank"}>
                                <Image className={styles.headerSocialIcon} src={Instagram} alt="instagram" />
                            </Link>
                            <Link href={"https://www.facebook.com/ITVSDepartment"} target={"_blank"}>
                                <Image className={styles.headerSocialIcon} src={Facebook} alt="facebook" />
                            </Link>
                        </div>
                    </div>
                </div>
                {startClosed && <div
                    className={open && screenSize < 900 ? styles.headerHamburgerMenuContentOpened : styles.headerHamburgerMenuContentClosed}>
                    {routesMobile.map((route) =>
                        <React.Fragment key={route.title}>
                            {route.query ?
                                <Link className={styles.headerHamburgerMenuContentLink}
                                      href={{pathname: route.path, query: {tab: route.query}}} onClick={() => {
                                    handleOpen()
                                }}>{route.title}</Link>
                                :
                                <Link href={route.path} className={styles.headerHamburgerMenuContentLink}
                                      onClick={() => {
                                          handleOpen()
                                      }}>{route.title}</Link>
                            }
                        </React.Fragment>
                    )}
                    <div className={styles.headerHamburgerMenuDivider}></div>
                    <div className={styles.headerHamburgerSocialWrapper}>

                        <Link href={"https://www.facebook.com/ITVSDepartment"} target={"_blank"}>
                            <Image className={styles.headerSocialIcon} src={Instagram} alt="instagram" />
                        </Link>
                        <Link href={"https://www.facebook.com/ITVSDepartment"} target={"_blank"}>
                            <Image className={styles.headerSocialIcon} src={Facebook} alt="facebook" />
                        </Link>
                    </div>
                </div>}

            </div>
        </header>


    );
};

export default Header;

