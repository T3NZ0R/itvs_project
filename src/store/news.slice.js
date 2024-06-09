import {createSlice} from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "newsSlice",
    initialState: {
        news: []
    },
    reducers: {
        getNews:(state, action)=>{
            state.staff = action.payload.news;
        }
    }

});

const newsReducer = newsSlice.reducer;
export const {getNews} = newsSlice.actions;

export {newsReducer};
