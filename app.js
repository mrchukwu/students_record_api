const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/database");


const app = express();
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/authRoute");
const studentRouter = require("./routes/studentRoute");

app.use("/", authRouter);
app.use("/", studentRouter);


const PORT = process.env.PORT || 3001;
connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection falied: " + err.message);
  });
