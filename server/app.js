import express from "express";
import "dotenv/config";
import indexRouter from "./routes/routes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use("/", indexRouter);

// start server
app.listen(process.env.PORT, () => {
    console.log(`express server running on port ${process.env.PORT}`);
});

// create mongoose connection
mongoose.connect(process.env.CONNECTION_STRING);
const db = mongoose.connection;

db.on("connected", () => {
    console.log("connected to database");
});
db.on("error", (err) => {
    console.log(err);
});