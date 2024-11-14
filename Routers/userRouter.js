// routes/userRoutes.js
import express from 'express';
import User from '../models/userSchema.js';
import jwt from 'jsonwebtoken';



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  };


const router = express.Router();

// Route to create a new user
router.post('/', async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Create a new user and save to database
    const newUser = new User({ username, email, password, role });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Error creating user', error });

  }
});

// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          username: user.username,
          email: user.email,
          token: generateToken(user._id),
        });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
        console.log(error)
      res.status(500).json({ message: 'Error logging in user', error });
    }
  });

export default router;
