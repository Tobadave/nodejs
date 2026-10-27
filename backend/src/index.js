import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("MongoDb connection failed!!", err);
  }
};

startServer();
