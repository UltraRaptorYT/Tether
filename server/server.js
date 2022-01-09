require("dotenv").config();
// const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/stickers/trending", async (req, res) => {
  res.status(200).send("Hi");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
