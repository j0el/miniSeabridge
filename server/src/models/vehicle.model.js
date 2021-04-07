// book = vehicle
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  plate: String,
  state: String,
  color: String,
  year: Number,
  residentId: String,
  dwellingId: String,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

exports.Vehicle = Vehicle;
