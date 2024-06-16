import { promises as fs } from 'fs'; // Importing promises version of fs module for async file operations
import path from 'path'; // Importing path module for working with file and directory paths
import { Request, Response } from 'express'; // Importing Request and Response types from Express

// Declared a common function to read data from the file
const readData = async (filename: string) => {
    // Constructing the file path based on filename provided in the parameter
    const filePath = path.join(__dirname, "../data", filename);
    
    // Using fs.readFile from promises API to asynchronously read file contents
    const data = await fs.readFile(filePath, 'utf-8');
    
    // Parsing the file content assuming it contains JSON data
    return JSON.parse(data);
}

// Common controller function to get data from the file based on filename obtained from request parameter
export const getData = async (req: Request, res: Response) => {
    try {
        // Calling readData function with filename obtained from request parameters
        const response = await readData(req.params.filename);
        
        // Sending a success response with status 200 and JSON data retrieved from the file
        res.status(200).json({
            status: 'success',
            data: response
        });
    } catch (error: any) {
        // Handling any errors that occur during file reading or JSON parsing
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}
