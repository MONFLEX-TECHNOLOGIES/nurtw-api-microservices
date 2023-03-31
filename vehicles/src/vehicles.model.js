const { model, Schema } = require("mongoose");

const vehicleScheme = new Schema({
    brand: { type: String},
    model: { type: String},
    plateNumber: { type: String},
    driver: { type: String},
    particulars: { type: String},
    seats: { type: Number},
    color: { type: String},
    chasisNumber: { type: String}
});

module.exports = model("vehicleScheme", vehicleScheme);
