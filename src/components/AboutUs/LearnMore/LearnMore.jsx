import React, {useEffect, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import styles from '@/styles/learnMore.module.scss'
import {useRouter} from 'next/router';
import {Education, History, Partners, ResearchActivity, InternationalActivity, EducationLevels } from "../Tabs"



const LearnMore = () => {
    const router = useRouter();
    const {tab} = router.query;
    const [activeRoute, setActiveRoute] = useState(tab);

    useEffect(() => {
        if (tab) {
            setActiveRoute(tab);
        }
    }, [tab]);

    const handleNavigation = (query) => {
        setActiveRoute(query);
        router.push({
            pathname: '/about-us',
            query: {tab: query},
        }, undefined, {shallow: true});
    };

    const {routesDropdown} = useSelector(
        (state) => state['routesReducer']
    );

    const TabActive = useMemo(() => {
        switch (tab) {
            case "education":
                return <Education/>;
                case "international-activity":
                return <InternationalActivity/>;
                case "partners-of-the-department":
                return <Partners/>;
                case "history-of-the-department":
                return <History/>;
                case "education-levels":
                return <EducationLevels/>;
                case "research-activities":
                return <ResearchActivity/>;
            default:
                return <></>;
        }
    }, [tab])


    return (
        <section className={styles.LearnMore} id={"navBar"}>
            <div className={styles.LearnMoreWrap}>
                <h1 className={styles.LearnMoreTitle}>Дізнайтеся більше про кафедру</h1>
                <ul className={styles.LearnMoreNavigation}>
                    {routesDropdown.map((route) =>
                        <React.Fragment key={route.title}>
                            <li
                                className={`${styles.LearnMoreNavigationItem} ${activeRoute === route.query ? styles.Active : ''}`}
                                onClick={() => handleNavigation(route.query)}
                            >
                                {route.title}

                            </li>
                        </React.Fragment>)
                    }
                </ul>
                {TabActive}
            </div>
        </section>

    )
};
export default LearnMore;
