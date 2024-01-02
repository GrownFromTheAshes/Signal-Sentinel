import { createSlice } from "@reduxjs/toolkit";

interface StartupState {
    hasStarted: boolean;
}

const initialState: StartupState = {
    hasStarted: false
}

const startupSlice = createSlice({
    name: "hasEntryRun",
    initialState,
    reducers: {
        ran: (state) => {
            state.hasStarted = true;
        }
    }
});

export const { ran } = startupSlice.actions;
export default startupSlice.reducer;