import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import StudyImg from '@/assets/img/Rectangle314.png'
import StudyImg2 from '@/assets/img/Rectangle315.png'
import StudyImg3 from '@/assets/img/Rectangle316.png'
import ArrowRightTop from '@/assets/icons/ArrowRightTop.svg'
import styles from '@/styles/LearnMoreSection.module.scss'
import { useRouter } from 'next/router';


const LernMore = () => {


    const router = useRouter();
    const { tab } = router.query;
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
            query: { tab: query },
        }, undefined, { shallow: true });
    };


    const { routesDropdown } = useSelector(
        (state) => state['routesReducer']
    );
    const Data = [{
        id: 1,
        title: 'Програмування',
        descr: 'Під час навчання студенти вивчають сучасні технології створення прикладних програм, оволодівають навиками об’єктно-орієнтованого підходу до програмування та роботи з базами даних. Для вивчення мов програмування C/C++, C#, Java, Python та ін. використовується найсучасніше апаратне та програмне забезпечення. Це є запорукою успішного застосування набутих знань при створенні програмного забезпечення в інформаційно-видавничих системах.',
        src: StudyImg,
        alt: 'StudyImg',
    },
    {
        id: 2,
        title: 'UX/UI дизайн',
        descr: 'При навчанні на спеціальності 186 «Видавництво та поліграфія» студенти опановують дисципліни, пов’язані із UI/UX дизайном. При цьому вони вивчають теоретичні основи дизайну, технології роботи з елементами дизайну при розробці графічних проектів. Студенти опановують створення графічних композицій засобами Adobe Photoshop, Adobe Illustrator та іншими пакетами для оброблення графічної інформації. Велику увагу при підготовці студентів приділено електронним виданням: принципам їх побудови, їх складовим компонентам, особливостям апаратних засобів для відтворення електронних видань.',
        src: StudyImg2,
        alt: 'StudyImg2',
    }, {
        id: 3,
        title: 'Web-дизайн',
        descr: 'Web-сайти, наприклад, є власне електронними виданнями, а тому Web-дизайн та реалізація front-end для Web-проектів (засобами HTML5, CSS3, JavaScript) також є частиною навчання студентів. Диплом бакалавра за спеціальністю 186 «Видавництво та поліграфія» дає можливість продовжити навчання на другому (магістерському) рівні вищої освіти.',
        src: StudyImg3,
        alt: 'StudyImg3',
    },]
    return (
        <section className={styles.LearnMore}>
            <div className={styles.LearnMoreWrap}>
                <div className={styles.NavigationBar}>

                    <h1 className={styles.NavigationBarTitle}>Дізнайтеся більше про кафедру</h1>
                    <ul className={styles.NavigationBarList}>
                        {routesDropdown.map((route) =>
                            <React.Fragment key={route.title}>
                                <li
                                    className={`${styles.NavigationBarItems} ${activeRoute === route.query ? styles.Active : ''}`}
                                    onClick={() => handleNavigation(route.query)}
                                >
                                    {route.title}

                                </li>
                            </React.Fragment>)
                        }
                    </ul>

                </div>
                {activeRoute && (
                    activeRoute === 'education' ? (

                        <div className={styles.StudyInfo}>
                            <h1 className={styles.StudyInfoTitle}>Навчання на спеціальності</h1>
                            <p className={styles.StudyInfoDescr}>
                                Кафедра здійснює підготовка фахівців за спеціальністю 186 «Видавництво та поліграфія» (UI/UX
                                Design) та магістрів за спеціальністю 186 «Видавництво та поліграфія» із спеціалізацією
                                «Комп`ютерні технології та системи видавничо-поліграфічних виробництв».
                            </p>
                            <div>
                                <h1 className={styles.StudyInfoSubTitle}>Переваги спеціальності</h1>
                                <p className={styles.StudyInfoDescr}>
                                    Переваги спеціальності 186 Видавництво та поліграфія в тому, що спеціалізовані знання в
                                    області комп`ютерної верстки та поліграфічних технологій «нанизуються» на фундаментальні
                                    знання в області комп`ютерних наук в цілому. Сюди входить програмування, адміністрування
                                    комп`ютерних систем, методи і засоби проектування інформаційних систем і технологій. В основі
                                    навчального процесу лежить вивчення основ композиції та технологій комп’ютерного дизайну,
                                    комп`ютерної анімації, UI/UX дизайну, додрукарського опрацювання інформації,
                                    інструментальних засобів WEB-дизайну, технологій 3D моделювання, проектування електронних
                                    і мультимедійних видань, інформаційних систем прийняття рішень та управління.
                                </p>
                            </div>
                            <div>
                                {Data.map((card) => (
                                    <div key={card.id}>
                                        <div className={styles.CardImg1} >
                                            <Image className={styles.CardImg} src={card.src} alt={card.alt} />
                                        </div>
                                        <div className={styles.CardInfo}>
                                            <h1 className={styles.CardInfoTitle}>{card.title}</h1>
                                            <p className={styles.CardInfoDescr}>{card.descr}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className={styles.CardInfoBTN}>
                                    <Link className={styles.CardLink} href={'/'}>Перейти на головну <Image className={styles.CardInfoIcon} src={ArrowRightTop} alt='ArrowRightTop' /></Link>
                                </div>
                            </div>
                        </div>
                    ) : activeRoute === "international-activity" ? (
                        <div className={styles.StudyInfoTitle}>international-activity</div>
                    ) :
                        activeRoute === "partners-of-the-department" ? (
                            <div className={styles.StudyInfoTitle}>partners-of-the-department</div>
                        ) :
                            activeRoute === "history-of-the-department" ? (
                                <div className={styles.StudyInfoTitle}>history-of-the-department</div>
                            ) :
                                activeRoute === "student-science" ? (
                                    <div className={styles.StudyInfoTitle}>student-science</div>
                                ) :
                                    activeRoute === 'research-activities' ? (
                                        <div className={styles.StudyInfoTitle}>research-activities</div>
                                    )
                                        : null

                )}
            </div>
        </section >

    )
};
export default LernMore;