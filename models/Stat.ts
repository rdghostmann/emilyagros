import mongoose, { Schema, Document, models } from "mongoose";

const StatSchema = new Schema(
    {
        views: {
            type: Number,
            default: 0
        },
        favorites: {
            type: String,
        },
        adId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
    },
    {
        timestamps: true,
    }
);

// Prevent model overwrite issue in dev
const Stat = models?.Stat || mongoose.model("Stat", StatSchema);
export default Stat;
