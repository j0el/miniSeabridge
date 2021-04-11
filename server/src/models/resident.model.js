const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
  name: { type: String, },

  dwellings: [{
    status: {String, enum: ['Owner', 'Renter', 'Guest']}, 
    address: String,
    subHOA: {String,enum:['Marluna', 'Island', 'Oceano', '121', 'Docks']},
  }],

  vehicles: [{
    make: String,
    model: String,
    color: String,
    year: Number,
    plate: String
  }]
})

const Resident = mongoose.model(
  'Resident',
  residentSchema
);

exports.Resident = Resident;