import React, {useState} from 'react';
import Image from "next/image";

import styles from '@/styles/homeHero.module.scss'
import Location from '@/assets/icons/location.svg';
import SwiperHero from "@/components/SwiperHero/SwiperHero";
import Link from "next/link";
import Arrow from "@/assets/icons/small_long_right.svg";
import ArrowNavigation from "@/assets/icons/ArrowNavigation.svg";


const HomeHero = () => {

    const [active, setActive] = useState(1);

    const bullets = Array.from({length: 7}, (_, index) => {
        const id = index + 1;
        return {
            id: id,
            styles: `${id === active ? styles.homeHeroHistoryNavigationsBulletActive : styles.homeHeroHistoryNavigationsBullet}`
        };
    });


    return (
        <>
            <section className={styles.homeHero}>
                <div className={styles.homeHeroWrap}>
                    <div className={styles.homeHeroSubtitle}>
                        <div className={styles.homeHeroSubtitleInstituteWrap}>
                            <div className={styles.homeHeroSubtitleInstitute}>Інститут ІКНІ</div>
                        </div>
                        <div className={styles.homeHeroSubtitleLocation}><span><Image src={Location} height={28}
                                                                                      alt="location"
                                                                                      width="auto"/></span>5-й корпус НУ
                            “Львівська політехніка”
                        </div>
                    </div>
                    <h1 className={styles.homeHeroTitle}>
                        Інформаційні технології видавничої справи
                        <span className={styles.titleNumber}> #186</span>
                    </h1>
                </div>
                <SwiperHero/>
            </section>

            <div className={styles.homeHeroHistoryWrap}>
                <div className={styles.homeHeroHistory}>
                    <div className={styles.homeHeroHistoryStartSections}>

                        <h1 className={styles.homeHeroHistoryTitle}>Новини<br/>
                            кафедри</h1>
                        <div className={styles.homeHeroHistoryInfo}>
                            <p className={styles.homeHeroHistoryInfoText}>
                                У 1998 році на кафедрі “Автоматизовані системи <br/>
                                управління” (АСУ) розпочато підготовку бакалаврів<br/>
                                базового напрямку „Легка промисловість”, який<br/>
                                в 2001 р. був перейменований на „Видавничо-<br/>
                                поліграфічну справу”...
                            </p>
                            <Link href={"#"} className={styles.homeHeroHistoryInfoLink}><p>Читати далі</p> <Image
                                src={Arrow} alt=""/></Link>
                        </div>
                    </div>
                    <div className={styles.homeHeroHistoryNavigations}>
                        <div className={`${styles.homeHeroHistoryNavigationsArrow} slidePrev`} onClick={() => {
                            if (active > 1) {
                                setActive(prev => prev - 1)
                            }
                        }}>
                            <Image src={ArrowNavigation} alt={"arrow"}/>
                        </div>
                        <div className={styles.homeHeroHistoryNavigationsBulletsWrap}>
                            {bullets.map(item => <div key={item.id} className={item.styles}></div>)}
                        </div>
                        <div className={`${styles.homeHeroHistoryNavigationsArrow} slideNext`}
                             onClick={() => {
                                 if (active !== 7) {
                                     setActive(prev => prev + 1)
                                 }else {
                                     setActive(1)
                                 }
                             }}>
                            <Image src={ArrowNavigation} alt={"arrow"} style={{transform: "rotate(180deg)"}}/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeHero;
