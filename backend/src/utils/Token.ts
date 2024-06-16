import { Response } from "express";

// Sends a JWT token along with a success response
export const sendToken = (user: any, statusCode: number, res: Response) => {
  // Get the JWT token from the user object
  const token = user.getJwtToken();

  // Retrieve the JWT cookie expiry time from environment variable
  const timeString = process.env.JWT_COOKIE_EXPIRES_TIME;

  // Ensure the environment variable is defined
  if (!timeString) {
    throw new Error('JWT_COOKIE_EXPIRES_TIME is not defined in environment variables');
  }

  // Convert the expiry time string to a number
  const time = parseInt(timeString, 10);

  // Validate that the expiry time is a valid number
  if (isNaN(time)) {
    throw new Error('JWT_COOKIE_EXPIRES_TIME is not a valid number');
  }

  // Create cookie options with expiry and httpOnly flag
  const options = {
    expires: new Date(Date.now() + time * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  // Set the response status code and cookie
  res.status(statusCode).cookie("token", token, options);

  // Send a JSON response with success, token, and user data
  res.json({
    success: true,
    token,
    user,
  });
};
