import React from 'react';
import Link from "next/link";
import Image from "next/image";
import arrow from "src/assets/icons/arrow.svg";
import styles from "src/styles/aboutUs.module.scss";

const GoHomeButton = () => {
    return (
        <Link href={"/"} className={styles.GoHomeButton}>
            <div className={styles.GoHomeButtonWrap}>
                <p>Перейти на головну</p>
                <Image src={arrow} alt={"arrow"}/>
            </div>
        </Link>
    );
};

export default GoHomeButton;
