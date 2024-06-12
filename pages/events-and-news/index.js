import React, {useEffect} from 'react';
import styles from "@/styles/eventsAndNews.module.scss";
import Image from "next/image";
import facebook from "src/assets/icons/facebook2.svg";
import instagram from "src/assets/icons/instagram.svg";
import NewsCard from "@/components/NewsCard/NewsCard";
import {useSelector} from "react-redux";
import {useNews} from "@/hooks/useNews";

const EventsAndNews = () => {

    const {news} = useSelector(state => state['newsReducer']);
    const [getNewsRequest] = useNews();

    useEffect(()=>{
        getNewsRequest();
    }, [getNewsRequest])

    return (
        <section className={styles.eventsAndNews}>
            <div className={styles.eventsAndNewsWrap}>
                <div className={styles.eventsAndNewsWrapMain}>
                    <h1 className={styles.eventsAndNewsWrapMainTitle}>події<br/>та новини </h1>
                    <p className={styles.eventsAndNewsWrapMainSubtitle}>
                        Якщо не хочете пропустити важливі та цікаві
                        новини кафедри. Слідкуйте за нами в соцмережах:
                    </p>
                    <div className={styles.eventsAndNewsWrapMainMedia}>
                        <a href="https://www.facebook.com/ITVSDepartment/" className={styles.eventsAndNewsWrapMainMediaFacebook}>
                            <Image src={facebook} alt={"facebook"}/>
                        </a>
                        <a href="https://www.instagram.com/itvs_lpnu/" className={styles.eventsAndNewsWrapMainMediaInstagram}>
                            <Image src={instagram} alt={"instagram"}/>
                        </a>
                    </div>
                </div>
                <div className={styles.eventsAndNewsWrapNews}>
                    {news.map(item => <NewsCard key={item.id} title={item.title} image={item.image} content={item.content} id={item.id} date={item.created_at}/>)}
                </div>

            </div>
        </section>
    );
};

export default EventsAndNews;
