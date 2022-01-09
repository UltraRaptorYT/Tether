require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require("./app/routes");

app.use(
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes
);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
