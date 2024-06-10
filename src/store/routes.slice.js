import {createSlice} from "@reduxjs/toolkit";


const routesSlice = createSlice({
    name: "routesSlice",
    initialState: {
        routesMobile: [
            {title: "Головна", query:false, path:"/"},
            {title: "Навчання", query:"education", path:"/about-us"},
            {title: "Міжнародна діяльність", query:"international-activity", path: "/about-us"},
            {title: "Партнери кафедри", query:"partners-of-the-department", path: "/about-us"},
            {title: "Історія кафедри", query:"history-of-the-department", path: "/about-us"},
            {title: "Рівні навчання", query:"education-levels", path: "/about-us"},
            {title: "Наукова діяльність", query:"research-activities", path: "/about-us"},
            {title: "Події та новини", query:false, path:"/events-and-news"},
            {title: "Колектив", query:false, path:"/department-staff"},
            {title: "Контакти", query:false, path:"/contact-us"},
        ],
        routesDropdown: [
            {title: "Навчання", query:"education"},
            {title: "Міжнародна діяльність", query:"international-activity"},
            {title: "Партнери кафедри", query:"partners-of-the-department"},
            {title: "Історія кафедри", query:"history-of-the-department"},
            {title: "Рівні навчання", query:"education-levels"},
            {title: "Наукова діяльність", query:"research-activities"},
        ],
    },


});

const routesReducer = routesSlice.reducer;
export {routesReducer};
