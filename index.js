const express = require("express");
require("dotenv").config();
const todoRoutes = require("./routes/todo");

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

app.use("/api/v1", todoRoutes); // mount the todo API routes

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send("Hello Todo!");
});

// server start
app.listen(PORT, () => {
  console.log("Server is Running on : ", PORT);
});
