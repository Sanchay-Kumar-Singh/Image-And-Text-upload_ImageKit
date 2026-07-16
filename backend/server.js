require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");
require("dotenv").config();
const app = express();

connectDB();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});