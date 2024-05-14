import React from 'react'
import Image from 'next/image';
import softserveLogo from '@/assets/icons/softserve.png';
import embroxLogo from '@/assets/icons/embrox.png';
import globalLogicLogo from '@/assets/icons/globalLogic.png';
import styles from '@/styles/PartnersSection.module.scss';
import rightrow from '@/assets/icons/small_long_right.svg';
import Link from 'next/link';
const Partners = () => {
    const PartnersLogos = [{
        id: 1,
        src: softserveLogo,
        alt: 'softserveLogo',
        color: 'rgba(0, 0, 0, 1)',
    }, {
        id: 2,
        src: embroxLogo,
        alt: 'embroxLogo',
        color: 'linear-gradient(180deg, #F89502 15.29%, #FA8A01 86.47%)',
    }, {
        id: 3,
        src: globalLogicLogo,
        alt: 'globalLogicLogo',
        color: 'rgba(0, 0, 0, 1)',
    },
    ]
    return (
        <section className={styles.Partners}>
            <div className={styles.PartnersText}>
                <h1 className={styles.PartnersTitle}>Партнери кафедри</h1>
                <p className={styles.PartnersSubTitle}>Також нашу кафедру підтримують такі компанії, як Soft Serve, Embrox Solutions, Global Logic та інші.</p>
                <Link className={styles.PartnersLink} href='#'>Дізнатися більше <Image className={styles.PartnersIcon} src={rightrow} alt="ArrowRight" /></Link>
            </div>
            <div className={styles.PartnersLogos}>
                {PartnersLogos.map((logos) => (
                    <div className={styles.PartnersItems} key={logos.id} style={{ background: `${logos.color}` }} >
                        <Image src={logos.src} alt={logos.alt} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Partners