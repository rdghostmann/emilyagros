import mongoose, { Schema, Document, models } from "mongoose";

const ReviewSchema = new Schema(
    {
        reviewer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: {
            type: Number,
            default: 0
        },
        avatar: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comment: {
            type: String,
        },
        date: {
            type: Date,
        },
        verified: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true,
    }
);

// Prevent model overwrite issue in dev
const Review = models?.Review || mongoose.model("Review", ReviewSchema);
export default Review;
