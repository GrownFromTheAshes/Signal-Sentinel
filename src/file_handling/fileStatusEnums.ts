// This status is used for reading and writing files.
export enum FileStatus {
    Success,
    DoesNotExist,
    NoReadAccess,
    NoWriteAccess,
    UnknownError
}