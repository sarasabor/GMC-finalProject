import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

//* Route for /books
router.get('/', async (req, res) => {
    try{
       const books = await Book.find(); //* returns data from database
       res.status(200).json(books);
    }catch(err){
        res.status(500).json({ message: 'Failed to Fetch Books', err});
    }
});

router.post('/upload-book', async(req, res) => {
    try{
        const { 
            title,
            author,
            year, 
            description,
            genre,
            img,
            price,
            oldPrice
        } = req.body;

        const newBook = new Book({title, author, year, description, genre, img, price, oldPrice});

        await newBook.save(); //* the book is saved in the database

        //* now i have to send the response
        res.status(201).json({message: 'Book Added Successfully', book: newBook});

    }catch(err) {
        res.status(500).json({ message: 'Failed to Add Book', err});
    }
})

export default router;