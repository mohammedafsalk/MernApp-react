const express = require("express");
const cors = require("cors");
const { json } = require("json-server");
const MongoStore = require("connect-mongo");
const dbConnect = require("./dbConnect");
const userRouter = require('./Routes/userRouter')
const trackRouter = require('./Routes/trackRouter')
require("dotenv").config();

dbConnect();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/track", trackRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
