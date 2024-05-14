import React from 'react';
import Image from 'next/image';
import ArrowDownMD from '@/assets/icons/right-md.svg';
import styles from '@/styles/AboutUsStylesHero.module.scss';


const AboutUs = () => {
    return (
        <section className={styles.Hero}>
            <div className={styles.HeroWrap}>
                <div className={styles.HeroText}>
                    <h1 className={styles.HeroTitle}>
                        КАФЕДРА <span className={styles.HeroTitleText}>ІТВС</span>
                    </h1>
                    <p className={styles.HeroSubTitle}>Інформаційні технології видавничої страви</p>

                </div>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            <div className={styles.HeroBGArrow}>
                                <Image src={ArrowDownMD} alt="ArrowDownMD" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
};
export default AboutUs;