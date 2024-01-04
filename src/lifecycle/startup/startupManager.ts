// Handles the startup for the entire program. You should not call this file directly, and instead should call
// "startupIndex", using it to interact with startupManager as an abstraction layer.
let startupState = false;

function beginStartup(): void {
    // Check if should simulate loading delay
    // Set up the loading stuff here, once it's implemented
    
}

async function simulateLoadingDelay(seconds:number): Promise<void> {
    // Convert seconds to milliseconds
    const totalTime: number = seconds * 1000;
    await new Promise(resolve => setTimeout(resolve, totalTime));
}
