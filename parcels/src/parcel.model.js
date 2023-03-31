const { model, Schema } = require("mongoose");

const parcelSchema = new Schema({
    sendingFrom: { type: String },
    senderPhoneNumber: { type: String },
    senderAddress: { type: String },
    receiverPhoneNumber: { type: String },
    destination: { type: String },
    vehicle: { type: String},
    contents: { type: Array }
})

module.exports = model("parcelSchema", parcelSchema)