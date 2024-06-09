import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {A11y, Navigation, EffectCards} from "swiper/modules";

import Img1 from "@/assets/img/swiperHero/Rectangle 387.png";
import Img2 from "@/assets/img/swiperHero/Rectangle 317.png";
import Img3 from "@/assets/img/swiperHero/Rectangle 383.png";
import Img4 from "@/assets/img/swiperHero/Rectangle 385.png";
import Img5 from "@/assets/img/swiperHero/Rectangle 386.png";
import Img6 from "@/assets/img/swiperHero/Rectangle 389.png";
import Img7 from "@/assets/img/swiperHero/Rectangle 390.png";

import styles from "@/styles/swiperHero.module.scss";
import 'swiper/css';
import 'swiper/css/effect-cards';

const SwiperHero = () => {
    return (
        <div className={styles.swiperHeroWrap}>
            <Swiper
                className={styles.swiperHero}
                modules={[Navigation, A11y, EffectCards]}
                spaceBetween={30}
                effect={"cards"}
                loop
                slidesPerView={1}
                navigation={{
                    nextEl: '.slideNext',
                    prevEl: '.slidePrev',
                }}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide >
                    <div className={styles.swiperHeroSlide}>
                        <Image src={Img1} alt={"wqqwqw"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.swiperHeroSlide}>
                        <Image src={Img2} alt={"wqqwqw"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.swiperHeroSlide}>
                        <Image src={Img3} alt={"wqqwqw"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.swiperHeroSlide}>
                        <Image src={Img4} alt={"wqqwqw"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.swiperHeroSlide}>
                        <Image src={Img5} alt={"wqqwqw"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.swiperHeroSlide}>
                        <Image src={Img6} alt={"wqqwqw"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className={styles.swiperHeroSlide}>
                        <Image src={Img7} alt={"wqqwqw"}/>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    );
};

export default SwiperHero;
