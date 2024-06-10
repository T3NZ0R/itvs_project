import React from 'react'
import Image from 'next/image';
import softserveLogo from '@/assets/icons/softserve.png';
import embroxLogo from '@/assets/icons/embrox.png';
import globalLogicLogo from '@/assets/icons/globalLogic.png';
import linkUpLogo from '@/assets/icons/linkUp.png';
import ITClusterLogo from '@/assets/icons/ITCluster.png';
import UIUXLogo from '@/assets/icons/UIUX.png';

import styles from '@/styles/partners.module.scss';
import rightrow from '@/assets/icons/small_long_right.svg';
import Link from 'next/link';


export const PartnersLogos = [
    {
        id: 1,
        src: softserveLogo,
        alt: 'softserveLogo',
        color: 'rgba(0, 0, 0, 1)',
    },
    {
        id: 2,
        src: embroxLogo,
        alt: 'embroxLogo',
        color: 'linear-gradient(180deg, #F89502 15.29%, #FA8A01 86.47%)',
    },
    {
        id: 3,
        src: globalLogicLogo,
        alt: 'globalLogicLogo',
        color: 'rgba(0, 0, 0, 1)',
    },
    {
        id: 4,
        src: linkUpLogo,
        alt: 'softserveLogo',
        color: 'rgba(0, 0, 0, 1)',
    },
    {
        id: 5,
        src: ITClusterLogo,
        alt: 'embroxLogo',
        color: '#1183C7',
    },
    {
        id: 6,
        src: UIUXLogo,
        alt: 'globalLogicLogo',
        color: 'rgb(255, 255, 255)',
    }
]

const Partners = () => {



    return (
        <section className={styles.Partners}>
            <div className={styles.PartnersWrap}>
                <div className={styles.PartnersText}>
                    <h1 className={styles.PartnersTextTitle}>Партнери кафедри</h1>
                    <p className={styles.PartnersTextSubtitle}>Також нашу кафедру підтримують такі компанії, як Soft Serve,
                        Embrox Solutions, Global Logic та інші.</p>
                    <Link className={styles.PartnersTextLink} href='#'>Дізнатися більше <Image
                        className={styles.PartnersTextLinkIcon} src={rightrow} alt="ArrowRight"/></Link>
                </div>
                <div className={styles.PartnersLogos}>
                    {PartnersLogos.map((logos) => (
                        <div className={styles.PartnersLogosItem} key={logos.id} style={{background: `${logos.color}`}}>
                            <Image  src={logos.src} alt={logos.alt}/>
                        </div>))}
                </div>
            </div>
        </section>
    )
}

export default Partners
