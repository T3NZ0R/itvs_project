import React from 'react';
import { useRouter } from 'next/router';

import Hero from '@/components/AboutUs/Hero/Hero';
import WhoCanApply from '@/components/AboutUs/WhoCanApply/WhoCanApply';
import Partners from '@/components/AboutUs/Partners/Partners';
import LearnMore from '@/components/AboutUs/LearnMore/LearnMore';

const AboutUs = () => {
  const router = useRouter();
  const { tab } = router.query;
  return (
    <div>
      {/* {tab} */}
      <Hero />
      <WhoCanApply />
      <Partners />
      <LearnMore />
    </div>
  );
};

export default AboutUs;
