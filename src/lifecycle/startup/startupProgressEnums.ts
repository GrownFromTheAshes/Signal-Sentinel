// Details the different stages of the startup process.
export enum startupProgress {
    None,
    HasNotBegun,
    GettingTranslatedStrings,
    GettingUserSettings,
    LoadingHomepage,
    FinishedLoading
}