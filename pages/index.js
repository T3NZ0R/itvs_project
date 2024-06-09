import React from 'react';

import MainDirections from "@/components/MainDirections/MainDirections";
import MainTools from "@/components/MainTools/MainTools";
import MoreInfo from "@/components/MoreInfo/MoreInfo";

import styles from '../src/styles/home.module.scss'
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import HomeHero from "@/components/HomeHero/HomeHero";
import {useMentors} from "@/hooks/useMentors";

const Home = () => {
    const [getMentors] = useMentors();
    const data1 = getMentors();
    console.log(data1);
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
