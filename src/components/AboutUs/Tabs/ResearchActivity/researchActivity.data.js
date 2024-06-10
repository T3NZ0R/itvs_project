import styles from "@/styles/card.module.scss";
import Image from "next/image";
import DocHub from "@/assets/img/tabs/img.png";
import Mastis from "@/assets/img/tabs/img_1.png";
import Image1 from "@/assets/img/tabs/img_2.png";
import Image2 from "@/assets/img/tabs/img_13.png";
import Image3 from "@/assets/img/tabs/img_14.png";
import Image4 from "@/assets/img/tabs/img_15.png";

export const researchActivityData = [
    {
        title: "Освітні проєкти",
        info:
            <>
                <p className={styles.CardParagraph}>
                    З 2016 року кафедра бере участь у двох масштабних міжнародних освітніх проєктах за програмою
                    Erasmus+:

                </p>
                <div className={styles.CardItems}>
                    <div className={styles.CardItemsElement}>
                        <div className={styles.CardItemsElementImage}>
                            <Image src={DocHub} alt={"DocHub"}/>
                        </div>
                        <p className={styles.CardItemsElementText}>
                            <b>DocHub:</b> "Structuring
                            Cooperation in Doctoral Research, Transferrable Skills Training, and
                            Academic Writing instruction in Ukraine's regions" (номер проекту: 8
                            574064-EPP-1-2016-1-LT-EPPKA2-CBHE-SP)</p>
                    </div>
                    <div className={styles.CardItemsElement}>
                        <div className={styles.CardItemsElementImage}>
                            <Image src={Mastis} alt={"Mastis"}/>
                        </div>
                        <p className={styles.CardItemsElementText1}>
                            <b>MASTIS:</b> "Establishing Modern Master-level Studies in Information Systems" (номер
                            проекту:
                            561592-EPP-1-2015-1-FR-EPPKA2-CBHE-JP)
                        </p>
                    </div>
                </div>

            </>
    },
    {
        title: "Академічна мобільність\n",
        img: Image1,
        info:
            <>
                <p className={styles.CardParagraph}>
                    У 2018 році два асистенти кафедри читали лекції у Кінгстонському університеті, Лондон,
                    Великобританія, що стало можливим завдяки програмам академічної мобільності.
                </p>
            </>
    },
    {
        title: "Міжнародні конференції та воркшопи",
        img: Image2,
        info:
            <>
                <p className={styles.CardParagraph}>
                    Науково-педагогічні працівники кафедри ІТВС активно беруть участь в організації та проведенні
                    міжнародних науково-технічних конференцій і воркшопів. Зокрема, у 2016 та 2018 роках кафедра була
                    співорганізатором IEEE International Conference on Data Stream Mining & Processing, а також у 2018
                    та 2019 роках - International Workshop on Informatics & Data-Driven Medicine.
                </p>
            </>
    },
    {
        title: "Спільні наукові дослідження",
        img: Image3,
        info:
            <>
                <p className={styles.CardParagraph}>
                    У 2018 році члени кафедри брали участь у виконанні спільного україно-австрійського
                    науково-дослідного проєкту «Моделювання трафіку та телекомунікаційних мереж». У 2019 році, за
                    Національною стипендіальною програмою Словацької Республіки, асистент кафедри проводив спільні
                    дослідження із науковцями Університету Коменського, Словаччина.
                </p>
            </>
    },
    {
        title: "Участь у міжнародних проєктах",
        img: Image4,
        info:
            <>
                <p className={styles.CardParagraph}>
                    За останні роки кафедра ІТВС взяла участь або була співорганізатором наступних міжнародних
                    проєктів: <br/>
                    <br/>
                    <ul style={{paddingTop: "10px", paddingLeft: "15px"}}>
                        <li>
                            <b>2021-2022:</b> "Гібридні неітеративні системи обчислювального інтелекту для задач
                            електронної
                            комерції"
                        </li>
                        <li>
                            <b>2019:</b> Прикладна НДР "Нейромережева технологія захисту та передачі даних у реальному
                            часі з
                            використанням шумоподібних кодів"
                        </li>
                        <li>
                            <b>2018:</b> Прикладна НДР "Інтелектуальні інформаційні технології багаторівневоного
                            управління
                            енергоефективністю регіону"
                        </li>
                        <li>
                            <b>2016-2020 рр.:</b> міжнародний освітній проєкт за програмою Erasmus+ "DocHub".
                        </li>
                        <li>
                            <b>2016-2019 рр.:</b> міжнародний освітній проєкт за програмою Erasmus+ "MASTIS".
                        </li>
                    </ul>
                    <br/>
                    Кафедра ІТВС продовжує активно розвивати наукову діяльність та міжнародну співпрацю, що забезпечує
                    студентам і викладачам нові можливості для розвитку та професійного зростання.

                </p>
            </>
    }
]
