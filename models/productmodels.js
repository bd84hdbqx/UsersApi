const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isPublic: { type: Boolean, required: true },
    posts: [
      {
        id: { type: String },
        img: { type: String },
        title: { type: String },
      },
    ],
    follower: { type: Array },
    following: { type: Array },
    blockList: { type: Array },
    stories: { type: Array },
    notification: { type: Array },
    bio: {
      info: { type: String },
      country: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("product", ProductSchema);
module.exports = Products;
