import React from 'react';
import styles from "../../styles/mainDirections.module.scss"

const MainDirections = () => {
    return (
        <section className={styles.mainDirections}>
            <div className={styles.mainDirectionsWrap}>

                <h2 className={styles.mainDirectionsTitle}>
                    Основні <br/>
                    напрямки
                </h2>
                <div className={styles.mainDirectionsContentWrap}>

                    <div className={styles.mainDirectionsLeftColumn}>
                        <div className={styles.mainDirectionsBlockWrap}>
                            <img className={styles.mainDirectionsBlockImage} src={"img/directions/Photo block.jpg"} alt="UX/UI Дизайн"/>
                            <div className={styles.mainDirectionsBlockTitle}><img src={"icons/monitor.svg"} alt=""/><p>UX/UI Дизайн</p></div>
                        </div>
                        <div className={styles.mainDirectionsBlockWrap}>
                            <img className={styles.mainDirectionsBlockImage} src={"img/directions/Photo block (2).jpg"} alt="Програмування"/>
                            <div className={styles.mainDirectionsBlockTitle}><img src={"icons/window_terminal.svg"} alt=""/><p>Програмування</p></div>
                        </div>
                    </div>
                    <div  className={styles.mainDirectionsRightColumn}>
                        <div className={styles.mainDirectionsBlockWrap}>
                            <img className={styles.mainDirectionsBlockImage} src={"img/directions/Photo block (1).jpg"} alt="Графічний дизайн"/>
                            <div className={styles.mainDirectionsBlockTitle}><img src={"icons/image_alt.svg"} alt=""/><p>Графічний дизайн</p></div>
                        </div>
                        <div className={styles.mainDirectionsBlockWrap}>
                            <img className={styles.mainDirectionsBlockImage} src={"img/directions/Photo block (3).jpg"} alt="Видавництво та поліграфія"/>
                            <div className={styles.mainDirectionsBlockTitle}><img src={"icons/printing.svg"} alt=""/><p>Видавництво та поліграфія</p></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MainDirections;
