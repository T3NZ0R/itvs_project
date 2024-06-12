import React, {useEffect, useState} from 'react';
import styles from "@/styles/eventsAndNews.module.scss";
import {useSelector} from "react-redux";
import {useNews} from "@/hooks/useNews";
import {useRouter} from 'next/router';
import Card from "@/components/AboutUs/Tabs/Card/Card";
import LinkButton from "@/components/LinkButton/LinkButton";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

import NewsCard from "@/components/NewsCard/NewsCard";


const Months = {
    "01": "Січня",
    "02": "Лютого",
    "03": "Березня",
    "04": "Квітня",
    "05": "Травня",
    "06": "Червня",
    "07": "Липня",
    "08": "Серпня",
    "09": "Вересня",
    "10": "Жовтня",
    "11": "Листопада",
    "12": "Грудня",
};

const Index = () => {
    const router = useRouter();
    const {id} = router.query;
    const {news, simpleNews} = useSelector(state => state['newsReducer']);
    const [formattedDate, setFormattedDate] = useState();

    function reformatDate(dateString) {


        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = date.getFullYear();

        return {
            day: day,
            month: month,
            year: year
        }
    }

    useEffect(() => {
        if (simpleNews?.created_at) {
            setFormattedDate(reformatDate(simpleNews.created_at));
        }
    }, [simpleNews])

    const [getNewsRequest, getSimpleNewsRequest] = useNews(Number(id));

    useEffect(() => {
        if (!news.length) {
            getNewsRequest()
        }
        getSimpleNewsRequest();
    }, [id, getNewsRequest, getSimpleNewsRequest, news.length])


    return (
        <section className={styles.SimpleEventsAndNews}>
            <div className={styles.SimpleEventsAndNewsMainWrap}>
                <div className={styles.SimpleEventsAndNewsTitleSection}>
                    <h1 className={styles.SimpleEventsAndNewsTitleSectionTitle}>{simpleNews?.title}</h1>
                    <h2><span
                        className={styles.SimpleEventsAndNewsTitleSectionDateDay}>{`${formattedDate?.day} ${Months[formattedDate?.month]}`}</span>
                        <span
                            className={styles.SimpleEventsAndNewsTitleSectionDateYear}>{`/ ${formattedDate?.year}`}</span>
                    </h2>
                </div>
                <div className={styles.SimpleEventsAndNewsWrap}>
                    <div className={styles.SimpleEventsAndNewsWrapMain}>
                        <Card title={simpleNews?.subtitle} img={simpleNews?.image} info={<>{simpleNews?.content}</>}/>
                        <LinkButton link={"events-and-news"} title={"Повернутися назад"}/>
                    </div>
                    <div className={styles.SimpleEventsAndNewsWrapEmpty}></div>
                </div>
                <div className={styles.SimpleEventsAndNewsSwiper}>
                    <h2 className={styles.SimpleEventsAndNewsSwiperTitle}>
                        Інші події та новини
                    </h2>
                    <Swiper
                        className={styles.SimpleEventsAndNewsSwiperComponent}
                        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel]}
                        spaceBetween={15}
                        loop
                        slidesPerView={1}
                        mousewheel={true}
                        keyboard={true}
                        navigation
                        breakpoints={{
                            270: {
                                slidesPerView: 1,
                                spaceBetween: 15
                            },

                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            950: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3.5,
                                spaceBetween: 15
                            }
                        }}
                        scrollbar={{draggable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                    >

                        {news.slice(10).map(item =>
                            <SwiperSlide key={item.id} className={styles.SimpleEventsAndNewsSwiperItem}>
                                <div className={styles.SimpleEventsAndNewsSwiperItemWrap}>
                                    <NewsCard
                                        title={item.title}
                                        image={item.image}
                                        content={item.content}
                                        id={item.id}
                                        date={item.created_at}/>
                                </div>
                            </SwiperSlide>)}

                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Index;
