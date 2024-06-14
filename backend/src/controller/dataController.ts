import {promises as fs} from 'fs';
import path from 'path';
import { Request, Response } from 'express';


// Declared a common function to read data from the file
const readData =  async (filename : string) => {
    const filePath = path.join(__dirname , "../data" , filename);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

// Made a common controller function to get data from the file based on filename that it gets from the request

 export const getData = async (req : Request , res : Response) =>{
    try {
        const response = await readData(req.params.filename);
        res.status(200).json({
            status : 'success',
            data : response
        });
    } catch (error : any) {
        res.status(500).json({
            status : 'error',
            message : error.message
        });
    }
}

