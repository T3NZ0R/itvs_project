import React from 'react';

import styles from "../../styles/staff.module.scss"
import Link from "next/link";
import Image from "next/image";

import Arrow from '@/assets/icons/arrow.svg';
import Mail from '@/assets/icons/mail.svg';

const StaffCard = ({person}) => {

    const {name, degree, email, wikiLink, photo} = person;

    return (
        <div className={styles.staffCardWrap}>
            <div>
                <Image className={styles.staffCardImage} src={photo} alt={name} />
                <h2 className={styles.staffCardName}>
                    {name}
                </h2>
                <h5 className={styles.staffCardDegree}>{degree}</h5>
                <div className={styles.staffCardDivider}></div>
                <Link className={styles.staffEmailLink} target={"_blank"} href={`mailto:${email}`} >
                    <div className={styles.staffCardEmail}>
                        <Image src={Mail} alt="mail" />
                        {email}
                    </div>
                </Link>
            </div>

            <Link className={styles.staffWikiLink} target={"_blank"} href={wikiLink}>
                <div className={styles.staffCardWiki}>
                    Переглянути wiki.lnu <Image src={Arrow} alt="mail" />
                </div>
            </Link>
        </div>
    );
};

export default StaffCard;
