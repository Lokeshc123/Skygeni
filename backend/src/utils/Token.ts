import { Response } from "express";

export const sendToken = (user: any, statusCode: number, res: Response) => {
  const token = user.getJwtToken();
  const timeString = process.env.JWT_COOKIE_EXPIRES_TIME;
  
  if (!timeString) {
    throw new Error('JWT_COOKIE_EXPIRES_TIME is not defined in environment variables');
  }
  
  const time = parseInt(timeString, 10);
  
  if (isNaN(time)) {
    throw new Error('JWT_COOKIE_EXPIRES_TIME is not a valid number');
  }

  const options = {
    expires: new Date(
      Date.now() + time * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};
