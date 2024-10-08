import React from 'react';
import styles from "../../../../styles/card.module.scss"
import Image from "next/image";
import arrow from "@/assets/icons/arrowBlack.svg";

const Card = ({img, info, title, buttonLink}) => {
    return (
        <div className={styles.Card}>
            {img && <Image className={styles.CardImage} src={img} alt={title} width={"1000"} height={"1000"}/>}
            <h3 className={styles.CardTitle}>{title}</h3>
            <p className={styles.CardInfo}>{info}</p>
            {buttonLink &&
                <a className={styles.CardButton} href={buttonLink} target="_blank">
                <div className={styles.CardButtonWrap}>
                    <p>Перейти на сайт</p>
                    <Image src={arrow} alt={"arrow"}/>
                </div>
            </a>}
        </div>
    );
};

export default Card;
