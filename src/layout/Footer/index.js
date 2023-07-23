import React from 'react';
import styles from "../../styles/footer.module.scss"

const Footer = () => {

    return (
        <section className={styles.footerBackground}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerTopWrapper}>
                    <div className={styles.footerContacts}>
                        <h1 className={styles.contactsHeader}>Контакти</h1>
                        <p className={styles.contactsDepartment}>Кафедра ІТВС в НУ "Львівська Політехніка"</p>
                        <h2 className={styles.contactsEmail}>itvs.dept@lpnu.ua</h2>
                        <h4 className={styles.contactsPhone}>
                            <p className={styles.contactsPhoneTitle}>Телефон: </p> (032) 258-23-04
                        </h4>
                        <h4 className={styles.contactsPhone}>
                            <p className={styles.contactsPhoneTitle}>Факс: </p> (032) 258-26-63
                        </h4>
                        <div className={styles.footerSocialWrapper}>
                            <img className={styles.footerSocialItem} src={"icons/facebook.svg"} alt="facebook"/>
                            <img className={styles.footerSocialItem} src={"icons/instagramCircle.svg"} alt="instagram"/>
                            <img className={styles.footerSocialItem} src={"icons/google.svg"} alt="google"/>
                        </div>
                    </div>
                    <div className={styles.footerLocation}>
                        <img className={styles.locationMap} src={"img/Map.png"} alt="Map"/>
                        <h3 className={styles.locationText}><img className={styles.locationIcon} src={"icons/location.svg"} alt="location"
                                                                 /> вул. С.Бандери, 28а, Львів-13, 79013,V
                            навчальний корпус, кім.514.</h3>
                    </div>
                </div>
                <div className={styles.footerDivider}></div>
                <div className={styles.footerLinksWrapper}>
                    <a className={styles.footerLink} href="#">
                        <div className={styles.footerLinkTitle}>Дизайн сайту:
                            <div className={styles.footerLinkInfo}>
                                <img src={"icons/instagram.svg"} alt="instagram"/> @yurii_olekiv
                            </div></div>
                    </a>
                    <a className={styles.footerLink} target={"_blank"} href="https://linktr.ee/t3nz0r">
                        <div className={styles.footerLinkTitle}>Розробка сайту:
                            <div className={styles.footerLinkInfo}>
                                <img src={"icons/instagram.svg"} alt="instagram"/> @t3nz0r
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Footer;




