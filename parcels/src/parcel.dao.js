const parcelModel = require("./parcel.model");


class ParcelDao {
    constructor() { }


    async registerParcel(data) {
        let newParcel = new parcelModel(data)
        let parcel = await newParcel.save();
        return parcel;
    }
    async getOneParcel(id) {
        let parcel = await parcelModel.findById(id);
        return parcel;
    }
    async getAllParcels() {
        let allParcels = await parcelModel.find();
        return allParcels;
    }
    async customQuery(query) {
        let result = await parcelModel.find(query);
        return result;
    }
    async updateParcel(id, data) {
        let updatedParcel = await parcelModel.findByIdAndUpdate(id, { $set: data }, { new: true })
        return updatedParcel;
    }
    async deleteParcel(id) {
        let deletedParcel = await parcelModel.findByIdAndDelete(id);
        return deletedParcel;
    }
}

module.exports = new ParcelDao();
