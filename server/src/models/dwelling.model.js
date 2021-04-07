const mongoose = require('mongoose');

const dwellingSchema = new mongoose.Schema({
  address: String,
  subHOA: String,
  resident: [{
    id: String
  }],
  vehicle: [{
    id: String,
    resident: [{
      id: String
    }]
  }]

});
const Dwelling = mongoose.model(
  'Dwelling',
   dwellingSchema
   );
   
exports.Dwelling = Dwelling;
