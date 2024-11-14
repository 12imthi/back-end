import express from 'express';
import { addTrip, getAllTripsByType, getByIdTrip, updateTrip, deleteTrip } from '../Controllers/tripController.js';

const router = express.Router();

router.post('/', addTrip); // Create a new trip
router.get('/', getAllTripsByType); // Get all trips by type
router.get('/:id', getByIdTrip); // Get a trip by ID
router.put('/:id', updateTrip); // Update a trip
router.delete('/:id', deleteTrip); // Delete a trip

export default router;
