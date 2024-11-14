import express from 'express';
import { loginUser,registerUser,logoutUser } from '../Controllers/userController.js';

const router = express.Router();

// Route to create a new user


router.post('/register', registerUser); // Register new user
router.post('/login', loginUser);       // Login user
router.post('/logout', logoutUser);  


export default router;