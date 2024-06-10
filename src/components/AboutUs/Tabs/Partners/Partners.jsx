import React from 'react';
import styles from "@/styles/partnersTab.module.scss";
import TabMain from "@/components/AboutUs/Tabs/TabMain/TabMain";
import GoHomeButton from "@/components/AboutUs/Tabs/GoHomeButton/GoHomeButton";
import Image from "next/image";
import {PartnersLogos} from "@/components/AboutUs/Partners/Partners";
import {partnersData} from "@/components/AboutUs/Tabs/Partners/partners.data";
import Card from "@/components/AboutUs/Tabs/Card/Card";

export const Partners = () => {
    return (
        <div className={styles.PartnersWrap}>
            <div className={styles.PartnersInfo}>
                <TabMain
                    info={
                        <>Кафедра «Інформаційні технології видавничої справи» (ІТВС) <b>активно співпрацює з провідними
                            компаніями</b>, такими як GlobalLogic, Embrox Solutions, SoftServe, Linkup Studio та Lviv IT
                            Cluster. Ці партнерства забезпечують студентам можливість отримати практичні знання та
                            досвід через <b>майстер-класи, курси, тренінги та стажування</b>, що сприяє їхній підготовці
                            до
                            сучасного ринку праці. </>}
                    title={"Партнери кафедри ІТВС"}
                    additionalSection={
                        <div className={styles.PartnersLogos}>
                            {PartnersLogos.map((logos) => (
                                <div className={styles.PartnersLogosItem} key={logos.id} style={{background: `${logos.color}`}}>
                                    <Image  src={logos.src} alt={logos.alt}/>
                                </div>))}
                        </div>
                    }
                />
                {partnersData.map((item, index)=> <Card key={index} title={item.title} info={item.info} img={item.img} buttonLink={item.buttonLink}/>)}
                <GoHomeButton/>
            </div>
            <div className={styles.PartnersContents}></div>
        </div>
    );
};
