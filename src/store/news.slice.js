import {createSlice} from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "newsSlice",
    initialState: {
        news: [],
        simpleNews: null
    },
    reducers: {
        getNews:(state, action)=>{
            state.news = action.payload.news;
        },
        getSimpleNews:(state, action)=>{
            state.simpleNews = action.payload.news;
        }
    }

});

const newsReducer = newsSlice.reducer;
export const {getNews, getSimpleNews} = newsSlice.actions;

export {newsReducer};
