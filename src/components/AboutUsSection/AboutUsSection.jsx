import React from 'react';
import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/aboutUsSection.module.scss"
import Logo from '@/assets/icons/logo.svg';
import Arrow from '@/assets/icons/small_long_right.svg';
import Staff from '@/assets/img/staff/all.jpg';

const AboutUsSection = () => {
    return (
        <section className={styles.aboutUs}>
            <div className={styles.aboutUsWrap}>
                <div className={styles.aboutUsInfo}>
                    <div className={styles.aboutUsLogo}>
                        <Image src={Logo} alt="logo" />
                    </div>
                    <div className={styles.aboutUsStaff}><Image className={styles.aboutUsStaffImg}
                                                              src={Staff} alt="" /></div>
                    <div className={styles.aboutUsTextInfo}>
                        <h1 className={styles.aboutUsTitle}>Про нас</h1>
                        <p className={styles.aboutUsText}>У 1998 році на кафедрі “Автоматизовані системи <br/>
                            управління” (АСУ) розпочато підготовку бакалаврів <br/>
                            базового напрямку „Легка промисловість”, який в <br/>
                            2001 р. був перейменований на „Видавничо- <br/>
                            поліграфічну справу”...
                        </p>
                        <Link href={"/about-us?tab=education"} className={styles.aboutUsLink}><p>Читати далі</p> <Image
                            src={Arrow} alt="" /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
