const express = require("express");
const router = express.Router();

const ProducRouter = require("./product.js");
router.use("/product", ProducRouter);

module.exports = router;
