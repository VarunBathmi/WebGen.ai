import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    avatar:{
        type:String
    },
    credits:{
        type:Number,
        default:100,
        min:0
    },
    plan:{
        type:String,
        enum:["free","pro","enterprise"],
        default:"free"
    }
},{timestamps:true})
const User=mongoose.model("User",userSchema)

export default User


// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       default: null, // null for Google OAuth users
//     },
//     avatar: {
//       type: String,
//     },
//     credits: {
//       type: Number,
//       default: 100,
//       min: 0,
//     },
//     plan: {
//       type: String,
//       enum: ["free", "pro", "enterprise"],
//       default: "free",
//     },
//   },
//   { timestamps: true },
// );

// // Hash password before saving (only if modified)
// userSchema.pre("save", async function () {
//   // If password wasn't modified or doesn't exist, just return to continue
//   if (!this.isModified("password") || !this.password) return;

//   // Otherwise, hash the password
//   this.password = await bcrypt.hash(this.password, 10);
// });

// // Compare plain password with hashed
// userSchema.methods.comparePassword = async function (plainPassword) {
//   return bcrypt.compare(plainPassword, this.password);
// };

// const User = mongoose.model("User", userSchema);
// export default User;
