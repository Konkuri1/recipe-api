import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import recipesRoutes from "./routes/recipes.router.js";

//Load env variables
dotenv.config({ path: [".env.local"] });

//Create express app
const app = express();

//make database connection
await mongoose.connect(process.env.MONGO_URI);

// Use routes
app.use("/", recipesRoutes);

//Listen for incoming request
app.listen(6000, () => {
  console.log(`Express app is runnig!`);
});
