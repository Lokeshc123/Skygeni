import mongoose from "mongoose";


export const connect = async () => {
  try {
    const mongo_url = process.env.MONGO_URL;
    if (!mongo_url) {
      throw new Error("MongoDB URL is not provided");
    }
    await mongoose.connect(mongo_url, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed");
    console.error(error);
  }
};