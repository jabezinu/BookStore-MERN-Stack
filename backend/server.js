import express from "express";
import {PORT, MONGO_URI} from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
    return res.status(234).send("Welcome to MERN Stack Tutorial.")
});


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