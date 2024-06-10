import React from 'react';
import styles from '../../../../styles/tabMain.module.scss'
import localFont from "next/font/local";
const myFont = localFont({src: '../../../../../public/fonts/KyivTypeSans-Black-.otf'})

const TabMain = ({title, info, additionalSection}) => {
    return (
        <div className={styles.TabMainInfo}>
            <h2 className={`${myFont.className} ${styles.TabMainInfoTitle}`}>{title}</h2>
            {additionalSection && additionalSection}
            <p className={styles.TabMainInfoSubtitle}>
                {info}
            </p>
        </div>
    );
};

export default TabMain;
