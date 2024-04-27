import React from 'react';

import styles from "../../styles/moreInfo.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar} from "swiper/modules";


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import Image from "next/image";
import Arrow from "@/assets/icons/arrow.svg"

import Img1 from "@/assets/img/moreInfo/Rectangle 364.jpg";
import Img2 from "@/assets/img/moreInfo/Rectangle 364 (1).jpg";
import Img3 from "@/assets/img/moreInfo/Rectangle 364 (2).jpg";
import Img4 from "@/assets/img/moreInfo/Rectangle 364 (3).jpg";
import Img5 from "@/assets/img/moreInfo/Rectangle 364 (4).jpg";

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
                            <Image className={styles.moreInfoSlideImage} src={Img1} alt="" />
                            <div className={styles.moreInfoSliderArrowIconWrap}>
                                <Image
                                    className={styles.moreInfoSliderArrowIcon} src={Arrow} alt="arrow" />
                            </div>
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
                            <Image className={styles.moreInfoSlideImage} src={Img2}
                                   alt=""/>
                            <div className={styles.moreInfoSliderArrowIconWrap}><Image
                                className={styles.moreInfoSliderArrowIcon} src={Arrow} alt="arrow" /></div>
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
                            <Image className={styles.moreInfoSlideImage} src={Img3}
                                   alt=""/>
                            <div className={styles.moreInfoSliderArrowIconWrap}><Image
                                className={styles.moreInfoSliderArrowIcon} src={Arrow} alt="arrow" /></div>
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
                            <Image className={styles.moreInfoSlideImage} src={Img4}
                                   alt="" />
                            <div className={styles.moreInfoSliderArrowIconWrap}><Image
                                className={styles.moreInfoSliderArrowIcon} src={Arrow} alt="arrow" /></div>
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
                            <Image className={styles.moreInfoSlideImage} src={Img5}
                                   alt=""/>
                            <div className={styles.moreInfoSliderArrowIconWrap}><Image
                                className={styles.moreInfoSliderArrowIcon} src={Arrow} alt="arrow" /></div>
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
