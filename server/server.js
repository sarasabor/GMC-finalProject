import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();

const app = express();

//* MIDDLEWARES 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000'
}));

//* MIDDLEWARE FOR ROUTING 
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 5001;

const databaseUrl = process.env.MONGO_URL;

//* connection to database if it's correct then the server is gonna be working;
mongoose.connect(databaseUrl)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is Running Successfully on Port : ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })