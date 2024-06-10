import React from 'react';
import styles from "@/styles/internationalActivity.module.scss";
import TabMain from "@/components/AboutUs/Tabs/TabMain/TabMain";
import Card from "@/components/AboutUs/Tabs/Card/Card";

import GoHomeButton from "@/components/AboutUs/Tabs/GoHomeButton/GoHomeButton";
import {internationalActivityData} from "@/components/AboutUs/Tabs/InternationalActivity/internationalActivity.data";

export const InternationalActivity = () => {
    return (
        <div className={styles.InternationalActivityWrap}>
            <div className={styles.InternationalActivityInfo}>
                <TabMain
                    info={
                        <>Кафедра ІТВС активно інтегрує свої освітні та наукові можливості у міжнародну університетську
                            спільноту, забезпечуючи студентам безліч можливостей для всебічного розвитку та кар&apos;єрного
                            зростання. <b>Реалізація масштабних міжнародних проектів, участь у наукових конференціях і
                                воркшопах, а також створення спільних сертифікованих програм</b> роблять кафедру
                            ідеальним
                            вибором для амбітних молодих людей, які прагнуть здобути <b>конкурентоспроможну
                                освіту</b> та
                            <b>міжнародний досвід.</b></>}
                    title={"Міжнародна діяльність кафедри ІТВС"}
                />
                {
                    internationalActivityData.map((item, index) => <Card key={index} title={item.title}
                                                                         info={item.info} img={item.img}/>)
                }
                <GoHomeButton/>
            </div>
            <div className={styles.InternationalActivityContents}></div>
        </div>
    );
};

