// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";
// const isAuth = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(400).json({ message: "token not found" });
//     }
//     const decoded = await jwt.verify(token, process.env.JWT_SECRET);
//     req.user=await User.findById(decoded.id)
//     next()
//   } catch (error) {

//       return res.status(400).json({ message: "Invalid token " });

//   }
// };
// export default isAuth

import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const isAuth = async (req, res, next) => {
  try {
    console.log("Cookies:", req.cookies);

    const token = req.cookies.token;

    console.log("Token:", token);

    if (!token) {
      return res.status(400).json({
        message: "token not found",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded:", decoded);

    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      message: "Invalid token",
    });
  }
};

export default isAuth;

// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";

// const isAuth = async (req, res, next) => {
//   try {
//     const token = req.cookies?.token;

//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "Not authenticated. Please log in." });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id).select("-password");

//     if (!user) {
//       return res
//         .status(401)
//         .json({ message: "User not found. Please log in again." });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       return res
//         .status(401)
//         .json({ message: "Session expired. Please log in again." });
//     }
//     if (error.name === "JsonWebTokenError") {
//       return res
//         .status(401)
//         .json({ message: "Invalid token. Please log in again." });
//     }
//     console.error("isAuth error:", error);
//     return res.status(500).json({ message: "Internal server error." });
//   }
// };

// export default isAuth;
