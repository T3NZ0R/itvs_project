import React from 'react';
import Image from "next/image";

import styles from "@/styles/mainDirections.module.scss"
import Photo1 from "@/assets/img/directions/Photo block.jpg"
import Photo2 from "@/assets/img/directions/Photo block (2).jpg"
import Photo3 from "@/assets/img/directions/Photo block (1).jpg"
import Photo4 from "@/assets/img/directions/Photo block (3).jpg"

import Icon1 from "@/assets/icons/monitor.svg"
import Icon2 from "@/assets/icons/window_terminal.svg"
import Icon3 from "@/assets/icons/image_alt.svg"
import Icon4 from "@/assets/icons/printing.svg"




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
                            <Image className={styles.mainDirectionsBlockImage} src={Photo1} alt="UX/UI Дизайн"/>
                            <div className={styles.mainDirectionsBlockTitle}><Image src={Icon1} alt="monitor" /><p>UX/UI Дизайн</p></div>
                        </div>
                        <div className={styles.mainDirectionsBlockWrap}>
                            <Image className={styles.mainDirectionsBlockImage} src={Photo2} alt="Програмування"/>
                            <div className={styles.mainDirectionsBlockTitle}><Image src={Icon2} alt="window_terminal" /><p>Програмування</p></div>
                        </div>
                    </div>
                    <div  className={styles.mainDirectionsRightColumn}>
                        <div className={styles.mainDirectionsBlockWrap}>
                            <Image className={styles.mainDirectionsBlockImage} src={Photo3} alt="Графічний дизайн"/>
                            <div className={styles.mainDirectionsBlockTitle}><Image src={Icon3} alt="image_alt" /><p>Графічний дизайн</p></div>
                        </div>
                        <div className={styles.mainDirectionsBlockWrap}>
                            <Image className={styles.mainDirectionsBlockImage} src={Photo4} alt="Видавництво та поліграфія" />
                            <div className={styles.mainDirectionsBlockTitle}><Image src={Icon4} alt="printing" /><p>Видавництво та поліграфія</p></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MainDirections;
