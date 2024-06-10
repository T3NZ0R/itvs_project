import styles from "@/styles/educationLevels.module.scss";
import React from "react";
import Badge from "@/components/AboutUs/Tabs/Badge/Badge";


const items1 = [
    <div key={0} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Практичні навички та креативність</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Студенти навчаються використовувати різні програми та інструменти для розв&apos;язання реальних проблем у сфері
            видавництва та поліграфії. Важливий акцент робиться на креативному мисленні при вирішенні проблемних
            ситуацій під час створення дизайнерської продукції.
        </p>
    </div>,
    <div key={1} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Бізнес і управління</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Програма також включає навчання <b>основам бізнесу</b> в області комп’ютерного дизайну та управління
            підприємствами. Студенти вчаться приймати обґрунтовані рішення щодо створення та <b>ведення бізнесу,
            організовувати та документально оформлювати процеси</b> підприємницької діяльності.
        </p>
    </div>,
    <div key={2} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Системний підхід і економічна ефективність</h3>
        <p className={styles.EducationLevelsItemInfo}>
            На кафедрі навчають студентів використовувати системний підхід при управлінні створенням електронних видань.
            Студенти вчаться приймати рішення, як зробити діяльність видавничо-поліграфічних підприємств більш
            ефективною з економічної точки зору. Вони також вміють аналізувати дані та покращувати процеси розробки
            електронних та друкованих видань.
        </p>
    </div>,
    <div key={3} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Мультимедійні технології</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Студенти вчаться створювати електронні мультимедійні видання, використовуючи різноманітні програми та
            інструменти. Вони також навчаються працювати з мультимедійними даними в колективі, використовуючи офісні
            програми та хмарні сервіси. Крім того, студенти засвоюють навички використання графічних редакторів для
            поліпшення якості зображень та підготовки їх для публікації в Інтернеті.
        </p>
    </div>,
    <div key={4} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Дизайн та верстка</h3>
        <p className={styles.EducationLevelsItemInfo}>
            На кафедрі студенти вивчають, як створювати ефективні колірні рішення і створювати гармонійні комбінації
            кольорів для різних мультимедійних та друкарських продуктів. Вони навчаються виконувати тонову та колірну
            корекцію зображень і розробляти інтерактивні документи, елементи веб-сайтів та додатки, використовуючи
            анімацію. Крім того, студенти вивчають створення рекламних продуктів з тривимірного моделювання.
        </p>
    </div>,
    <div key={5} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Технологічні процеси і безпека</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Програма включає підготовку фахівців з керування технологічними процесами видавничо-поліграфічної справи,
            забезпечення ефективної роботи цифрового та спеціальних видів друку. Студенти також здобувають знання щодо
            створення ресурсів для Інтернету та забезпечення захисту інформації в мультимедійних видавництвах.
        </p>
    </div>,
    <div key={6} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Художня композиція та шрифти</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Кафедра навчає основам художньої композиції та графічного дизайну при розробці мультимедійних та друкованих
            видань, а також раціональному, грамотному шрифтовому оформленню з урахуванням психології візуального
            сприйняття та читабельності. <br/>
            <br/>
            Ця програма надає студентам можливість стати висококваліфікованими фахівцями у своїй галузі, готовими до
            викликів сучасного ринку праці.
        </p>
    </div>,
];

const items2 = [
    <div key={0} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Теоретичні знання та аналітичні навички</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Магістранти здобувають здатність використовувати теоретичні та фундаментальні знання в галузі комп&apos;ютерного
            дизайну. Вони вчаться формулювати, аналізувати та синтезувати рішення наукових проблем, розділяючи їх на
            складові частини для детальнішого дослідження та розв&apos;язання.

        </p>
    </div>,
    <div key={1} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Інтеграція знань і креативність</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Програма підкреслює важливість інтеграції знань та навичок з різних дисциплін для вирішення технічних та
            управлінських задач. Студенти розвивають креативне мислення та творчий підхід до вирішення нових проблем і
            ситуацій.
        </p>
    </div>,
    <div key={2} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Мобільні додатки та IT-продукти</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Студенти набувають знання та навички проектування додатків для мобільних пристроїв і формування
            повнофункціональних IT-продуктів на основі відкритих інтерактивних компонентів. Вони також здобувають
            здатність проектувати користувальницькі інтерфейси та створювати візуальне оформлення електронних
            видань. </p>
    </div>,
    <div key={3} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Візуалізація та обробка зображень</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Програма забезпечує знання в галузі візуалізації даних і 3D-об&apos;єктів, розробки математичних методів та
            алгоритмів обробки зображень у цифровому форматі. Студенти вчаться впроваджувати сучасні комп&apos;ютерні системи
            у видавничо-поліграфічний процес. </p>
    </div>,
    <div key={4} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Менеджмент та організація</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Магістранти здобувають здатність організовувати процес навчання співробітників та самонавчання на робочому
            місці, формувати систему менеджменту в умовах поліграфічного виробництва і управляти бізнес-процесами
            видавництв електронної та поліграфічної продукції.
        </p>
    </div>,
    <div key={5} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Аналіз і нові технології</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Студенти вчаться аналізувати і формувати нові способи, форми та правові аспекти вираження і пізнання людини
            в медіасвіті. Програма включає знання наукових принципів розробки та використання комп’ютерних технологій,
            методологій проектування комп’ютерних технологій та інформаційних видавничих систем.
        </p>
    </div>,
    <div key={6} className={styles.EducationLevelsItem}>
        <h3 className={styles.EducationLevelsItemTitle}>Інновації та економіка</h3>
        <p className={styles.EducationLevelsItemInfo}>
            Студенти вчаться аналізувати і формувати нові способи, форми та правові аспекти вираження і пізнання людини
            в медіасвіті. Програма включає знання наукових принципів розробки та використання комп’ютерних технологій,
            методологій проектування комп’ютерних технологій та інформаційних видавничих систем. <br/>
            <br/>
            Програма магістратури на кафедрі ІТВС спрямована на підготовку висококваліфікованих фахівців, здатних
            ефективно працювати у швидкозмінному середовищі сучасних технологій і видавничо-поліграфічних процесів.
        </p>
    </div>,
]


export const educationLevels = [
    {
        title: "Бакалаврат",
        info:
            <>
                <Badge info={
                    <div className={styles.EducationLevelsWrapper}>
                        <p className={styles.EducationLevelsItemInfo}>Бакалаврська програма на кафедрі «Інформаційні
                            технології видавничої справи» (ІТВС) надає
                            студентам
                            широкий спектр знань та навичок, необхідних для успішної кар&apos;єри у видавничо-поліграфічній
                            галузі та
                            комп&apos;ютерному дизайні.</p>
                        {items1.map((item) => item)}
                    </div>
                }
                       title={"Бакалаврат"}
                       year={"1 рівень"}
                />


            </>
    },
    {
        title: "Магістратура",
        info:
            <>
                <Badge info={
                    <div className={styles.EducationLevelsWrapper}>
                        <p className={styles.EducationLevelsItemInfo}>
                            Програма магістратури на кафедрі «Інформаційні
                            технології видавничої справи» (ІТВС) забезпечує студентів необхідними знаннями та навичками
                            для досягнення високого рівня професійної компетентності у сфері комп&apos;ютерного дизайну та
                            видавничо-поліграфічної діяльності.</p>
                        {items2.map((item) => item)}
                    </div>
                }
                       title={"Магістратура"}
                       year={"2 рівень"}
                />


            </>
    },
    {
        title: "Аспірантура",
        info:
            <>
                <Badge info={
                    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                        <p className={styles.EducationLevelsItemInfo}>
                            <b>Підготовку кандидатів та докторів:</b>
                        </p>
                        <ul style={{paddingLeft: "15px",}}>
                            <li>05.13.06 – “Інформаційні технології”;</li>
                            <li>05.13.23 – “Cистеми та засоби штучного інтелекту”.</li>
                        </ul>
                        <p className={styles.EducationLevelsItemInfo}>
                            <b>Докторські студії за спеціальностями:</b>
                        </p>
                        <ul style={{paddingLeft: "15px"}}>
                            <li>186 - Видавництво і поліграфія</li>
                            <li>121 - Інженерія програмного забезпечення</li>
                            <li>122 - Комп’ютерні технології та інформаційні технології</li>
                            <li>124 - Cистемний аналіз</li>
                        </ul>

                    </div>
                }
                       title={"Аспірантура"}
                       year={"3 рівень"}
                />


            </>
    }
]
