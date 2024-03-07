import React from 'react';

import MainDirections from "../src/components/MainDirections/MainDirections";
import MainTools from "../src/components/MainTools/MainTools";
import MoreInfo from "../src/components/MoreInfo/MoreInfo";

import styles from '../src/styles/home.module.scss'
import AboutUsSection from "../src/components/AboutUsSection/AboutUsSection";
import HomeHero from "../src/components/HomeHero/HomeHero";

const Home = () => {
    return (
        <div className={styles.homeWrap}>
            <HomeHero/>
            <AboutUsSection/>
            <MoreInfo/>
            <MainDirections/>
            <MainTools/>
        </div>
    );
};

export default Home;
