import React from 'react';
import styles from "@/styles/educationLevels.module.scss";
import TabMain from "@/components/AboutUs/Tabs/TabMain/TabMain";
import LinkButton from "@/components/LinkButton/LinkButton";
import {educationLevels} from "@/components/AboutUs/Tabs/EducationLevels/educationLevels.data";
import Card from "@/components/AboutUs/Tabs/Card/Card";
import {Contents} from "@/components/AboutUs/Tabs";

export const EducationLevels = () => {
    return (
        <div className={styles.EducationLevelsWrap}>
            <div className={styles.EducationLevelsInfo}>
                <TabMain
                    info={
                        <><b>Бакалаврська та магістерська</b> програми на кафедрі «Інформаційні технології видавничої
                            справи»
                            (ІТВС) пропонують студентам широкий спектр знань і навичок, необхідних для успішної кар&apos;єри
                            у видавничо-поліграфічній галузі та комп&apos;ютерному дизайні. <br/>
                            <br/>
                            Бакалаврат зосереджений на практичних навичках, креативному мисленні, бізнесі та управлінні,
                            мультимедійних технологіях і дизайні, тоді як магістратура поглиблює знання у теоретичних
                            аспектах, аналітиці, інтеграції знань і сучасних IT-технологіях, готуючи студентів до
                            викликів сучасного ринку праці.
                        </>}
                    title={"Рівні навчання на кафедрі ІТВС"}
                />
                {educationLevels.map((item, index) => <Card key={index} title={item.title} info={item.info}/>)}
                <LinkButton title={"Перейти на головну"} link={"/"}/>
            </div>
            <div className={styles.EducationLevelsContents}>
                <Contents items={educationLevels}/>
            </div>
        </div>
    );
};
