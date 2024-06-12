import React from 'react';
import styles from '../../../../styles/tabMain.module.scss'

const TabMain = ({title, info, additionalSection}) => {
    return (
        <div className={styles.TabMainInfo}>
            <h2 className={ styles.TabMainInfoTitle}>{title}</h2>
            {additionalSection && additionalSection}
            <p className={styles.TabMainInfoSubtitle}>
                {info}
            </p>
        </div>
    );
};

export default TabMain;
