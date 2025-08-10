import mongoose, { Schema, Document, models } from "mongoose";

const UserSchema = new Schema(
  {
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    description: {
      type: String,
      required: false,
    },
    businessHours: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      default: "", // not false
    },
    verified: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    listedProducts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
    walletBalance: {
      type: Number,
      default: 0
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    },
    joinedDate: {
      type: Date,
      default: Date.now,
    },
    totalSales: {
      type: Number,
      default: 0,
    },
    totalAds: {
      type: Number,
      default: 0,
    },
    purchases: {
      type: Number,
      default: 0,
    },
    profileViews: {
      type: Number,
      default: 0,
    },
    followers: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
    },
    responseTime: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    zipCode: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite issue in dev
const User = models?.User || mongoose.model("User", UserSchema);
export default User;
