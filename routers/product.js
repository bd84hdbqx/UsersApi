const express = require("express");
const router = express.Router();
const Products = require("../models/productmodels");

// post
router.post("/", async (req, res) => {
  const postElem = req.body;
  const newPost = new Products(postElem);
  await newPost.save();
  res.send(newPost);
});
//get all
router.get("/", async (req, res) => {
  const allProduct = await Products.find();
  res.send(allProduct);
});
//get by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const products = await Products.findById(id);
  res.send(products);
});
// delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const products = await Products.findByIdAndDelete(id);
  res.send(products);
});
// put
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const elem = req.body;
  const updates = await Products.replaceOne({ _id: id }, elem);
  res.send(updates);
});
// patch;
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const elem = req.body;
  const updates = await Products.findOneAndUpdate({ _id: id }, elem, {
    new: true,
  });
  res.send(updates);
});

module.exports = router;
