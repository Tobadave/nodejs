import express from "express";

const app = express();

app.use(express.json());

import userRouter from "./routes/user.route.js";
// import postRouter from "./routes/post.route.js";

//route use
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/users", postRouter)

export default app;
