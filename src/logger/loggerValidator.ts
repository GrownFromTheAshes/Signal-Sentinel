import { LogLevel } from "./enumerators/logLevelEnums";
import { ValidityErrorCode } from "./enumerators/loggerValidityEnums";
import { LoggerOptions } from "./utilityLogger";
// Handles validation of any values you want to use in the Utility Logger.
// Also used internally by the constructor.

// Specifies the minimum logger name length. It's recommended the name be descriptive, but it should at least be quickly understandable, ie. "Log".
// This is done so logs with a custom logger can be shared between developers for debugging purposes.
const minimumLoggerNameLength:number = 3;
// Specifies the maximum logger name length.
const maximumLoggerNameLength:number = 64;

// Checks the validity of your logging parameters. Returns an array of errors found.
// Returned array is empty if no errors are found.
function validateLoggerParameters(loggerName: string, loggingLevels: LogLevel[], loggerOptionsSetup?: LoggerOptions): ValidityErrorCode[]{
    let results: ValidityErrorCode[] = [];
    let nameErrorCode = verifyName(loggerName);
    let loggingLevelsErrorCode = verifyLoggingLevels(loggingLevels);

    if (nameErrorCode !== null){
        results.push(nameErrorCode);
    }
    if (loggingLevelsErrorCode !== null){
        results.push(loggingLevelsErrorCode);
    }
    // If loggerOptionsSetup is provided, check them for errors too.
    // TODO: FINISH Setting this up.
    if (loggerOptionsSetup){
        let loggingOptionsErrorCode = verifyOptions(loggerOptionsSetup);
        results.concat(loggingOptionsErrorCode);
    }
    // Return all of the errors found, if any.
    return results;
}

// Returns null if nothing was wrong.
function verifyName(name: string): ValidityErrorCode | null {
    if (!name){
        return ValidityErrorCode.NameUndefined;
    }
    else if (name.length < minimumLoggerNameLength){
        return ValidityErrorCode.NameTooShort;
    }
    else if (name.length > maximumLoggerNameLength){
        return ValidityErrorCode.NameTooLong;
    }
    return null;
}

// Returns null if nothing was wrong.
function verifyLoggingLevels(loggingLevelArray: LogLevel[]): ValidityErrorCode | null{
    if (!loggingLevelArray){
        return ValidityErrorCode.LoggingLevelsUndefined;
    }
    else if (loggingLevelArray.length < 1){
        return ValidityErrorCode.LoggingLevelsEmpty;
    }
    return null;
}

function verifyOptions(options: LoggerOptions): ValidityErrorCode[] {
    let results: ValidityErrorCode[] = [];
    if (verifyIsOutputting(options) === false){
        results.push(ValidityErrorCode.NoOutput);
    }
    let fileOutputErrorCode = verifyFileOutput(options);
    if (fileOutputErrorCode !== null){
        results.push(fileOutputErrorCode);
    }


    return results;
}

function verifyIsOutputting(options: LoggerOptions): boolean {
    // logToConsole defaults to true if its undefined. The other options here do not.
    if (
        options.logToConsole !== false ||
        options.logToDevTools === true ||
        options.logToFile === true
    ){ return true; }
    return false;
}

function verifyFileOutput(options: LoggerOptions): ValidityErrorCode | null {
    // TODO: Set up this check with proper error codes once the file writer is in place. 
    return null;
}

function verifyTextColors(options: LoggerOptions): ValidityErrorCode | null {
    // TODO: Set this up once text colors are available.
    return null;
}

function verifyTextFont(options: LoggerOptions): ValidityErrorCode | null {
    // TODO: Set this up once text font setting is available.
    return null;
}

function verifyTextSpacing(options: LoggerOptions): ValidityErrorCode | null {
    // TODO: Add it to the list of things I need to set up once styling is available.
    return null;
}

function verifyBackgroundColor(options: LoggerOptions): ValidityErrorCode | null {
    // TODO: See above
    return null;
}

function verifyBackgroundOpacity(options: LoggerOptions): ValidityErrorCode | null {
    // TODO: See above.
    return null;
}