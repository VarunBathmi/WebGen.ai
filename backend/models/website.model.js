import mongoose from "mongoose";

// const messageSchema = new mongoose.Schema({
//   role: {
//     type: String,
//     enum: ["user", "ai"],
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
// });

// const websiteSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     title: {
//       type: String,
//       default: "Untitled Website",
//     },
//     latestCode: {
//       type: String,
//       required: true,
//     },

//     // ✅ Sahi — array hona chahiye
//     conversation: [messageSchema],
//     deployed: {
//       type: Boolean,
//       default: false,
//     },
//     deployUrl: {
//       type: String,
//     },
//     slug: {
//       type: String,
//       unique: true,
//     },
//   },
//   { timestamps: true },
// );
const messageSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "assistant"], // ✅ fix
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const websiteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, default: "Untitled Website" },
    latestCode: { type: String, required: true },
    conversation: [messageSchema], // ✅ fix
    deployed: { type: Boolean, default: false },
    deployUrl: { type: String },
    slug: { type: String, unique: true },
  },
  { timestamps: true },
);

const Website = mongoose.model("Website", websiteSchema);
export default Website;
