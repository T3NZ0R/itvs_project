import React from 'react';
import styles from "src/styles/contents.module.scss"

export const Contents = ({items}) => {
    return (
        <div className={styles.Contents}>
            <h2 className={styles.ContentsTitle}>
                Зміст
            </h2>
            <div className={styles.ContentsWrap}>
                {items.map((item, index) =>  <div key={index} className={styles.ContentsItem}>{`0${index+1}. ${item.title}`}</div>)}
            </div>

        </div>
    );
};
