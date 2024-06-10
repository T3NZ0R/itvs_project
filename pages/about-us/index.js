import React from 'react';

import Hero from '@/components/AboutUs/Hero/Hero';
import WhoCanApply from '@/components/AboutUs/WhoCanApply/WhoCanApply';
import Partners from '@/components/AboutUs/Partners/Partners';
import LearnMore from '@/components/AboutUs/LearnMore/LearnMore';
import styles from '@/styles/aboutUs.module.scss';

const AboutUs = () => {

  return (
    <div className={styles.AboutUsWrap}>
      <Hero />
      <WhoCanApply />
      <Partners />
      <LearnMore />
    </div>
  );
};

export default AboutUs;
