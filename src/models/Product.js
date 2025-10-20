import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;
