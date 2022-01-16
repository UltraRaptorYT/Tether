import express from "express";
import { searchRouter } from "./routes/stickerSearch.js";
import { authenticateToken } from "../auth/authorizeToken.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8000/123",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.options("*", cors());
app.use(cors({ origin: "*" }));

app.post("/user/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  user.loginUser(email, password, function (err, token, result) {
    if (!err) {
      res.set("Access-Control-Allow-Origin", "http://localhost:8000");
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      delete result[0]["password"]; //clear the password in json data, do not send back to client
      console.log(result);
      res.json({
        success: true,
        UserData: JSON.stringify(result),
        token: token,
        status: "You are successfully logged in!",
      });
      res.send();
    } else {
      res.status(500);
      res.json({ message: err.statusCode });
    }
  });
});

// will need to add auth middleware later
app.use("/sticker/search", searchRouter);

app.post("/login", (req, res) => {
  // authenticate user
  // const { username } = req.body;
  // const user = { username: username };
  // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  // res.json({ access_token: accessToken });
});

app.all("*", (req, res) => {
  res.sendStatus(405);
});

export { app };
