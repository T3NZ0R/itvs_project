import {createSlice} from "@reduxjs/toolkit";

const staffSlice = createSlice({
    name: "staffSlice",
    initialState: {
        staff: []
    },
    reducers: {
        getStaff:(state, action)=>{
            state.staff = action.payload.mentors;
        }
    }
});

const staffReducer = staffSlice.reducer;
export const {getStaff} = staffSlice.actions;
export {staffReducer};

