import express from "express";
const app = express();
//import another libraries as well
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

// app.get("/users", (req, res) => {
//   res.send("welcome to users");
// });

//this will be the port
app.listen(8800, () => {
  console.log("backend server is running!");
});
