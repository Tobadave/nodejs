import mongoose, { connect, mongo } from "mongoose";

// async await for allowing the next process to begin
const connectDB = async () => {
  //   try {
  //     // make an i nstant to callthe cnnect of mongose
  //     const conn = await mongoose.connect(`${process.env.MONGODB_URI}`); //connect to -> link MONGODB_URI
  //     console.log(`\n MongoDB Connected Successfully!!
  //             ${conn.connect.host}`);
  //   } catch (error) {
  //     console.log("MongoDb connection failed", error);
  //     process.exit(1); //1 exit number means
  //   }

  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}`);

    console.log(`MongoDB Connected Succesfully!! 
        ${conn.connect.host}`);
  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;

// indexedDB.js ids the  file that lets you start yoru server
