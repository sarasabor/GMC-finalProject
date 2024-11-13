// const express = require('express');

import express from 'express'

import mongoose from 'mongoose'

import cors from 'cors'

import dotenv from 'dotenv';

import bookRoutes from './routes/bookRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:3000'
}));

//* middlewares for routing 
app.use('/books', bookRoutes);

const port = process.env.PORT || 5001;
const dbUrl = process.env.MONGO_URL;

mongoose.connect(dbUrl).then(()=>{
    app.listen(port, () => {
    console.log('Server is Running on port '+ port)
});
}).catch((err)=>{
    console.log(err);
});

app.get('/', (req, res) => {
    //* sending response to home page
});