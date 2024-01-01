import { combineReducers } from "@reduxjs/toolkit";
import startupReducer from "./startupReducer";

const rootReducer = combineReducers({
    hasEntryRun: startupReducer
});

export default rootReducer;