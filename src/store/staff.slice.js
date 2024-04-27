import {createSlice} from "@reduxjs/toolkit";

import Kustra from "@/assets/img/staff/Kustra_N_O.jpg";
import Rashkevych from "@/assets/img/staff/Rashkevych_Y_M.jpg";
import Tkachenko from "@/assets/img/staff/Tkachenko_R_O.jpg";
import Velychlo from "@/assets/img/staff/Velychlo_O_V.jpg";
import Lotoshynska from "@/assets/img/staff/Lotoshynska_N_D.jpg";
import Lohoida from "@/assets/img/staff/Lohoida_M_M.jpg";
import Riznyk from "@/assets/img/staff/Riznyk_O_Y.jpg";
import Havrysh from "@/assets/img/staff/Havrysh_B_M.jpg";
import Miiushkovych from "@/assets/img/staff/Miiushkovych_Y_H.jpg";
import NoPhoto from "@/assets/img/staff/No_photo.jpg";
import Martsyshyn from "@/assets/img/staff/Martsyshyn_R_S.jpg";
import Kovalchuk from "@/assets/img/staff/Kovalchuk_A_M.jpg";
import Shunevych from "@/assets/img/staff/Shunevych_O_B.jpg";
import Pelekh from "@/assets/img/staff/Pelekh_S_A.jpg";


const staffSlice = createSlice({
    name: "staffSlice",
    initialState: {
        staff: [
            {
                name: "Кустра Наталія Омелянівна",
                degree: "Зав. кафедри к.т.н, доцент",
                email: "nataliia.o.kustra@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Кустра_Наталія_Омелянівна",
                photo: Kustra
            },
            {
                name: "Рашкевич Юрій Михайлович",
                degree: "Д.т.н, професор",
                email: "yurii.m.rashkevych@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Рашкевич_Юрій_Михайлович",
                photo: Rashkevych
            },
            {
                name: "Ткаченко Роман Олексійович",
                degree: "Д.т.н, професор",
                email: "roman.o.tkachenko@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Ткаченко_Роман_Олексійович",
                photo: Tkachenko
            },
            {
                name: "Величко Олег Володимирович",
                degree: "Д.ф.-м.н. ст.н.с.",
                email: "oleh.v.velychko@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Величко_Олег_Володимирович",
                photo: Velychlo
            },
            {
                name: "Лотошинська Наталія Дмитрівна",
                degree: "К.т.н, доцент",
                email: "nataliia.d.lotoshynska@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Лотошинська_Наталія_Дмитрівна",
                photo: Lotoshynska
            },
            {
                name: "Логойда Микола Михайлович",
                degree: "К.т.н, доцент",
                email: "mykola.m.lohoida@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Логойда_Микола_Михайлович",
                photo: Lohoida
            },
            {
                name: "Різник Олег Яремович",
                degree: "К.т.н, доцент",
                email: "oleh.y.riznyk@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Різник_Олег_Яремович",
                photo: Riznyk
            },
            {
                name: "Гавриш Богдана Михайлівна",
                degree: "К.т.н, доцент",
                email: "bohdana.m.havrysh@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Гавриш_Богдана_Михайлівна",
                photo: Havrysh
            },
            {
                name: "Міюшкович Юлія Георгіївна",
                degree: "К.т.н, доцент",
                email: "yuliia.h.miiushkovych@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Міюшкович_Юлія_Георгіївна",
                photo: Miiushkovych
            },
            {
                name: "Кинаш Юрій Євстахійович",
                degree: "К.ф.-м.н, доцент",
                email: "yurii.y.kynash@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Кинаш_Юрій_Євстахович",
                photo: NoPhoto
            },
            {
                name: "Семенів Марія Рудольфівна",
                degree: "К.т.н, доцент",
                email: "mariia.r.semeniv@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Семенів_Марія_Рудольфівна",
                photo: NoPhoto
            },
            {
                name: "Марцишин Роман Степанович",
                degree: "К.т.н, доцент",
                email: "roman.s.martsyshyn@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Марцишин_Роман_Степанович",
                photo: Martsyshyn
            },
            {
                name: "Ковальчук Анатолій Михайлович",
                degree: "Cт. викл",
                email: "anatolii.m.kovalchuk@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Ковальчук_Анатолій_Михайлович",
                photo: Kovalchuk
            },
            {
                name: "Шуневич Олег Богданович",
                degree: "К.т.н.. асистент",
                email: "oleh.b.shunevych@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Шуневич_Олег_Богданович",
                photo: Shunevych
            },
            {
                name: "Семенова Ольга Євстахіївна",
                degree: "Асистент",
                email: "olha.y.semenova@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Семенова_Ольга_Євстахіївна",
                photo: NoPhoto
            },
            {
                name: "Медведєва Діана Сергіївна",
                degree: "Асистент",
                email: "diana.s.medvedieva@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Медведєва_Діана_Сергіївна",
                photo: NoPhoto
            },
            {
                name: "Пелех Світлана Антонівна",
                degree: "Провідний спеціаліст",
                email: "svitlana.a.pelekh@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Пелех_Світлана_Антонівна",
                photo: Pelekh
            },
            {
                name: "Гришевич Віра Ігорівна",
                degree: "Інженер 1 категорії",
                email: "vira.i.hryshevych@lpnu.ua",
                wikiLink: "http://wiki.lpnu.ua/wiki/Гришевич_Віра_Ігорівна",
                photo: NoPhoto
            },
        ]
    },


});

const staffReducer = staffSlice.reducer;
export {staffReducer};
