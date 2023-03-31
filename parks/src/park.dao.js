const parkModel = require("./park.model")

class ParkDao {
    constructor() { }

    async registerPark(data) {
        let newPark = new parkModel(data);
        let park = await newPark.save();
        return park;
    }
    async getOnePark(id) {
        let park = await parkModel.findById(id);
        return park;
    }
    async getAllParks() {
        let parks = await parkModel.find();
        return parks;
    }
    async customQuery(query) {
        let result = parkModel.find(query);
        return result;
    }
    async updateParks(id, updateData) {
        let updatedPark = await parkModel.findByIdAndUpdate(id, { $set: updateData }, { new: true })
        return updatedPark;
    }
    async deletePark(id) {
        let deletedPark = await parkModel.findByIdAndDelete(id);
        return deletedPark;
    }
}

module.exports = new ParkDao;