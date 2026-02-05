import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Loads MIRLDOTCOM/.env (one level above /backend)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import bikeRoutes from "./routes/bikes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/bikes", bikeRoutes);

app.get("/", (req, res) => {
  res.send("MIRLDOTCOM Bicycle API running");
});

app.listen(4000, () => console.log("Server running on port 4000"));
