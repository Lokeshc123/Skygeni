import User from "../models/User"; // Importing the User model
import { Request, Response } from "express"; // Importing Request and Response types from Express
import bcrypt from "bcryptjs"; // Importing bcrypt for hashing passwords
import { sendToken } from "../utils/Token"; // Importing custom function sendToken for JWT handling

// Controller function for user registration
export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body; // Extracting name, email, and password from request body

        // Checking if user with the same email already exists
        const userExists = await User.findOne({ email });

        // If user with the same email exists, return error response
        if (userExists) {
            return res.status(400).json({
                status: 'error',
                message: 'User already exists'
            });
        }

        // Hashing the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creating a new user in the database with hashed password
        const user = await User.create({ name, email, password: hashedPassword });

        // Sending JWT token as a response for successful registration
        sendToken(user, 201, res);
    }
    catch (error: any) {
        // Handling any errors that occur during registration process
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

// Controller function for user login
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body; // Extracting email and password from request body

        // Finding the user by email in the database
        const user = await User
            .findOne({ email })
            .select('+password'); // Selecting password explicitly to compare later

        // If user with the provided email does not exist, return error response
        if (!user) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid credentials'
            });
        }

        // Comparing the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // If passwords do not match, return error response
        if (!isMatch) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid credentials'
            });
        }

        // Sending JWT token as a response for successful login
        sendToken(user, 200, res);
    }
    catch (error: any) {
        // Handling any errors that occur during login process
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}
