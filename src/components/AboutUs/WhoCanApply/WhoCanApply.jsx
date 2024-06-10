import React from 'react';
import Image from 'next/image';
import styles from '@/styles/canApply.module.scss';
import group from '@/assets/img/Group481758.png';


const WhoCanApply = () => {
    return (
        <section className={styles.WhoCanApply}>
            <div className={styles.WhoCanApplyWrap}>
                <div className={styles.WhoCanApplyText}>
                    <h1 className={styles.WhoCanApplyTextTitle}>Кому підійде<br/> кафердра ІТВС</h1>
                    <p className={styles.WhoCanApplyTextSubtitle}>
                        У 1998 році на кафедрі “Автоматизовані
                        системи управління” (АСУ) розпочато
                        підготовку бакалаврів базового напрямку
                        „Легка промисловість”, який в 2001 р. був
                        перейменований на „Видавничо-
                        поліграфічну справу”
                        <br/>
                        <br/>
                        Також нашу кафедру підтримують такі
                        компанії, як Soft Serve, Embrox Solutions,
                        Global Logic та інші.
                    </p>
                </div>
                <div className={styles.WhoCanApplyImage}>
                    <Image src={group} alt='group'/>
                </div>
            </div>
        </section>

    )
};
export default WhoCanApply;
