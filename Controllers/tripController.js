import Trip from "../Models/tripSchema.js";

export const addTrip = async (req, res) => {
    try {
      const { tripName, description, date, distance, tripType, userId } = req.body;
      if (!['one-way', 'round-trip', 'outstation'].includes(tripType)) {
        return res.status(400).json({ message: 'Invalid trip type' });
      }
      const newTrip = new Trip({ tripName, description, date, distance, tripType, userId });
      await newTrip.save();
      res.status(201).json(newTrip);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Get all trips for a user
export const getAllTrip = async (req, res) => {
    // console.log(res);
  try {
    const trips = await Trip.find({ userId: req.userId });
    console.log('trips', trips);
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific trip by ID
export const getAllTripsByType = async (req, res) => {
    const { type } = req.query; // Retrieve the type from the query parameters
  
    try {
      // Check if type is provided, and if it's a valid trip type
      if (!type || !["one-way", "round-trip", "outstation"].includes(type)) {
        return res.status(400).json({ message: "Invalid or missing trip type" });
      }
  
      // Fetch trips that match the specified type
      const trips = await Trip.find({ tripType: type });
      res.status(200).json(trips);
    } catch (error) {
      res.status(500).json({ message: "Error fetching trips", error });
    }
  };

  // Get a specific trip by ID
export const getByIdTrip = async (req, res) => {
    try {
      const trip = await Trip.findById(req.params.id);
      if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
      }
      res.status(200).json(trip);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Update a trip
export const updateTrip = async (req, res) => {
    try {
      const { tripType } = req.body;
      if (tripType && !['one-way', 'round-trip', 'outstation'].includes(tripType)) {
        return res.status(400).json({ message: 'Invalid trip type' });
      }
      const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedTrip);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Delete a trip
export const deleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Trip deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
