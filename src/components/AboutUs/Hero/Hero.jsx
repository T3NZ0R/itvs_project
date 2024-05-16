import React from 'react';
import Image from 'next/image';
import ArrowDownMD from '@/assets/icons/right-md.svg';
import styles from '@/styles/AboutUsStylesHero.module.scss';


const AboutUs = () => {
    return (
        <section className={styles.AboutUsHero}>
            <div className={styles.AboutUsHeroWrap}>
                <div className={styles.AboutUsHeroText}>
                    <h1 className={styles.AboutUsHeroTitle}>
                        КАФЕДРА <span className={styles.AboutUsHeroTitleText}>ІТВС</span>
                    </h1>
                    <p className={styles.AboutUsHeroSubTitle}>Інформаційні технології видавничої страви</p>

                </div>

                <div className={styles.ArrowBorder}>
                    <div className={styles.AboutUsHeroBGArrow}>
                        <Image src={ArrowDownMD} alt="ArrowDownMD" />
                    </div>
                </div>
            </div>
        </section>

    )
};
export default AboutUs;