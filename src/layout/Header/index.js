import React from 'react';
import styles from "../../styles/header.module.scss"

const Header = () => {
    return (
        <div className={styles.headerMain}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerLogo}></div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;
