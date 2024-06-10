import Image1 from "src/assets/img/tabs/img_11.png"
import Image2 from "src/assets/img/tabs/img_12.png"
import styles from "src/styles/badge.module.scss";
import Image from "next/image";
import Badge from "@/components/AboutUs/Tabs/Badge/Badge";


const items1 = [
    {
        year: "1998 рік",
        title: "Початок підготовки фахівців",
        info:
            <>
                <Image className={styles.BadgeImage} src={Image1} alt={"NULP"}/>
                <p className={styles.BadgeParagraph}>
                    У 1998 році на кафедрі «Автоматизовані системи управління» (АСУ) стартувала підготовка бакалаврів за
                    напрямом «Легка промисловість».
                </p>
            </>
    },
    {
        year: "2001 рік",
        title: "Видавничо-поліграфічна справа",
        info:
            <>
                <p className={styles.BadgeParagraph}>
                    У 2001 році цей напрям був перейменований на «Видавничо-поліграфічну справу» (ВПС, шифр 051501).
                    Щорічний набір на перші курси стаціонарної форми навчання складав одну групу бюджетного та
                    комерційного контингенту.
                </p>
            </>
    }
];

const items2 = [
    {
        year: "2002 рік",
        title: "Перший випуск бакалаврів",
        info: <>
            <p className={styles.BadgeParagraph}>
                У 2002 році кафедра АСУ здійснила перший випуск бакалаврів за напрямом «Видавничо-поліграфічна справа».
                Випускники цього напряму продовжили навчання за спеціальністю «Комп’ютерні технології та системи
                видавничо-поліграфічних виробництв» у 2002/2003 навчальному році.
            </p>
        </>
    },
    {
        year: "2003 рік",
        title: "Акредитація спеціальності",
        info:
            <>
                <p className={styles.BadgeParagraph}>
                    У 2003 році кафедра АСУ отримала акредитацію на випуск спеціалістів за спеціальністю «Комп’ютерні
                    технології та системи видавничо-поліграфічних виробництв». Це стало важливим кроком для забезпечення
                    високої якості освіти та підготовки фахівців у цій галузі.
                </p>
            </>
    }
];

const items3 = [
    {
        year: "2011 рік",
        title: "Утворення кафедри ІТВС",
        info:
            <>
                <p className={styles.BadgeParagraph}>
                    З метою продовження підготовки фахівців за напрямом «Видавничо-поліграфічна справа» в 2011 році на
                    базі кафедри АСУ був створений новий структурний підрозділ — кафедра «Інформаційні технології
                    видавничої справи» (ІТВС). Це дало змогу значно покращити матеріально-технічну базу та забезпечити
                    більш якісне навчання студентів.
                </p>
            </>
    }
];

const items4 = [
    {
        year: "2022 рік",
        title: "Співпраця з Львівським ІТ-кластером",
        info:
            <>
                <Image className={styles.BadgeImage} src={Image2} alt={"event"}/>
                <p className={styles.BadgeParagraph}>
                    З осені 2022 року кафедра ІТВС розпочала тісну співпрацю з Львівським ІТ-кластером у контексті
                    оновлення освітньої програми «UI/UX Design» першого (бакалаврського) рівня вищої освіти. Це
                    співробітництво включає <b>залучення експертів галузі до процесу викладання,</b> що дозволяє
                    адаптувати
                    програму до сучасних вимог стейкхолдерів та покращити якість підготовки студентів. <br/>
                    <br/>
                    Кафедра «Інформаційні технології видавничої справи» постійно працює над удосконаленням освітніх
                    програм та забезпечує своїм студентам можливість отримати найсучасніші знання і практичні навички,
                    необхідні для успішної кар&apos;єри в IT-галузі.
                </p>
            </>
    }
]

export const historyData = [
    {
        title: "З чого все починалось",
        info:
            <div className={styles.BadgeWrappers}>
                {items1.map((item, index) => <Badge key={index} year={item.year} info={item.info} title={item.title}/>)}
            </div>
    },
    {
        title: "Перші випуски та акредитація",
        info:
            <div className={styles.BadgeWrappers}>
                {items2.map((item, index) => <Badge key={index} year={item.year} info={item.info} title={item.title}/>)}
            </div>

    },
    {
        title: "Створення нового підрозділу",
        info:
            <div className={styles.BadgeWrappers}>
                {items3.map((item, index) => <Badge key={index} year={item.year} info={item.info} title={item.title}/>)}
            </div>
    },
    {
        title: "Сучасні досягнення та співпраця",
        info:
            <div className={styles.BadgeWrappers}>
                {items4.map((item, index) => <Badge key={index} year={item.year} info={item.info} title={item.title}/>)}
            </div>

    },
]
