import React from 'react';
import {educationData} from "@/components/AboutUs/Tabs/Education/education.data";
import styles from '../../../../styles/education.module.scss'
import LinkButton from "@/components/LinkButton/LinkButton";
import TabMain from "@/components/AboutUs/Tabs/TabMain/TabMain";
import Card from "@/components/AboutUs/Tabs/Card/Card";
import {Contents} from "@/components/AboutUs/Tabs";


export const Education = () => {
    return (
        <div className={styles.EducationWrap}>
            <div className={styles.EducationInfo}>
                <TabMain
                    info={
                        <>Кафедра здійснює підготовка фахівців за спеціальністю 186 «Видавництво та поліграфія» <b>(UI/UX
                            Design)</b> та магістрів за спеціальністю 186 «Видавництво та поліграфія» із спеціалізацією <b>«Комп&apos;ютерні
                                технології та системи видавничо-поліграфічних виробництв».</b></>}
                    title={"Навчання на спеціальності"}
                />
                {educationData.map((item, index) => <Card key={index} img={item.img} title={item.title}
                                                          info={item.info}/>)}
                <LinkButton title={"Перейти на головну"} link={"/"}/>
            </div>
            <div className={styles.EducationContents}>
                <Contents items={educationData}/>
            </div>
        </div>
    );
};

