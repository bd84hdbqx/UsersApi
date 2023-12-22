const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const MainRoute = require("./routers/index.js");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connect");
  } catch (error) {
    console.log("error");
  }
};

app.use("/api", MainRoute);
app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
