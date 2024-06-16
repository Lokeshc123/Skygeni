import User from "../models/User";
import { Request, Response } from "express";
import bcrypt from "bcryptjs"
import { sendToken } from "../utils/Token";

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        const hashedPassword = await bcrypt.hash(password, 10);
        if (userExists) {
            return res.status(400).json({
                status: 'error',
                message: 'User already exists'
            });
        }
        const user = await User.create({ name, email, password : hashedPassword });
        sendToken(user, 201, res);  
    }
    catch (error : any) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User
            .findOne({ email })
            .select('+password');
        if (!user) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid credentials'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid credentials'
            });
        }
       sendToken(user, 200, res);
    }
    catch (error : any) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}