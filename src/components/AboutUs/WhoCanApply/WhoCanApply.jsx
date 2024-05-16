import React from 'react';
import Image from 'next/image';
import styles from '@/styles/WhoCanApply.module.scss';
import group from '@/assets/img/Group481758.png';


const WhoCanApply = () => {
    return (
        <section className={styles.WhoCanApply}>
            <div className={styles.WhoCanApplyWrap}>
                <div className={styles.TopItem}>
                    <div className={styles.VideoContent}>
                        <iframe className={styles.Video}
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div>
                    <div className={styles.TextContent}>
                        <p className={styles.Right}>Випускників <span className={styles.RightNumber}>1500+</span></p>
                        <p className={styles.Right}>Рік заснування кафедри<span className={styles.RightNumber}>1999 рік</span></p>
                    </div>
                </div>
                <div className={styles.CardItem}>
                    <div className={styles.CardText}>
                        <h1 className={styles.CardTitle}>Кому підійде<br /> кафердра ІТВС</h1>
                        <p className={styles.CardSubTitle}>
                            У 1998 році на кафедрі “Автоматизовані
                            системи управління” (АСУ) розпочато
                            підготовку бакалаврів базового напрямку
                            „Легка промисловість”, який  в 2001 р. був
                            перейменований на „Видавничо-
                            поліграфічну справу”
                        </p>
                        <p className={styles.CardSubTitle}>
                            Також нашу кафедру підтримують такі
                            компанії, як Soft Serve, Embrox Solutions,
                            Global Logic та інші.
                        </p>
                    </div>
                    <div className={styles.CardIMG1}>
                        <Image className={styles.CardIMG} src={group} alt='group' />
                    </div>
                </div>
            </div>
        </section>

    )
};
export default WhoCanApply;
