import express from "express";

const app = express();

app.use(express.json());

import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

export default app;
