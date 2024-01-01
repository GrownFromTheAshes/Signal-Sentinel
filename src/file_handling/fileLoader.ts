import * as fs from 'fs/promises';

class FileLoader {
    private path: string;

    constructor (filePath: string){
        this.path = filePath;
    }

    // Get the file asynchronously
    // Will not succeed if the file does not exist, and will wait if the file is currently locked
    // by another operation.
    async LoadFile(encodeResult: boolean): Promise<Buffer | string> {
        const fileData = await fs.readFile(this.path, encodeResult ? 'utf-8' : null);
        //TODO: Lock the file until the operation is complete.
        return fileData;
    }
}