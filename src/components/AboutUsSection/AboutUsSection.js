import React from 'react';
import styles from "../../styles/aboutUsSection.module.scss"
import Link from "next/link";

const AboutUsSection = () => {
    return (
        <section className={styles.aboutUs}>
            <div className={styles.aboutUsWrap}>
                <div className={styles.aboutUsInfo}>
                    <div className={styles.aboutUsLogo}>
                        <img src={"icons/logo.svg"} alt="logo"/>
                    </div>
                    <div className={styles.aboutUsStaff}><img className={styles.aboutUsStaffImg}
                                                              src={"img/staff/all.jpg"} alt=""/></div>
                    <div className={styles.aboutUsTextInfo}>
                        <h4 className={styles.aboutUsTitle}>Про нас</h4>
                        <p className={styles.aboutUsText}>У 1998 році на кафедрі “Автоматизовані системи <br/>
                            управління” (АСУ) розпочато підготовку бакалаврів <br/>
                            базового напрямку „Легка промисловість”, який в <br/>
                            2001 р. був перейменований на „Видавничо- <br/>
                            поліграфічну справу”...
                        </p>
                        <Link href={"#"} className={styles.aboutUsLink}><p>Читати далі</p> <img
                            src={"icons/small_long_right.svg"} alt=""/></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
