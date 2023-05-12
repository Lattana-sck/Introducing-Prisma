const cookieParser = require("cookie-parser");
const express = require("express");

require("dotenv").config();
const app = express();
const port = 3000;

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie middleware
app.use(cookieParser());

const userRouter = require("./routes/userRoutes");

app.use("/api", userRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Prisma Tuto is beginning on port ${port} !`);
});
