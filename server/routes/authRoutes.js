
import express from 'express';
import { loginPost, signUpPost } from '../controllers/authController.js';

const router = express.Router();


router.post('/sign-up', signUpPost);

router.post('/login', loginPost);

export default router;