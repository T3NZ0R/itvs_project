import React from 'react';
import Image from "next/image";

import styles from '@/styles/homeHero.module.scss'
import Location from '@/assets/icons/location.svg';


const HomeHero = () => {
    return (
        <section className={styles.homeHero}>
            <div className={styles.homeHeroWrap}>
                <div className={styles.homeHeroSubtitle}>
                    <div className={styles.homeHeroSubtitleInstituteWrap}><div className={styles.homeHeroSubtitleInstitute}>Інститут ІКНІ</div></div>
                    <div className={styles.homeHeroSubtitleLocation}><span><Image src={Location} height={28} alt="location" width="auto" /></span>5-й корпус НУ “Львівська політехніка”</div>
                </div>
                <h1 className={styles.homeHeroTitle}>
                    Інформаційні технології видавничої справи
                    <span className={styles.titleNumber}> #186</span>
                </h1>
            </div>

        </section>
    );
};

export default HomeHero;
