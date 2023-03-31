const mongoose = require("mongoose")

module.exports = async () => {
    let dbConn = mongoose.connection
    dbConn
        .on("connected", () => {
            console.log("Passengers microservice connected to mongo");
        })
        .on("error", (error) => {
            console.log(`error connecting to mongo>>${error.message}`);
        })
        .on("disconnected", () => {
            console.log("disconnected from mongo");
            setTimeout(async () => {
                console.log("reconnectint to mongo");
                await mongoose.connect("mongodb://mgdb:27017/nurtwDataBase")
            }, 5000)
        })
    await mongoose.connect("mongodb://mgdb:27017/nurtwDataBase")
}