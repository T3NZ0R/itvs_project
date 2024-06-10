import React from 'react';
import styles from "src/styles/badge.module.scss";

const Badge = ({year, title, info}) => {
    return (
        <div className={styles.BadgeWrap}>
            <div className={styles.BadgeHeader}>
                <div className={styles.BadgeYear}>{year}</div>
                <h3 className={styles.BadgeTitle}>{title}</h3>
            </div>
            <div className={styles.BadgeBody}>
                {info}
            </div>
        </div>
    );
};

export default Badge;
