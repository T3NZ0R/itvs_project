import styles from "@/styles/card.module.scss";
import Image from "next/image";
import DocHub from "src/assets/img/tabs/img.png";
import Mastis from "src/assets/img/tabs/img_1.png";
import Image1 from "src/assets/img/tabs/img_2.png";
import Image2 from "src/assets/img/tabs/img_3.png";
import Image3 from "src/assets/img/tabs/img_4.png";

export const internationalActivityData = [
    {
        title: "Інтеграція у міжнародну університетську спільноту",
        info:
            <>
                <p className={styles.CardParagraph}>
                    Кафедра ІТВС активно впроваджує освітні послуги та науковий потенціал у міжнародну університетську
                    спільноту, що забезпечує додаткові можливості для всебічного розвитку студентів. <b>З 2016
                    року</b> ми
                    успішно
                    реалізуємо два масштабних міжнародних освітніх проекти <b>за програмою Erasmus+:</b>
                </p>
                <div className={styles.CardItems}>
                    <div className={styles.CardItemsElement}>
                        <div className={styles.CardItemsElementImage}>
                            <Image src={DocHub} alt={"DocHub"}/>
                        </div>
                        <p className={styles.CardItemsElementText}>
                            <b>DocHub:</b> &quot;Structuring
                            Cooperation in Doctoral Research, Transferrable Skills Training, and
                            Academic Writing instruction in Ukraine&apos;s regions&quot; (номер проекту: 8
                            574064-EPP-1-2016-1-LT-EPPKA2-CBHE-SP)</p>
                    </div>
                    <div className={styles.CardItemsElement}>
                        <div className={styles.CardItemsElementImage}>
                            <Image src={Mastis} alt={"Mastis"}/>
                        </div>
                        <p className={styles.CardItemsElementText1}>
                            <b>MASTIS:</b> &quot;Establishing Modern Master-level Studies in Information Systems&quot; (номер
                            проекту:
                            561592-EPP-1-2015-1-FR-EPPKA2-CBHE-JP)
                        </p>
                    </div>
                </div>

            </>
    },
    {
        title: "Міжнародні лекції та конференції",
        img: Image1,
        info:
            <>

                <p className={styles.CardParagraph}>
                    У 2018 році два асистенти кафедри читали лекції у Кінгстонському університеті, Лондон,
                    Великобританія. Ми активно залучаємо наших науково-педагогічних працівників до організації та
                    проведення міжнародних науково-технічних конференцій та воркшопів, зокрема:

                    <ul style={{paddingTop: "10px", paddingLeft: "15px"}}>
                        <li><b>2016:</b> Перша міжнародна конференція з обробки потоків даних</li>
                        <li><b>2018:</b> Друга міжнародна конференція з обробки потоків даних</li>
                        <li><b>2018, 2019:</b> Міжнародні воркшопи з інформатики та медицини, що базується на даних</li>
                    </ul>
                </p>


            </>
    },
    {
        title: "Спільні наукові дослідження\n",
        img: Image2,
        info:
            <>
                <p className={styles.CardParagraph}>
                    Наші викладачі беруть участь у спільних наукових проектах з європейськими університетами.
                    Наприклад:

                    <ul style={{paddingTop: "10px", paddingLeft: "15px"}}>
                        <li><b>2018:</b> Спільний україно-австрійський проект &quot;Моделювання трафіку та телекомунікаційних
                            мереж&quot;
                        </li>
                        <li><b>2019:</b> Спільні дослідження з науковцями Університету Коменського, Словаччина за
                            Національною стипендіальною програмою Словацької Республіки
                        </li>
                    </ul>
                </p>
            </>
    },
    {
        title: "Міжнародні проекти та програми\n",
        info:
            <>
                <p className={styles.CardParagraph}>
                    За останні роки, кафедра брала участь або була співорганізатором численних міжнародних
                    проектів, серед яких:

                    <ul style={{paddingTop: "10px", paddingLeft: "15px"}}>
                        <li><b>2021-2022:</b> &quot;Гібридні неітеративні системи обчислювального інтелекту для задач
                            електронної комерції&quot;
                        </li>
                        <li><b>2019:</b> Прикладна НДР &quot;Нейромережева технологія захисту та передачі даних у реальному
                            часі з використанням шумоподібних кодів&quot;
                        </li>
                        <li><b>2018:</b> Прикладна НДР &quot;Інтелектуальні інформаційні технології багаторівневоного
                            управління енергоефективністю регіону&quot;
                        </li>
                    </ul>
                </p>
            </>
    },
    {
        title: "Програма MASTIS",
        img: Image3,
        info:
            <>
                Кафедра ІТВС активно працює над створенням сучасної магістерської програми в галузі інформаційних
                систем. <b>У 2016 році</b> завідувач кафедри, проф. Пелешко Д.Д., брав участь у робочій нараді учасників
                <b>проекту ERASMUS+</b> &quot;Створення сучасної магістерської програми в галузі інформаційних систем&quot;
                (MASTIS).
                Основною метою проекту є розробка нової магістерської програми, яка відповідає потребам сучасного
                суспільства.
            </>
    },
    {
        title: "Міжнародні сертифіковані програми\n",
        info:
            <>
                Під час візиту ректора Університету Вюрцбург до Львівської політехніки <b>у 2014 році було</b> підписано
                договір про започаткування спільних сертифікованих програм у галузі комп’ютерних наук.

                Перша програма &quot;Вибрані теми в галузі поглибленого вивчення комп’ютерних наук&quot; стартує у жовтні і
                включає курси, які будуть викладати як німецькі, так і українські професори. Успішні випускники
                отримають сертифікати від Львівської політехніки та Університету Вюрцбург, а також <b>матимуть
                можливість
                отримати стипендії для навчання в аспірантурі, літні стажування в німецьких IT-компаніях та
                університетах.</b>
            </>
    },
]
