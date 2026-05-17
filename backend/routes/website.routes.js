import express from "express";
import isAuth from "../middlewares/isAuth.js";
import {
  chnages,
  generateWebsite,
  getAll,
  getWebsiteById,
} from "../controller/website.controller.js";

const websiteRouter = express.Router();

websiteRouter.post("/generate", isAuth, generateWebsite);
websiteRouter.post("/update/:id", isAuth, chnages);
websiteRouter.get("/get-by-id/:id", isAuth, getWebsiteById);
websiteRouter.get("/get-all", isAuth, getAll);
// websiteRouter.get("/add-credits", isAuth, async (req, res) => {
//   const User = (await import("../models/user.model.js")).default; // ✅ .default add karo
//   const user = await User.findById(req.user._id);
//   user.credits = 500;
//   await user.save();
//   return res.json({ message: "credits added", credits: user.credits });
//});

export default websiteRouter;
