import mongoose, { Schema, Document, models } from "mongoose";

const ProductSchema = new Schema(
    {
        adId: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            default: 0
        },
        originalPrice: {
            type: Number,
            default: 0
        },
        negotiable: {
            type: Boolean,
            default: false
        },
        condition: {
            type: String,
            enum: ["New", "Old", "inStock"],
            default: "",
        },
        location: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        subcategory: {
            type: String,
            default: "",
        },
        boosted: {
            type: Boolean,
            default: false
        },
        images: {
            type: Array,
            default: []
        },
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        stats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Stats'
        }
    },
    {
        timestamps: true,
    }
);

// Prevent model overwrite issue in dev
const Product = models?.Product || mongoose.model("Product", ProductSchema);
export default Product;
