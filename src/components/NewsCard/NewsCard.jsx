import React from 'react';
import styles from "src/styles/newsCard.module.scss";
import Image from "next/image";
import LinkButton from "@/components/LinkButton/LinkButton";

const NewsCard = ({image, date, title, content, id}) => {

    function reformatDate(dateString) {
        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }

    return (
        <div className={styles.NewsCard}>
            <div className={styles.NewsCardImage}>
                <Image src={image} alt={title} width={"1000"} height={"1000"}/>
            </div>
            <div className={styles.NewsCardInfo}>
                {date && <p className={styles.NewsCardInfoDate}>{reformatDate(date)}</p>}
                <h3 className={styles.NewsCardInfoTitle}>{title}</h3>
                <p className={styles.NewsCardInfoContent}>
                    {content}
                </p>
                <div className={styles.NewsCardInfoDivider}></div>
                <LinkButton title={"Читати далі"} link={`events-and-news/${id}`}/>
            </div>

        </div>
    );
};

export default NewsCard;
