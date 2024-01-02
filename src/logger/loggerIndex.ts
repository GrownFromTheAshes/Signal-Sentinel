import { LogLevel } from "src/enumerators/logLevelEnums";
import { UtilityLogger } from "./utilityLogger";

// Utility class used for setting up UtilityLogger objects and activating them.
// You can set up as many UtilityLoggers as you want, but they CAN override each other.
// See the documentation on UtilityLoggers for more details.
// TODO: Don't forget to write that documentation, Ash. 

// Creates a new Logger with the UtilityLogger class. It's recommended you call this instead of creating a UtilityLogger directly.
function CreateLogger(loggerName: string, loggingLevels: LogLevel[]): UtilityLogger {
    var result: UtilityLogger = new UtilityLogger(loggerName, loggingLevels);
    return result;
}

// Uses utilityLogger's "verifyIntegrity" function to ensure everything is valid.
function VerifyLoggerSetup(loggerName: string, loggingLevels: LogLevel[]): boolean {
    UtilityLogger.verifyWillPass();
    return true;
}