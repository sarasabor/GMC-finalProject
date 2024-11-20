import express from 'express';
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.post('/upload-book', addBook);
router.get('/:id', getBookById);
router.delete('/:id', deleteBook);
router.put('/update/:id', updateBook);

export default router;