const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
let userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String, },
    password: { type: String },
    userType: { type: String, enum: ["regular", "admin", "superAdmin"], default: "regular" },
    park: { type: String },
    position: { type: String },
    phoneNumber: { type: String },
    dateEmployed: { type: Date, default: Date.now() },
    biometricInformation: { type: String }
});


userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

module.exports = model("userSchema", userSchema)