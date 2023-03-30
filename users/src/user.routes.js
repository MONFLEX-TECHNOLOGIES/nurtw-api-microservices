const userDao = require("./user.dao");
const { Router } = require("express");
let api = Router();

module.exports = () => {
    api.post("/", async (req, res) => {
        try {
            let data = req.body;
            let newUser = await userDao.registerUser(data);
            res.status(200).json({ ok: true, payload: newUser })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.get("/", async (req, res) => {
        try {
            let allUsers = await userDao.getusers();
            res.status(200).json({ ok: true, payload: allUsers })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let user = await userDao.getUser(id);
            res.status(200).json({ ok: true, payload: user })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let updateData = req.body;
            let updatedUser = await userDao.updateUser(id, updateData);
            res.status(200).json({ ok: true, payload: updatedUser })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    })
    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let deletedUser = await userDao.deleteUser(id);
            res.status(200).json({ ok: true, message: `User with the id ${deletedUser._id} has been deleted` })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });
    api.post("/custom", async (req, res) => {
        try {
            let query = req.body;
            let result = await userDao.customQuery(query)
            res.status(200).json({ ok: true, payload: result })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message })
        }
    });


    return api;


}

