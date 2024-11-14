// src/routes/tripRoutes.js
import express from 'express';
import { addTrip,getAllTrip,getByIdTrip,updateTrip,deleteTrip } from '../Controllers/tripController.js';


const router = express.Router();

router.post('/addtrip',addTrip);
router.get('/getall',getAllTrip);
router.get('/get-trip/:id',getByIdTrip);
router.put('/update-trip/:id',updateTrip);
router.delete('delete-trip/:id',deleteTrip);






export default router;
