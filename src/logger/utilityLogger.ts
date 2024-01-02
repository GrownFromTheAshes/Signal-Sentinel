// utilityLogger.ts

import { LogLevel } from "./enumerators/logLevelEnums";
import { ValidityErrorCode } from "./enumerators/loggerValidityEnums";

// Specifies the maximum logger name length.
const maximumLoggerNameLength:number = 64;

// Lets you set specific options for the logger. Including any unique styling will
// cause the logger to appear different from the console's applied styling.
interface LoggerOptions {
    // Whether the logger should log to the program console.
    logToConsole?: boolean;
    // Whether the logger should log to the dev tools console.
    logToDevTools?: boolean;
    // Whether the logger should log to a file.
    logToFile?: boolean;
    // Path for the logger to output its text logs to. Defaults to the "logs" folder.
    // If you haven't run the UtilityLogger with "logToFile = true" before, it will create that folder when it
    // begins logging to a file.
    outputFilePath?: string;
    // The text color when logging to the program's console, in hexidecimal format.
    // Also accepts some basic colors: red, yellow, blue, green, gray, white, and black.
    textColor?: string;
    // The font you want to use. If left out, blank, or invalid, text font defaults to the console's settings.
    textFont?: string;
    // The text line spacing you want to use. If left out or invalid (such as a negative number), defaults
    // to the console's settings.
    textLineSpacing?: number;
    // The background color to use when logging to the console. If undefined, no background color is used.
    backgroundColor?: string;
    // The background opacity. 100 is solid, 0 is transparent.
    // If left out or invalid (such as a negative number or a number above 100), defaults to the console's settings. 
    backgroundOpacity?: number;
}

// UtilityLogger is a custom logger for Signal Sentry that makes debugging easier and provides more options for how you want the logger to look, as well as work.
export class UtilityLogger {
    // The name you want your logger to appear with in the console.
    private name: string = "Utility Logger";
    // An array of levels you want to listen for info on.
    // Ie. if you only want to see warnings, only put "LogLevel.Warning".
    // Defaults to "Error" if nothing is provided.
    private logLevels: LogLevel[] = [LogLevel.Error];
    private options: LoggerOptions = {
        logToConsole: true,
        logToDevTools: true,
        logToFile: false,
        outputFilePath: "",
        textColor: "black",
        textFont: undefined,
        textLineSpacing: -1,
        backgroundColor: undefined,
        backgroundOpacity: -1
    }
    
    // Create a basic logger. You set up the rest of the options
    // using the "options" method.
    constructor (loggerName: string, loggingLevels: LogLevel[], loggerOptionsSetup?: LoggerOptions){
        // TODO: Make sure loggerName is valid (under 64 characters) and 
        // the loggingLevels are valid.
        if (loggerName.length < 65){
            this.name = loggerName;
        } else {
            // TODO: Throw an error in the logger after startup when the
            // logger name is too long.
            this.name = "LoggerNameWasTooLong"
        }
        this.logLevels = loggingLevels;
        
    }

    // Determines whether the given parameters for a UtilityLogger will pass BEFORE you create it, using the same internal checks.
    // Returns an array of errors that occured. The array will be empty if all checks passed.
    public static verifyParameters(loggerName: string, loggingLevels: LogLevel[], loggerOptionsSetup?: LoggerOptions): ValidityErrorCode[] {
        let results: ValidityErrorCode[] = [];
        const nameVerificationResult = this.verifyName(loggerName);
        if (nameVerificationResult !== null){
            results.push(nameVerificationResult);
        }
        if (loggingLevels.length < 1){
            results.push(ValidityErrorCode.LoggingLevelsEmpty);
        }
        const outputVerificationResult = this.verifyOutputPath(loggerOptionsSetup);
        if (outputVerificationResult !== null){
            results.push(outputVerificationResult);
        }
        
        return results;
    }

    private static verifyName(loggerName: string): ValidityErrorCode | null {
        if (!loggerName){
            return ValidityErrorCode.NameUndefined;
        }
        else if (loggerName.length < 1){
            return ValidityErrorCode.NameTooShort;
        }
        else if (loggerName.length > maximumLoggerNameLength){
            return ValidityErrorCode.NameTooLong;
        }
        return null;
    }

    private static verifyOutputPath(options: LoggerOptions): ValidityErrorCode | null {
        //TODO: Check output path here with file handler.
        return null;
    }
    
    private static verifyTextColor(textColorValue: string): ValidityErrorCode | null {
        //TODO: Check for colors once that's implemented.
        return null;
    }

}