import express from "express";
import {PORT} from "./config.js";

const app = express();

app.get('/', (req, res) => {
    return res.status(234).send("Welcome to MERN Stack Tutorial.")
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})