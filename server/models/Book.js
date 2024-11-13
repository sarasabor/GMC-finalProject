
import mongoose from "mongoose";

const schema = mongoose.Schema;

const bookSchema = new schema({
    title : {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true
    },
    year : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    genre : {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    oldPrice : {
        type: Number,
        required: false
    }
}, { timestamps: true});

const Book = mongoose.model('Book', bookSchema, 'books');

export default Book; 