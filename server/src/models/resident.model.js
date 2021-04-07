//resident = vehicle
const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    middleName: String,
    dwellingID: String,
    phone: String,
    password: String,
    vehicleID: String,
    residentType: { 
        type: String, 
        enum : ['owner','tennant', 'guest', 'permanent'], 
        default: 'user' 
        }, 
});

const Resident = mongoose.model('resident', residentSchema);

exports.Resident = Resident;