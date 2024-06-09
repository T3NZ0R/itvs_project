import {createSlice} from "@reduxjs/toolkit";

const toolsSlice = createSlice({
    name: "toolsSlice",
    initialState: {
        tools: []
    },
    reducers: {
        getTools:(state, action)=>{
            state.tools = action.payload.tools;
        }
    }
});

const toolsReducer = toolsSlice.reducer;
export const {getTools} = toolsSlice.actions;
export {toolsReducer};
