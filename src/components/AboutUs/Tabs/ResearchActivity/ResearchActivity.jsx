import React from 'react';
import styles from "@/styles/researchActivity.module.scss";
import TabMain from "@/components/AboutUs/Tabs/TabMain/TabMain";
import LinkButton from "@/components/LinkButton/LinkButton";
import Card from "@/components/AboutUs/Tabs/Card/Card";
import {researchActivityData} from "@/components/AboutUs/Tabs/ResearchActivity/researchActivity.data";
import {Contents} from "@/components/AboutUs/Tabs";

export const ResearchActivity = () => {
    return (
        <div className={styles.ResearchActivityWrap}>
            <div className={styles.ResearchActivityInfo}>
                <TabMain
                    info={
                        <>Міжнародну та наукову діяльність кафедри «Інформаційні технології видавничої справи»
                            спрямовано на інтеграцію освітніх послуг та наукового потенціалу у міжнародну
                            університетську спільноту. Це забезпечує отримання додаткових можливостей для всебічного
                            розвитку студентів і викладачів.
                        </>}
                    title={"Наукова діяльність кафедри ІТВС"}
                />
                {
                    researchActivityData.map((item, index) => <Card key={index} title={item.title}
                                                                         info={item.info} img={item.img}/>)
                }
                <LinkButton title={"Перейти на головну"} link={"/"}/>
            </div>
            <div className={styles.ResearchActivityContents}>
                <Contents items={researchActivityData}/>
            </div>
        </div>
    );
};


