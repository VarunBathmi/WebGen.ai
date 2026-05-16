// export const getCurrentUser = async (req, res) => {
//   try {
//     if (!req.user) {
//       return res.json({ user: null });
//     }
//     return res.json(req.user);
//   } catch (error) {
//     return res.status(500).json({ message: `get current user error ${error}` });
//   }
// };



import User from "../models/user.model.js";
import  generateResponse from "../config/openRouter.js";
export const getCurrentUser = async (req, res) => {
  try {
    // req.user is already set by isAuth middleware (password excluded)
    return res.status(200).json(req.user);
  } catch (error) {
    console.error("getCurrentUser error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
export const generatedemo = async (req, res) => {
  try {
    const result = await generateResponse("Hello");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};
