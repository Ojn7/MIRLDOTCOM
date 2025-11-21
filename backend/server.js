import dotenv from "dotenv";
dotenv.config(); // load env FIRST

import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5100;

// simple route
app.get("/", (req, res) => {
  res.send("Server is ready");
});

// connect to DB BEFORE starting the server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`✅ Server started at http://localhost:${PORT}`);
  });
};

startServer();
