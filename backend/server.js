import express from "express";
import {PORT, MONGO_URI} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

// JSON parser
app.use(express.json())



mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("App connected to database")
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    });