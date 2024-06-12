import React from 'react';

import styles from "../../styles/staff.module.scss"
import Link from "next/link";
import Image from "next/image";

import Arrow from '@/assets/icons/arrow.svg';
import Mail from '@/assets/icons/mail.svg';

const StaffCard = ({person}) => {

    const {name, degree, email, wikilink, photo} = person;

    return (
        <div className={styles.staffCardWrap}>
            <div>
                <div className={styles.staffCardImage}>
                    <Image className={styles.staffCardImageItem}  src={photo} alt={name} width={"1000"} height={"1000"} />
                </div>
                <h2 className={styles.staffCardName}>
                    {name}
                </h2>
                <h5 className={styles.staffCardDegree}>{degree.value}</h5>
                <div className={styles.staffCardDivider}></div>
                <Link className={styles.staffEmailLink} target={"_blank"} href={`mailto:${email}`} >
                    <div className={styles.staffCardEmail}>
                        <Image src={Mail} alt="mail" />
                        {email}
                    </div>
                </Link>
            </div>

            <Link className={styles.staffWikiLink} target={"_blank"} href={wikilink}>
                <div className={styles.staffCardWiki}>
                    Переглянути wiki.lnu <Image src={Arrow} alt="mail" />
                </div>
            </Link>
        </div>
    );
};

export default StaffCard;
