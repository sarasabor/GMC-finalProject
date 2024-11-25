
import express from 'express';
import { loginGet, loginPost, signUpGet, signUpPost } from '../controllers/authController.js';

const router = express.Router();

router.get('/sign-up', signUpGet);

router.post('/sign-up', signUpPost);

router.get('/login', loginGet);

router.post('/login', loginPost);

export default router;