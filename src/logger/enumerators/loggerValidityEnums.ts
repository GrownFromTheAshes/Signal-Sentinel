// One of these values is returned when checking if your settings are valid before creating a Utility Logger.
// If it's valid, return null, not "None".
export enum validityErrorCode {
    None,
    NameUndefinedOrBlank,
    NameTooLong, // Used if the name is longer than the maximum logger name allowance. 
    LoggingLevelsEmpty,
    OutputPathInvalid,
    OutputPathUsedFile, // Called when the "outputPath" gives a specific file. This is not allowed unless "allowOverwritting" is true.
    TextColorWordInvalid, // Used when the invalid text does not begin with "#".
    TextColorHexInvalid,
    TextFontNotSpecified, // Returned when the text font option is present, but either a blank value or 'undefined' is given.
    TextFontNotFound,
    TextLineSpacingTooLow, // Used when textLineSpacing is below 0.
    BackgroundColorWordInvalid, // Same as "TextColorWordInvalid", but for background colors.
    BackgroundOpacityTooLow, // Returned when the backgroundOpacity is set below 0.
    BackgroundOpacityTooHigh // Used when the backgroundOpacity is set above 100.
}