import dotenv from "dotenv"; //allows us to use environment variables in all yur server
import connectDB from "./config/database.js";
import app from "./app.js";

//index.js file is the file that satrts your sderver
dotenv.config({
  path: "./.env", //file path for your environment variable
});

const PORT = process.env.PORT;
const startServer = async () => {
  // = async () => {}
  try {
    await connectDB(); //await connectDB

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(PORT || 8000, () => {
      //by deafult 8000, to make the app listen
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("MongoDb connection failed!!", err);
  }
};

startServer();
