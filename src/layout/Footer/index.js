import React from 'react';
import Link from "next/link";

import styles from "@/styles/footer.module.scss"

import Instagram from '@/assets/icons/instagram.svg';
import Instagram2 from '@/assets/icons/instagramCircle.svg';
import Google from '@/assets/icons/google.svg';
import Facebook from '@/assets/icons/facebook.svg';
import Location from '@/assets/icons/location.svg';
import Map from '@/assets/img/Map.svg';
import Image from "next/image";

const Footer = () => {

    return (
        <footer className={styles.footerBackground}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerTopWrapper}>
                    <div className={styles.footerContacts}>
                        <h1 className={styles.contactsHeader}>Контакти</h1>
                        <p className={styles.contactsDepartment}>Кафедра ІТВС в НУ &quot;Львівська Політехніка&quot;</p>
                        <h2 className={styles.contactsEmail}>itvs.dept@lpnu.ua</h2>
                        <h4 className={styles.contactsPhone}>
                            <p className={styles.contactsPhoneTitle}>Телефон: </p> (032) 258-23-04
                        </h4>
                        <h4 className={styles.contactsPhone}>
                            <p className={styles.contactsPhoneTitle}>Факс: </p> (032) 258-26-63
                        </h4>
                        <div className={styles.footerSocialWrapper}>
                            <Image className={styles.footerSocialItem} src={Facebook} alt="facebook" />
                            <Image className={styles.footerSocialItem} src={Instagram2} alt="instagram" />
                            <Image className={styles.footerSocialItem} src={Google} alt="google" />
                        </div>
                    </div>
                    <div className={styles.footerLocation}>
                        <Image className={styles.locationMap} src={Map} alt="Map" />
                        <h3 className={styles.locationText}>
                            <Image className={styles.locationIcon} src={Location} alt="location" />
                            <Link target={"_blank"} href={"https://www.google.com.ua/maps/place/5-%D0%B9+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+%D0%9D%D0%A3+%E2%80%9C%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BF%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0%E2%80%9D/@49.8349796,24.0054995,17z/data=!3m1!4b1!4m6!3m5!1s0x473add8e0d340f09:0x699fc00c7adebdd8!8m2!3d49.8349796!4d24.0080744!16s%2Fg%2F11q1cym01_?hl=ru&entry=ttu"} className={styles.locationTextLink}>вул. С.Бандери, 28а, Львів-13, 79013,V
                            навчальний корпус, кім.514.</Link></h3>
                    </div>
                </div>
                <div className={styles.footerDivider}></div>
                <div className={styles.footerLinksWrapper}>
                    <a className={styles.footerLink} href="#">
                        <div className={styles.footerLinkTitle}>Дизайн сайту:
                            <div className={styles.footerLinkInfo}>
                                <Image src={Instagram} alt="instagram" /> @yurii_oleskiv
                            </div></div>
                    </a>
                    <a className={styles.footerLink} target={"_blank"} href="https://linktr.ee/t3nz0r">
                        <div className={styles.footerLinkTitle}>Розробка сайту:
                            <div className={styles.footerLinkInfo}>
                                <Image src={Instagram} alt="instagram" /> @t3nz0r
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;




