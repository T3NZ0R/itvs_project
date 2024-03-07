import {configureStore} from "@reduxjs/toolkit";
import {routesReducer} from "./routes.slice";
import {staffReducer} from "./staff.slice";
import {toolsReducer} from "./tools.slice";


const store = configureStore({
    reducer: {
        routesReducer,
        staffReducer,
        toolsReducer
    }
});

export {store};
