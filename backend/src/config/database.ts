import mongoose from "mongoose";

// Connects to the MongoDB database asynchronously
export const connect = async () => {
  try {
    // Retrieve MongoDB connection URL from environment variable
    const mongoUrl = process.env.MONGO_URL;

    // Ensure URL exists before connection
    if (!mongoUrl) {
      throw new Error("MongoDB URL is not provided");
    }

    // Connect to MongoDB database using Mongoose
    await mongoose.connect(mongoUrl, {});

    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed");
    console.error(error);
  }
};
