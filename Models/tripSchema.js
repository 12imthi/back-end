// src/models/trip.model.js
import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  tripName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
    required: true,
  },
}, {
  timestamps: true,
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
