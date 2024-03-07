import {createSlice} from "@reduxjs/toolkit";


const staffSlice = createSlice({
    name: "staffSlice",
    initialState: {
        staff: [
            {
                name: "Кустра Наталія Омелянівна",
                degree: "Зав. кафедри к.т.н, доцент",
                email: "nataliia.o.kustra@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Кустра_Наталія_Омелянівна",
                photo: "img/staff/Kustra_N_O.jpg"
            },
            {
                name: "Рашкевич Юрій Михайлович",
                degree: "Д.т.н, професор",
                email: "yurii.m.rashkevych@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Рашкевич_Юрій_Михайлович",
                photo: "img/staff/Rashkevych_Y_M.jpg"
            },
            {
                name: "Ткаченко Роман Олексійович",
                degree: "Д.т.н, професор",
                email: "roman.o.tkachenko@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Ткаченко_Роман_Олексійович",
                photo: "img/staff/Tkachenko_R_O.jpg"
            },
            {
                name: "Величко Олег Володимирович",
                degree: "Д.ф.-м.н. ст.н.с.",
                email: "oleh.v.velychko@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Величко_Олег_Володимирович",
                photo: "img/staff/Velychlo_O_V.jpg"
            },
            {
                name: "Лотошинська Наталія Дмитрівна",
                degree: "К.т.н, доцент",
                email: "nataliia.d.lotoshynska@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Лотошинська_Наталія_Дмитрівна",
                photo: "img/staff/Lotoshynska_N_D.jpg"
            },
            {
                name: "Логойда Микола Михайлович",
                degree: "К.т.н, доцент",
                email: "mykola.m.lohoida@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Логойда_Микола_Михайлович",
                photo: "img/staff/Lohoida_M_M.jpg"
            },
            {
                name: "Різник Олег Яремович",
                degree: "К.т.н, доцент",
                email: "oleh.y.riznyk@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Різник_Олег_Яремович",
                photo: "img/staff/Riznyk_O_Y.jpg"
            },
            {
                name: "Гавриш Богдана Михайлівна",
                degree: "К.т.н, доцент",
                email: "bohdana.m.havrysh@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Гавриш_Богдана_Михайлівна",
                photo: "img/staff/Havrysh_B_M.jpg"
            },
            {
                name: "Міюшкович Юлія Георгіївна",
                degree: "К.т.н, доцент",
                email: "yuliia.h.miiushkovych@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Міюшкович_Юлія_Георгіївна",
                photo: "img/staff/Miiushkovych_Y_H.jpg"
            },
            {
                name: "Кинаш Юрій Євстахійович",
                degree: "К.ф.-м.н, доцент",
                email: "yurii.y.kynash@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Кинаш_Юрій_Євстахович",
                photo: "img/staff/No_photo.jpg"
            },
            {
                name: "Семенів Марія Рудольфівна",
                degree: "К.т.н, доцент",
                email: "mariia.r.semeniv@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Семенів_Марія_Рудольфівна",
                photo: "img/staff/No_photo.jpg"
            },
            {
                name: "Марцишин Роман Степанович",
                degree: "К.т.н, доцент",
                email: "roman.s.martsyshyn@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Марцишин_Роман_Степанович",
                photo: "img/staff/Martsyshyn_R_S.jpg"
            },
            {
                name: "Ковальчук Анатолій Михайлович",
                degree: "Cт. викл",
                email: "anatolii.m.kovalchuk@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Ковальчук_Анатолій_Михайлович",
                photo: "img/staff/Kovalchuk_A_M.jpg"
            },
            {
                name: "Шуневич Олег Богданович",
                degree: "К.т.н.. асистент",
                email: "oleh.b.shunevych@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Шуневич_Олег_Богданович",
                photo: "img/staff/Shunevych_O_B.jpg"
            },
            {
                name: "Семенова Ольга Євстахіївна",
                degree: "Асистент",
                email: "olha.y.semenova@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Семенова_Ольга_Євстахіївна",
                photo: "img/staff/No_photo.jpg"
            },
            {
                name: "Медведєва Діана Сергіївна",
                degree: "Асистент",
                email: "diana.s.medvedieva@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Медведєва_Діана_Сергіївна",
                photo: "img/staff/No_photo.jpg"
            },
            {
                name: "Пелех Світлана Антонівна",
                degree: "Провідний спеціаліст",
                email: "svitlana.a.pelekh@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Пелех_Світлана_Антонівна",
                photo: "img/staff/Pelekh_S_A.jpg"
            },
            {
                name: "Гришевич Віра Ігорівна",
                degree: "Інженер 1 категорії",
                email: "vira.i.hryshevych@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Гришевич_Віра_Ігорівна",
                photo: "img/staff/No_photo.jpg"
            },
        ]
    },


});

const staffReducer = staffSlice.reducer;
export {staffReducer};
