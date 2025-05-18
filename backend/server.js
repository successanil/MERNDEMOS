// entry point for api
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import { printLog, printError } from "./util/Utils.js";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", productRoutes);

printLog(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  printLog(`Server started at http://localhost:${PORT}`);
});
