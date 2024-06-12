import React from 'react';
import Link from "next/link";
import Image from "next/image";
import arrow from "@/assets/icons/arrow.svg";
import styles from "@/styles/aboutUs.module.scss";

const LinkButton = ({link, title}) => {
    return (
        <Link href={link} className={styles.GoHomeButton}>
            <div className={styles.GoHomeButtonWrap}>
                <p>{title}</p>
                <Image src={arrow} alt={"arrow"}/>
            </div>
        </Link>
    );
};

export default LinkButton;
