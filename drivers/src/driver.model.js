const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt")
const driverModel = new Schema({
    firstName: { type: String, },
    lastName: { type: String, },
    userName: { type: String, },
    password: { type: String, },
    vehicle: { type: String, },
    phoneNumber: { type: String },
    biometricInformation: { type: String },
    driversLicense: { type: String },
});

driverModel.pre("save", async function (next) {
    let salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

module.exports = model("driverModel", driverModel)
