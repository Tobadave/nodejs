import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";

const router = Router();

router.route("/register").post(registerUser); //http method we will be using here

export default router;
