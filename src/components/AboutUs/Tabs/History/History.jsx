import React from 'react';
import styles from "@/styles/history.module.scss";
import TabMain from "@/components/AboutUs/Tabs/TabMain/TabMain";
import GoHomeButton from "@/components/AboutUs/Tabs/GoHomeButton/GoHomeButton";
import Card from "@/components/AboutUs/Tabs/Card/Card";
import {historyData} from "@/components/AboutUs/Tabs/History/history.data";

export const History = () => {
    return (
        <div className={styles.HistoryWrap}>
            <div className={styles.HistoryInfo}>
                <TabMain
                    info={
                        <>
                            Кафедра «Інформаційні технології видавничої справи» (ІТВС) Національного університету
                            «Львівська політехніка» має багаторічний досвід підготовки висококваліфікованих фахівців у
                            галузі видавничо-поліграфічної справи та інформаційних технологій. <b>Співпраця з провідними
                            IT-компаніями та залучення галузевих експертів</b> до освітнього процесу забезпечує нашим
                            студентам найсучасніші знання та навички, необхідні для успішної кар'єри. Нижче читайте про
                            історію кафедри, її досягнення та унікальні можливості, які вона пропонує своїм
                            студентам.</>}
                    title={"Історія кафедри ІТВС"}
                />
                {historyData.map((item, index) => <Card key={index} title={item.title}
                                                        info={item.info}/>)}
                <GoHomeButton/>
            </div>
            <div className={styles.HistoryContents}></div>
        </div>
    );
};

