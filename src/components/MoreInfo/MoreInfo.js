import React from 'react';

import styles from "../../styles/moreInfo.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar, Keyboard, Mousewheel} from "swiper/modules";


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

const MoreInfo = () => {


    return (
        <section className={styles.moreInfo}>
            <div className={styles.moreInfoWrap}>
                <h2 className={styles.moreInfoTitle}>
                    Дізнайтеся <br/>
                    більше
                </h2>

                <Swiper
                    className={styles.moreInfoSlider}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel]}
                    spaceBetween={30}
                    loop
                    slidesPerView={1}
                    mousewheel={true}
                    keyboard={true}
                    navigation
                    breakpoints={{
                        270: {
                            slidesPerView: 1.2,
                            spaceBetween: 15
                        },

                        640: {
                            slidesPerView: 1.1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 1.5,
                        },
                        950: {
                            slidesPerView: 1.8,
                        },
                        1200: {
                            slidesPerView: 2.5,
                            spaceBetween: 30
                        }
                    }}
                    scrollbar={{draggable: true}}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide className={styles.moreInfoSlideWrap}>
                        <div className={styles.moreInfoSlide}>
                            <img className={styles.moreInfoSlideImage} src={"img/moreInfo/Rectangle 364.jpg"} alt=""/>
                            <div className={styles.moreInfoSliderArrowIconWrap}><img
                                className={styles.moreInfoSliderArrowIcon} src={"icons/arrow.svg"} alt=""/></div>
                            <div className={styles.moreInfoSlideTextInfo}>
                                <div className={styles.moreInfoSlideTitle}>
                                    Навчальний <br/>
                                    процес
                                </div>
                                <div className={styles.moreInfoSlideDescription}>
                                    У 1998 році на кафедрі “Автоматизовані системи <br/>
                                    управління” (АСУ) розпочато підготовку
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.moreInfoSlideWrap}>
                        <div className={styles.moreInfoSlide}>
                            <img className={styles.moreInfoSlideImage} src={"img/moreInfo/Rectangle 364 (1).jpg"}
                                 alt=""/>
                            <div className={styles.moreInfoSliderArrowIconWrap}><img
                                className={styles.moreInfoSliderArrowIcon} src={"icons/arrow.svg"} alt=""/></div>
                            <div className={styles.moreInfoSlideTextInfo}>
                                <div className={styles.moreInfoSlideTitle}>
                                    Компанії <br/> Партнери кафедри
                                </div>
                                <div className={styles.moreInfoSlideDescription}>
                                    У 1998 році на кафедрі “Автоматизовані системи <br/>
                                    управління” (АСУ) розпочато підготовку
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.moreInfoSlideWrap}>
                        <div className={styles.moreInfoSlide}>
                            <img className={styles.moreInfoSlideImage} src={"img/moreInfo/Rectangle 364 (2).jpg"}
                                 alt=""/>
                            <div className={styles.moreInfoSliderArrowIconWrap}><img
                                className={styles.moreInfoSliderArrowIcon} src={"icons/arrow.svg"} alt=""/></div>
                            <div className={styles.moreInfoSlideTextInfo}>
                                <div className={styles.moreInfoSlideTitle}>
                                    Студентська <br/>
                                    наука
                                </div>
                                <div className={styles.moreInfoSlideDescription}>
                                    У 1998 році на кафедрі “Автоматизовані системи <br/>
                                    управління” (АСУ) розпочато підготовку
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.moreInfoSlideWrap}>
                        <div className={styles.moreInfoSlide}>
                            <img className={styles.moreInfoSlideImage} src={"img/moreInfo/Rectangle 364 (3).jpg"}
                                 alt=""/>
                            <div className={styles.moreInfoSliderArrowIconWrap}><img
                                className={styles.moreInfoSliderArrowIcon} src={"icons/arrow.svg"} alt=""/></div>
                            <div className={styles.moreInfoSlideTextInfo}>
                                <div className={styles.moreInfoSlideTitle}>
                                    Міжнародна <br/> діяльність
                                </div>
                                <div className={styles.moreInfoSlideDescription}>
                                    У 1998 році на кафедрі “Автоматизовані системи <br/>
                                    управління” (АСУ) розпочато підготовку
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.moreInfoSlideWrap}>
                        <div className={styles.moreInfoSlide}>
                            <img className={styles.moreInfoSlideImage} src={"img/moreInfo/Rectangle 364 (4).jpg"}
                                 alt=""/>
                            <div className={styles.moreInfoSliderArrowIconWrap}><img
                                className={styles.moreInfoSliderArrowIcon} src={"icons/arrow.svg"} alt=""/></div>
                            <div className={styles.moreInfoSlideTextInfo}>
                                <div className={styles.moreInfoSlideTitle}>
                                    Наукова <br/> діяльність
                                </div>
                                <div className={styles.moreInfoSlideDescription}>
                                    У 1998 році на кафедрі “Автоматизовані системи <br/>
                                    управління” (АСУ) розпочато підготовку
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>


            </div>
        </section>
    );
};

export default MoreInfo;
