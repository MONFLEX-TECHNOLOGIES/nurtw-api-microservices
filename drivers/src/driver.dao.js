const driverModel = require("./driver.model");
class DriverDao {
    constructor() { }


    async registerDriver(data) {
        let driver = new driverModel(data);
        let newDriver = await driver.save();
        return newDriver;
    }
    async getDriver(id) {
        let driver = await driverModel.findById(id)
        return driver;
    }
    async getAllDrivers() {
        let allDrivers = await driverModel.find();
        return allDrivers;
    }
    async customQuery(query) {
        let result =await driverModel.find(query);
        return result;
    }
    async updateDriver(id, updateData) {
        let updatedDriver = await driverModel.findByIdAndUpdate(id, { $set: updateData }, { new: true })
        return updatedDriver;
    }
    async deleteDriver(id) {
        let deletedDriver = await driverModel.findByIdAndDelete(id);
        return deletedDriver;
    }
}

module.exports = new DriverDao();
