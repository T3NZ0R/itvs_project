import {configureStore} from "@reduxjs/toolkit";
import {routesReducer} from "./routes.slice";
import {staffReducer} from "./staff.slice";
import {toolsReducer} from "./tools.slice";
import {newsReducer} from "./news.slice";


const store = configureStore({
    reducer: {
        routesReducer,
        staffReducer,
        toolsReducer,
        newsReducer
    }
});

export {store};
