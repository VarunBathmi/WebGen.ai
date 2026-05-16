import express from "express";
import { generatedemo, getCurrentUser } from "../controller/user.controller.js";
import isAuth from "../middlewares/isAuth.js";
const userRouter = express.Router();

userRouter.get("/me", isAuth, getCurrentUser);
userRouter.get("/gen", generatedemo);

export default userRouter;
