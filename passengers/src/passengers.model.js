const { model, Schema } = require("mongoose");

const passengerModel = new Schema({
    firstName: { type: String},
    lastName: { type: String},
    destination: { type: String},
    vehicle: { type: String },
    nextOfKinPhoneNumber: { type: String},
    address: { type: String}
})

module.exports = model("passengerModel", passengerModel)
