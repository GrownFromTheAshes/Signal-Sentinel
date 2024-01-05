import { startupProgress } from "./startupProgressEnums";
import EventEmitter from "events";

// Handles the startup for the entire program.
let startupState = startupProgress.HasNotBegun;
const emitter = new EventEmitter();

function beginStartup(): void {
    let loadingDelayTime:number = 1.5;
    // Load Translation Strings
    updateStartupState(startupProgress.GettingTranslatedStrings);
    simulateLoadingDelay(loadingDelayTime);
    // Load User Settings
    updateStartupState(startupProgress.GettingUserSettings);
    simulateLoadingDelay(loadingDelayTime);
    // Load Homepage
    updateStartupState(startupProgress.LoadingHomepage);
    simulateLoadingDelay(loadingDelayTime);
    // Finish up, preparing to move to Homepage View.
    updateStartupState(startupProgress.FinishedLoading);
    // Once updated to "FinishedLoading", React Router will handle moving
    // to the home page from LoadingStartupPage.
}

async function simulateLoadingDelay(seconds:number): Promise<void> {
    // Convert seconds to milliseconds
    const totalTime: number = seconds * 1000;
    await new Promise(resolve => setTimeout(resolve, totalTime));
}

function updateStartupState(progress:startupProgress){
    startupState = progress;
    emitter.emit('startupStateChanged', progress);
    
}

export function getStartupState(): startupProgress {
    return startupState;
} 

export default emitter;