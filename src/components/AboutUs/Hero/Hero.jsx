import React from 'react';
import Image from 'next/image';
import ArrowDownMD from '@/assets/icons/right-md.svg';
import styles from '@/styles/aboutUs.module.scss';


const Hero = () => {
    return (
        <section className={styles.AboutUsHero}>
            <div className={styles.AboutUsHeroWrap}>
                <div className={styles.AboutUsHeroText}>
                    <h1 className={styles.AboutUsHeroTextTitle}>
                        КАФЕДРА <span className={styles.AboutUsHeroTextTitleColored}>ІТВС</span>
                    </h1>
                    <p className={styles.AboutUsHeroTextSubtitle}>Інформаційні технології видавничої страви</p>

                </div>
                <div className={styles.AboutUsHeroArrowWrap}>
                    <div className={styles.AboutUsHeroArrowBorder}>
                        <div className={styles.AboutUsHeroArrowBorder}>
                            <div className={styles.AboutUsHeroArrowBorder}>
                                <a className={styles.AboutUsHeroArrow} href={"#navBar"}>
                                    <Image src={ArrowDownMD} alt="ArrowDownMD"/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.AboutUsHeroVideoWrap}>
                <div className={styles.AboutUsHeroVideoWrapper}>
                    <div className={styles.AboutUsHeroVideoContent}>
                        <iframe className={styles.AboutUsHeroVideoContentFrame}
                                src="https://www.youtube.com/embed/WmllAlOu4sU?autoplay=1&controls=1&mute=1&t=17">
                        </iframe>
                    </div>

                    <div className={styles.AboutUsHeroVideoText}>
                        <p className={styles.AboutUsHeroVideoTextItem}>Випускників <span className={styles.AboutUsHeroVideoTextItemNumber}>1500+</span></p>
                        <p className={`${styles.AboutUsHeroVideoTextItem} ${styles.BorderBottom}`}>Рік заснування кафедри<span className={styles.AboutUsHeroVideoTextItemNumber}>1999 рік</span></p>
                    </div>
                </div>
            </div>
        </section>

    )
};
export default Hero;
