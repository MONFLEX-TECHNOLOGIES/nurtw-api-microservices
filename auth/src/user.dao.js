const userModel = require("./user.model");

class UserDao {

    constructor() { }

    async registerUser(data) {
        let user = new userModel(data);
        let newStaff = await user.save();
        return newStaff;
    }
    async getUser(id) {
        let user = await userModel.findById(id);
        return user;
    }
    async getByUsername( userName ) {
        let user = await userModel.findOne( userName)
        return user;
    }
    async getusers() {
        let users = await userModel.find();
        return users;
    }
    async updateUser(id, updateData) {
        let updatedUser = await userModel.findByIdAndUpdate(id, { $set: updateData }, { new: true })
        return updatedUser;
    }
    async customQuery(query) {
        let result = await userModel.find(query);
        return result;
    }
    async deleteUser(id) {
        let deletedUser = await userModel.findByIdAndDelete(id);
        return deletedUser;
    }
}




module.exports = new UserDao();