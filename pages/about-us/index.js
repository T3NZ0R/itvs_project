import React from 'react';
import { useRouter } from 'next/router'

const AboutUs = () => {
    const router = useRouter()
    const {tab} = router.query
    return (
        <div>
            {tab}
        </div>
    );
};

export default AboutUs;
