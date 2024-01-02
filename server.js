import express from "express";
import connectdb from "./db/db.js";
import userRouter from "./modules/users/users.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json()); // This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
                        // req.body accept garna lai yo line use gareko ho

app.use("/users", userRouter);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

// Connect to MongoDB
connectdb();