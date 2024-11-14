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

        // console.log(req.body);

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
});

//* route to get single book
router.get('/:id', async (req, res) => {
    try{
        // console.log(req.params.id); //* The id is the dynamic value
        // const id = req.params.id

        //* with destructuring
        const { id } = req.params;
        const book = await Book.findById(id);

        //* case if book not Found
        if(!book) return res.status(404).json({message: 'Book Not Found'});
        
        res.status(200).json(book);

    }catch(error) {
        res.status(500).json({message: 'Failed To Fetch Book', error});
    }
});

router.delete('/:id', async (req, res)=>{
   try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);

      if(!deletedBook) return res.status(404).json({message : "Book not found!!"});

      res.status(200).json({mesage : "Book is deleted"});
      
   } catch (error) {
      res.status(500).json({message : "Failed To Delete", error});
   }
});

//* Route to update book 
router.put('/:id', async (req, res) => {
    // console.log(req.params, req.body);
    //* get the book by its id 
    //* then change the values in the body 
    //* then send the response to the client

    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body);
        if(!book) return res.status(404).json({message: 'Book Not Found'});

        res.status(200).json({message: 'Book Updated Successfully', book});
    }catch(error){
        res.status(500).json({message: 'Failed To Fetch Book', error});
    }
})
export default router;