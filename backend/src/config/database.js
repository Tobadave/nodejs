import mongoose from "mongoose";


// async await for allowing the next process to begin
const connectDB = async () => {
    try {
        const conn = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB Connection ${conn.connect.host}`)
    } catch (error) {

    }
}