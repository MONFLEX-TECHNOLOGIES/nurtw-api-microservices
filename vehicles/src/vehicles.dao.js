const vehicleModel = require("./vehicles.model");

class VehicleDao {
    constructor() {}
    async registerVehicle(data) {
        let newVehicle = vehicleModel(data);
        let vehicle = await newVehicle.save();
        return vehicle;
    }
    async getOneVehicle(id) {
        let vehicle = await vehicleModel.findById(id);
        return vehicle;
    }
    async gettAllVehicles() {
        let vehicles = await vehicleModel.find();
        return vehicles;
    }
    async updateVehicle(id, updateData) {
        let updatedVehicle = await vehicleModel.findByIdAndUpdate(id, { $set: updateData },{ new: true })
        return updatedVehicle;
    }
    async customQuery(query){
        let result = vehicleModel.find(query);
        return result;
    }
    async customQuery(query){
        let result = await vehicleModel.find(query);
        return result
    }
    async deleteVehicle(id) {
        let deletedVehicle = await vehicleModel.findByIdAndDelete(id);
        return deletedVehicle;
    }
}

module.exports = new VehicleDao()
