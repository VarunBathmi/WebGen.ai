import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
  connectDb();
});

// import express from "express";
// import dotenv from "dotenv";
// import connectDb from "./config/db.js";
// import authRouter from "./routes/auth.routes.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import userRouter from "./routes/user.routes.js";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(cookieParser());

// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:5174",
//   "http://localhost:3000",
//   process.env.CLIENT_URL, // add your deployed frontend URL in .env
// ].filter(Boolean);

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // allow requests with no origin (mobile apps, curl, Postman)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.includes(origin)) return callback(null, true);
//       return callback(new Error(`CORS blocked: ${origin}`));
//     },
//     credentials: true,
//   }),
// );

// // health check
// app.get("/", (req, res) => res.json({ status: "ok" }));

// app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);

// // global error handler
// app.use((err, req, res, next) => {
//   console.error("Unhandled error:", err.message);
//   res.status(500).json({ message: "Internal server error." });
// });

// app.listen(port, () => {
//   console.log(`✅ Server running on http://localhost:${port}`);
//   connectDb();
// });
