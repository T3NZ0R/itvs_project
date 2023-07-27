import React, {useEffect, useState} from 'react';
import styles from "../../styles/header.module.scss"
import Link from "next/link";

const Header = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    const [screenSize, getDimension] = useState( 0);
    const setDimension = () => {
        getDimension( window.innerWidth,)
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return(() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])


    return (


        <header className={styles.headerMain}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerWebWrapper}>
                    <div className={styles.headerLogo}><img src={"icons/logo.svg"} alt="logo"/></div>
                    <div className={styles.headerHamburgerMenu} onClick={() => {
                        handleOpen()
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
                                    <img className={styles.arrowDown} src={"icons/arrowDown.svg"} alt="arrowDown"/>
                                    <h3 className={styles.headerDropdownLink}>Про кафедру</h3>
                                </div>
                                <div className={styles.headerDropdownContent}>
                                    <Link className={styles.headerDropdownContentLink}
                                          href={{pathname: '/about-us', query: {tab: 'education'}}}>Навчання</Link>
                                    <div className={styles.headerDropdownDivider}></div>
                                    <Link className={styles.headerDropdownContentLink}
                                          href={{pathname: '/about-us', query: {tab: 'international-activity'}}}>Міжнародна
                                        діяльність</Link>
                                    <div className={styles.headerDropdownDivider}></div>
                                    <Link className={styles.headerDropdownContentLink}
                                          href={{pathname: '/about-us', query: {tab: 'partners-of-the-department'}}}>Партнери
                                        кафедри</Link>
                                    <div className={styles.headerDropdownDivider}></div>
                                    <Link className={styles.headerDropdownContentLink}
                                          href={{pathname: '/about-us', query: {tab: 'history-of-the-department'}}}>Історія
                                        кафедри</Link>
                                    <div className={styles.headerDropdownDivider}></div>
                                    <Link className={styles.headerDropdownContentLink}
                                          href={{pathname: '/about-us', query: {tab: 'student-science'}}}>Студентська
                                        наука</Link>
                                    <div className={styles.headerDropdownDivider}></div>
                                    <Link className={styles.headerDropdownContentLink}
                                          href={{pathname: '/about-us', query: {tab: 'research-activities'}}}>Наукова
                                        діяльність</Link>
                                </div>
                            </div>
                            <Link href={"/events-and-news"} className={styles.headerPageLink}>Події та новини </Link>
                            <Link href={"/department-staff"} className={styles.headerPageLink}>Колектив</Link>
                            <Link href={"/contact-us"} className={styles.headerPageLink}>Контакти</Link>
                        </div>
                        <div className={styles.headerSocialWrapper}>
                            <img className={styles.headerSocialIcon} src={"icons/instagram.svg"} alt="instagram"/>
                            <img className={styles.headerSocialIcon} src={"icons/facebook2.svg"} alt="facebook"/>
                        </div>
                    </div>
                </div>
                  <div className={open ? styles.headerHamburgerMenuContentOpened : styles.headerHamburgerMenuContentClosed}>
                    <Link href={"/"} className={styles.headerHamburgerMenuContentLink} onClick={() => {
                        handleOpen()
                    }}>Головна</Link>
                    <Link className={styles.headerHamburgerMenuContentLink}
                          href={{pathname: '/about-us', query: {tab: 'education'}}} onClick={() => {
                        handleOpen()
                    }}>Навчання</Link>
                    <Link className={styles.headerHamburgerMenuContentLink}
                          href={{pathname: '/about-us', query: {tab: 'international-activity'}}} onClick={() => {
                        handleOpen()
                    }}>Міжнародна
                        діяльність</Link>
                    <Link className={styles.headerHamburgerMenuContentLink}
                          href={{pathname: '/about-us', query: {tab: 'partners-of-the-department'}}} onClick={() => {
                        handleOpen()
                    }}>Партнери
                        кафедри</Link>
                    <Link className={styles.headerHamburgerMenuContentLink}
                          href={{pathname: '/about-us', query: {tab: 'history-of-the-department'}}} onClick={() => {
                        handleOpen()
                    }}>Історія
                        кафедри</Link>

                    <Link className={styles.headerHamburgerMenuContentLink}
                          href={{pathname: '/about-us', query: {tab: 'student-science'}}} onClick={() => {
                        handleOpen()
                    }}>Студентська
                        наука</Link>

                    <Link className={styles.headerHamburgerMenuContentLink}
                          href={{pathname: '/about-us', query: {tab: 'research-activities'}}} onClick={() => {
                        handleOpen()
                    }}>Наукова
                        діяльність</Link>

                    <Link href={"/events-and-news"} className={styles.headerHamburgerMenuContentLink} onClick={() => {
                        handleOpen()
                    }}>Події та новини </Link>

                    <Link href={"/department-staff"} className={styles.headerHamburgerMenuContentLink} onClick={() => {
                        handleOpen()
                    }}>Колектив</Link>

                    <Link href={"/contact-us"} className={styles.headerHamburgerMenuContentLink} onClick={() => {
                        handleOpen()
                    }}>Контакти</Link>
                    <div className={styles.headerHamburgerMenuDivider} onClick={() => {
                        handleOpen()
                    }}></div>

                    <div className={styles.headerHamburgerSocialWrapper}>
                        <img className={styles.headerSocialIcon} src={"icons/instagram.svg"} alt="instagram"/>
                        <img className={styles.headerSocialIcon} src={"icons/facebook2.svg"} alt="facebook"/>
                    </div>
                </div>
            </div>
        </header>


    );
};

export default Header;

