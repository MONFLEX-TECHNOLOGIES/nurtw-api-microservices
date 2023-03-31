const passengerModel = require("./passengers.model");

class PassengerDao {
    constructor() { }

    async registerPassenger(data) {
        let newPassenger = new passengerModel(data)
        let passenger = await newPassenger.save();
        return passenger;
    }
    async getOnePassenger(id) {
        let passenger = await passengerModel.findById(id);
        return passenger;
    }
    async getAllPassengers() {
        let passengers = await passengerModel.find();
        return passengers;
    }
    async customQuery(query){
        let result = await passengerModel.find(query);
        return result
    }
    async updatePassenger(id, updateData) {
        let updatedPassenger = await passengerModel.findByIdAndUpdate(id, { $set: updateData },{ new: true });
        return updatedPassenger;
    }
    async deletePassenger(id) {
        let deletedPassenger = await passengerModel.findByIdAndDelete(id);
        return deletedPassenger;
    }
}
module.exports = new PassengerDao();