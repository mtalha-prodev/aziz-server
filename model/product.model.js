import mongoose, { Schema } from "mongoose";

const productSchema = Schema({
  product_name: String,

  product_img: {
    type: String,
    default: "avator.png",
  },

  title: String,
  description: String,
  discount: Number,
  price: Number,
  final_price: Number,
  qty: Number,
  rate: [
    {
      userId: String,
      rating: Number,
    },
  ],
  category: String,
  brand: String,
  status: { type: String, default: "active" },
  order: [
    {
      userId: String,
      qty: Number,
      order_date: { type: Date, default: Date.now },
      delivery_status: {
        type: String,
        enum: ["pending", "shipping", "delivered"],
        default: "pending",
      },
    },
  ],
  delivery: [
    {
      userId: String,
      delivery_date: Date,
      customer_status: [
        {
          userId: String,
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: "pending",
        },
      ],
    },
  ],

  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

export default mongoose.model("product", productSchema);
