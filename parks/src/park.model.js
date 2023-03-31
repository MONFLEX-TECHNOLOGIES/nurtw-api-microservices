const { model, Schema } = require("mongoose");

let parkSchema = new Schema({
    state: { type: String },
    localGovernment: { type: String },
    parkName: { type: String },
    address: { type: String },
})

module.exports = model("parkSchema", parkSchema)