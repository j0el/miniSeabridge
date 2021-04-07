
let { Dwelling } = require('./dwelling.model.js');
let { Resident } = require('./resident.model.js');
let { Vehicle } = require('./vehicle.model');

exports.models = {
    'Vehicle': Vehicle,
    'Dwelling': Dwelling,
    'Resident': Resident
};