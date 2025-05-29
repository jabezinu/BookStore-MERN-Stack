import express from "express";
import {PORT, MONGO_URI} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

// JSON parser
app.use(express.json())


// Routes for saving a new Book
app.post('/books', async (req, res) => {
    try {
        if(!req.body.title || !req.body.publishedYear || !req.body.author ){
            res.status(400).send({message: "Send all required fields"})
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear,
        }

        const book = await Book.create(newBook)

        return res.status(201).send(book)        
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
})


// route for Get All Books from database
app.get("/books", async (req, res) => {
    try {
        const books = await Book.find({})

        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})        
    }
})



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